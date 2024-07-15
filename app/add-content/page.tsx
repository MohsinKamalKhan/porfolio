import AddContent from "@/components/add_content/add_content";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function AddContentPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  const addContent = async(formData : FormData) => {
    "use server";
    const supabase = createClient();
  
    const heading = formData.get('heading');
    const content = formData.get('content');

    if (formData.get('post_or_blog') === 'post') {

        const imageFile = formData.get('img');
        if (imageFile instanceof File && (imageFile.type === 'image/jpeg' || imageFile.type === 'image/png')) {
            let { error } = await supabase.storage.from('images').upload(imageFile.name, imageFile!, {
                cacheControl: '3600',
                upsert: false
            });
            if ( error ) console.log('Error occured while uploading file!'); 

            const result = await supabase.from("projects").insert({
              heading: heading,
              content: content,
              image_link: `https://eysmfrpkevzzyedhpiez.supabase.co/storage/v1/object/public/images/${imageFile.name}`
            });

            if ( result.error ) {
              console.log('Error Occured in DB!');
              return;
            }
            redirect("/projects");
      }

    } else {
        const { error } = await supabase.from("blogs").insert({
          heading: heading,
          content: content
        });

        if ( error ) {
          console.log('Error Occured in DB!');
          return;
        }
        redirect("/blogs/0");
    }
  }

  return (
    <AddContent addContent={addContent} />
  );
}
