import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { CalendarIcon } from '@radix-ui/react-icons'

interface BlogPostProps {
  title: string
  image: string
  date: string
  link: string
}

export function BlogPost({ title, image, date, link }: BlogPostProps) {
  return (
    <Card className="overflow-hidden">
      <Image src={image} alt={title} width={400} height={200} className="w-[400px] h-[200px] object-cover" />
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <Link href={link} className="text-sm font-medium hover:underline">
          Read More
        </Link>
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarIcon className="w-4 h-4 mr-1" />
          {date}
        </div>
      </CardFooter>
    </Card>
  )
}

