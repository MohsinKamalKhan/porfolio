import Link from "next/link";

export default function Footer() {
    return (
    <footer className="border-t bg-muted/50">
        <div className="container py-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">© 2025 MK. All rights reserved.</p>
            </div>
            <nav className="flex gap-4">
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary">Home</Link>
            <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary">Projects</Link>
            <Link href="/articles" className="text-sm text-muted-foreground hover:text-primary">Articles</Link>
            </nav>
        </div>
    </footer>
    );
}