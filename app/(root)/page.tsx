"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkles, Code2, Zap, Brain, Star, Cpu, Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-white dark:bg-black">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {/* Gradient Orbs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>

                {/* Enhanced Floating Particles */}
                <div className="absolute inset-0">
                    {[...Array(50)].map((_, i) => (
                        <div
                            key={i}
                            className={`absolute rounded-full animate-float ${i % 3 === 0 ? 'w-2 h-2 bg-purple-500' :
                                i % 3 === 1 ? 'w-1 h-1 bg-pink-500' : 'w-1.5 h-1.5 bg-indigo-500'
                                } opacity-30`}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 8}s`,
                                animationDuration: `${4 + Math.random() * 6}s`
                            }}
                        ></div>
                    ))}
                </div>

                {/* Glowing Dots */}
                <div className="absolute inset-0">
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={`glow-${i}`}
                            className="absolute w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse opacity-20"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                filter: 'blur(1px)'
                            }}
                        ></div>
                    ))}
                </div>

                {/* Animated Icons */}
                <div className="absolute inset-0 pointer-events-none">
                    {[
                        { Icon: Code2, delay: 0, position: { top: '10%', left: '15%' } },
                        { Icon: Terminal, delay: 2, position: { top: '20%', right: '20%' } },
                        { Icon: Cpu, delay: 4, position: { bottom: '30%', left: '10%' } },
                        { Icon: Star, delay: 6, position: { top: '60%', right: '15%' } },
                        { Icon: Zap, delay: 1, position: { bottom: '20%', right: '25%' } },
                        { Icon: Brain, delay: 3, position: { top: '40%', left: '5%' } }
                    ].map(({ Icon, delay, position }, i) => (
                        <div
                            key={`icon-${i}`}
                            className="absolute animate-float opacity-10 dark:opacity-20"
                            style={{
                                ...position,
                                animationDelay: `${delay}s`,
                                animationDuration: '8s'
                            }}
                        >
                            <Icon className="w-6 h-6 text-purple-500" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="relative mt-4 z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
                {/* Hero Badge */}
                <div className="mb-8 group">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 dark:border-purple-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 hover:scale-105">
                        <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Powered by Advanced AI
                        </span>
                    </div>
                </div>

                {/* Main Heading */}
                <div className="text-center space-y-6 max-w-5xl mx-auto mb-8">

                    <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        AI-enhanced development with zen-like simplicity.
                        <br />
                        <span className="text-lg opacity-80">
                            Write, debug, and optimize code effortlessly with intelligent assistance.
                        </span>
                    </p>
                </div>

                {/* Hero Image/Mockup */}
                <div className="mb-12 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
                    <Image
                        src="/hero.svg"
                        alt="ZenG AI Editor Interface"
                        height={400}
                        width={600}
                        className="rounded-lg hover:scale-105 transition-transform duration-500 relative z-10"
                    />
                </div>

                {/* Feature Pills */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {[
                        { icon: Brain, text: "AI-Powered" },
                        { icon: Zap, text: "Lightning Fast" },
                        { icon: Code2, text: "Smart Completion" }
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 hover:scale-105"
                        >
                            <feature.icon className="w-4 h-4" />
                            <span className="text-sm font-medium">{feature.text}</span>
                        </div>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 items-center mb-16">
                    <Link href="/dashboard">
                        <Button
                            size="lg"
                            className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-3 text-lg font-semibold hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            Get Started Free
                            <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                        </Button>
                    </Link>

                    <Link href="/demo">
                        <Button
                            variant="outline"
                            size="lg"
                            className="px-8 py-3 text-lg font-semibold border-2 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-200 hover:scale-105"
                        >
                            Watch Demo
                        </Button>
                    </Link>
                </div>


            </div>


        </div>
    );
}