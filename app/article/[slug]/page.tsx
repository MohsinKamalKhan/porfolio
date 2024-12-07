import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { CalendarIcon } from '@radix-ui/react-icons'
import { createClient } from '@/utils/supabase/server'
import HTMLReactParser from 'html-react-parser'

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: id } = await params;
  const supabase = await createClient();
  const {data, error} = await supabase.from('articles').select('*').filter('id', 'eq', id);
  if (error) {
    console.log(error);
    throw Error("Error Fetching Articles from DB!");
  }

  const article = data![0] as ArticleType;
  if (!article) {
    notFound()
  }

  return (
    <div className="container py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight">{article.title}</h1>
        <Button asChild>
          <Link href="/articles">Back to Articles</Link>
        </Button>
      </div>
      <div className="space-y-6">
        <Image
          src={article.img_link || '/assets/placeholder-image.jpg'} 
          alt={article.title} 
          width={400} 
          height={200}
          className="rounded-lg object-cover"
        />
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarIcon className="w-4 h-4 mr-2" />
          {String(article.date).slice(0, 10)}
        </div>
        <div className="prose prose-lg max-w-none">
          {HTMLReactParser(article.content)}
        </div>
      </div>
    </div>
  )
}

