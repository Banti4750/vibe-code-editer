import Link from "next/link";
import { Github, Twitter, Globe, Heart } from "lucide-react";
import Image from "next/image";

interface SocialLink {
    href: string;
    icon: React.ReactNode;
    label: string;
}

export function Footer() {
    const socialLinks: SocialLink[] = [
        {
            href: "https://github.com/yourusername/vibe-editor",
            icon: <Github className="w-5 h-5" />,
            label: "GitHub"
        },
        {
            href: "https://twitter.com/yourusername",
            icon: <Twitter className="w-5 h-5" />,
            label: "Twitter"
        },
        {
            href: "https://your-website.com",
            icon: <Globe className="w-5 h-5" />,
            label: "Website"
        }
    ];

    const footerLinks = [
        { href: "/about", text: "About" },
        { href: "/docs", text: "Documentation" },
        { href: "/changelog", text: "Changelog" },
        { href: "/support", text: "Support" }
    ];

    return (
        <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
                {/* Main Footer Content */}
                <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
                    {/* Brand Section */}
                    <div className="flex flex-col items-center lg:items-start space-y-2">
                        <div className="flex items-center space-x-2">
                            <Image
                                src={"/logo.svg"}
                                alt="Logo"
                                height={60}
                                width={60}
                            />
                            <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                                ZenG AI
                            </span>
                        </div>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xs text-center lg:text-left">
                            AI-powered code editor designed for developers who value simplicity and speed.</p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                            >
                                {link.text}
                            </Link>
                        ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center space-x-4">
                        {socialLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                                aria-label={link.label}
                            >
                                {link.icon}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                    {/* Copyright */}
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 flex items-center">
                        &copy; {new Date().getFullYear()} Banti Kumar. Made with{" "}
                        <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" />{" "}
                        for developers.
                    </p>

                    {/* Version Info */}
                    <div className="flex items-center space-x-4 text-xs text-zinc-400 dark:text-zinc-500">
                        <span>v1.0.0</span>
                        <span>•</span>
                        <Link
                            href="/privacy"
                            className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                        >
                            Privacy
                        </Link>
                        <span>•</span>
                        <Link
                            href="/terms"
                            className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                        >
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}