"use server";

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export const signInAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect("error", "/login", error.message);
  }

  return redirect("/add-project");
};

export const signOutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect("/login");
};



export async function submitProject(formData: FormData, technologies: string[]) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      success: false,
      message: "You are not logged in!",
    };
  }

  const projectTitle = formData.get("projectTitle");
  const projectDescription = formData.get("projectDescription");
  const projectGoal = formData.get("projectGoal");
  const projectScope = formData.get("projectScope");
  const imageFile = formData.get("img");
  const githubLink = formData.get("githubLink");
  const livePreview = formData.get("livePreview");
  const startDate = formData.get("startDate");
  const endDate = formData.get("endDate");
  const technical_requirement = formData.get("technicalRequirement");

  if (
    imageFile instanceof File &&
    (imageFile.type === "image/jpeg" ||
      imageFile.type === "image/png" ||
      imageFile.type === "image/PNG" ||
      imageFile.type === "image/jpg" ||
      imageFile.type === "image/webp")
  ) {
    const randomFileName = `${Date.now()}_${Math.random().toString(36).substring(2, 15)}.${imageFile.name.split(".").pop()}`;

    let { error: ErrorFile } = await supabase.storage
      .from("images")
      .upload(randomFileName, imageFile!, {
        cacheControl: "3600",

        upsert: false,
      });

    if (ErrorFile) {
      return {
        success: false,
        message: "Error uploading Img!",
      };
    }

    const { data, error } = await supabase.rpc('insert_project', {
      image_link: `https://${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID}.supabase.co/storage/v1/object/public/images/${randomFileName}`,
      github_link: githubLink,
      live_preview: livePreview,
      project_description: projectDescription,
      project_goal: projectGoal,
      project_scope: projectScope,
      project_title: projectTitle,
      technical_requirement: technical_requirement,
      technologies: technologies,
      start_date: startDate,
      end_date: endDate
    });

    if (error) {
      console.log('Error Occured while adding project: ', error);
      // In case of error, delete the uploaded image
      const { error: ErrorDelFile } = await supabase.storage.from("images").remove([randomFileName]);

      if (ErrorDelFile) {
        console.error("Error deleting image:", ErrorDelFile);
        return {
          success: false,
          message: "Error Deleting Image.",
        };
      }
      return {
        success: false,
        message: error.message,
      };
    }

    return {
      success: true,
      message: "Project Added!",
    };
  }

  return {
    success: false,
    message: "You must have to add an image",
  };
}

export async function submitArticle(formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      success: false,
      message: "You are not logged in!",
    };
  }

  const articleTitle = formData.get("articleTitle");
  const articleContent = formData.get("articleContent");
  const imageFile = formData.get("img");

  if (
    imageFile instanceof File &&
    (imageFile.type === "image/jpeg" ||
      imageFile.type === "image/png" ||
      imageFile.type === "image/PNG" ||
      imageFile.type === "image/jpg" ||
      imageFile.type === "image/webp")
  ) {
    const randomFileName = `${Date.now()}_${Math.random().toString(36).substring(2, 15)}.${imageFile.name.split(".").pop()}`;

    let { error: ErrorFile } = await supabase.storage
      .from("images")
      .upload(randomFileName, imageFile!, {
        cacheControl: "3600",

        upsert: false,
      });

    if (ErrorFile) {
      return {
        success: false,
        message: "Error uploading Img!",
      };
    }

    const { error } = await supabase.from('articles').insert({ 
      title: articleTitle, 
      content: articleContent,
      img_link: `https://${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID}.supabase.co/storage/v1/object/public/images/${randomFileName}`,
    });


    if (error) {
      console.log('Error Occured while adding project: ', error);
      // In case of error, delete the uploaded image
      const { error: ErrorDelFile } = await supabase.storage.from("images").remove([randomFileName]);

      if (ErrorDelFile) {
        console.error("Error deleting image:", ErrorDelFile);
        return {
          success: false,
          message: "Error Deleting Image.",
        };
      }
      return {
        success: false,
        message: error.message,
      };
    }

    return {
      success: true,
      message: "Article Added!",
    };
  }

  return {
    success: false,
    message: "You must have to add an image",
  };
}