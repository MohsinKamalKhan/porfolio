import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mohsin Kamal Khan - Full-Stack Developer',
  description: 'Portfolio of Mohsin Kamal Khan, a Full-Stack Developer specializing in modern web applications.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

