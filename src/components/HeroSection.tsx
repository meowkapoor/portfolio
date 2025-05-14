import Link from "next/link";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { HoverBorderGradient } from "./ui/hover-border-gradient";


function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full flex items-center justify-center overflow-hidden mx-auto py-4 md:py-0 relative">
         <BackgroundBeamsWithCollision>
        <div className="p-4 relative w-full text-center">
            <h1 className="
                mt-20 py-1 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400
            ">Master the art of coding</h1>
            <p className="
                mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto
            ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea iste cum nam, odio iure quisquam, quas, dolorem itaque officia aut sint quam quod velit reprehenderit fugit minima rerum sed amet.</p>
            <div className="mt-4 flex justify-center">
                <Link href={'/projects'}>
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                    >
                        <span>Explore My Projects</span>
                    </HoverBorderGradient>
                </Link>
            </div>
        </div>
          </BackgroundBeamsWithCollision>
    </div>
  )
}

export default HeroSection;