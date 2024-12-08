'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      className="text-sm font-medium transition-colors hover:text-primary h-[2rem]"
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  )

  const NavItems = () => (
    <>
      <NavItem href="/">Home</NavItem>
      <NavItem href="/projects">Projects</NavItem>
      <NavItem href="/articles">Articles</NavItem>
    </>
  )

  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">MK</span>
          </Link>
          <div className="sm:hidden md:inline-flex items-center gap-6">
            <NavItems />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button asChild className="sm:hidden md:inline-flex">
            <Link href="/#contact">Contact Me</Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-4">
                <NavItems />
                <Button asChild onClick={() => setIsOpen(false)}>
                  <Link href="/#contact">Contact Me</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

