import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-xl">MK</span>
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/projects" className="text-sm font-medium transition-colors hover:text-primary">
            Projects
          </Link>
          <Link href="/articles" className="text-sm font-medium transition-colors hover:text-primary">
            Articles
          </Link>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Button asChild>
            <Link href="/#contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

