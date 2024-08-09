/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Zd1P3WLfREw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroComponent() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary to-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter text-primary-foreground sm:text-5xl xl:text-6xl/none">
                Unlock the Power of Web Development
              </h1>
              <p className="max-w-[600px] text-secondary-foreground md:text-xl">
                Our platform provides the tools and resources you need to build stunning, high-performing web
                applications with ease.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-lg flex-1 bg-primary-foreground text-primary"
                />
                <Button type="submit" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Get Started
                </Button>
              </form>
              <p className="text-xs text-secondary-foreground">
                Sign up to get notified when we launch.{" "}
                <Link href="#" className="underline underline-offset-2 hover:text-secondary" prefetch={false}>
                  Terms &amp; Conditions
                </Link>
              </p>
            </div>
          </div>
          <img
            src="/placeholder.svg"
            width="550"
            height="310"
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  )
}