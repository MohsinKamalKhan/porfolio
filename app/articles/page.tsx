import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BlogPost } from '@/components/blog-post'
import { createClient } from '@/utils/supabase/server';

export default async function ArticlesPage() {
  const supabase = await createClient();
  const {data, error} = await supabase.from('articles').select('*');
  if (error) {
    console.log(error);
    throw Error("Error Fetching Articles from DB!");
  }
  const articles = data as ArticleType[];

  return (
    <div className="container py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight">All Articles</h1>
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map(article => (
          <BlogPost
            key={article.id}
            title={article.title}
            date={String(article.date).slice(0, 10)}
            image={article.img_link}
            link={`/article/${article.id}`}
          />
        ))}
      </div>
    </div>
  )
}

