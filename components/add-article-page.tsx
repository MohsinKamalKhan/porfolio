'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { submitArticle } from '@/app/actions'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'


export default function AddArticlePage() {
  const router = useRouter();
  const editorRef = useRef<any>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFileName(file ? file.name : null);
  };

  const handleSubmit = async (formData: FormData) => {
    const imgFile = formData.get("img");
    formData.set('articleContent', editorRef.current.getContent());
    if ((imgFile as File).size === 0) {
      return;
    }

    try {
      const response = await submitArticle(formData);

      if (response.success) {
        
        router.push('/articles')
      }
    } catch (error: any) {
      console.log('Error Adding Project: ', error);
    }
  }

  return (
    <div className="container py-12">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Add New Article</CardTitle>
        </CardHeader>
        <CardContent>
          <form 
            onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                await handleSubmit(formData);
            }} 
            className="space-y-6"
          >
            <div className="space-y-2">
              <Label htmlFor="articleTitle">Article Title</Label>
              <Input
                id="articleTitle"
                name="articleTitle"
                required
              />
            </div>
            <div className="space-y-2">
              <Editor
                onInit={(_evt, editor) => editorRef.current = editor}
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                  ],
                  toolbar: 'undo redo | blocks | ' +
                    'bold italic forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
                apiKey='m3eqngni9pkubcfjiujdhs1cj7hj15nyk4910twevwhoaowd'
              />
            </div>
            <div className="space-y-2">
                <input
                    type="file"
                    id="img"
                    name="img"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                />

                <label
                    htmlFor="img"
                >
                    <span className="mr-2">Upload Image</span>
                    <button
                    type="button"
                    onClick={() => {
                        const input = document.getElementById("img");
                        if (input) {
                        input.click();
                        }
                    }}
                    className="text-xs ml-auto px-4 py-1 bg-black text-white rounded-full"
                    >
                    Upload
                    </button>
                    {fileName && (
                        <span className="text-gray-200 text-sm mt-1 block max-w-full overflow-hidden text-ellipsis">
                        Selected file:
                        <span className="text-black text-sm mt-1 block truncate max-w-full">
                            {fileName}
                        </span>
                        </span>
                    )}
                </label>
            </div>
            <Button type="submit" className="w-full">Add Article</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
