'use client'
import Link from "next/link"
import projectData from "../data/my_projects.json"
import { BackgroundGradient } from "./ui/background-gradient"
import { HoverBorderGradient } from "./ui/hover-border-gradient"

interface Project{
    id: number,
    title: string,
    slug: string,
    description: string,
    instructor: string,
    isFeatured: boolean,
    image: string
}

function FeaturedCourses() {
    const featuredProjects = projectData.projects.filter((projects:Project) => projects.isFeatured)


  return (
    <div className="py-12 bg-neutral-950">
        <div>
            <div className="text-center">
                <h2 className="text-base text-purple-900 font-semibold tracking-wide uppercase">FEATURED PROJECTS</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">some of my favourite projects</p>
            </div>
        </div>
        <div className="mt-10 mx-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {featuredProjects.map((project:Project)=> (
                    <div key={project.id} className="flex justify-center">
                        <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <img
                                src={project.image}
                                alt={project.slug}
                                height="200"
                                width="200"
                                className="object-contain"
                            />
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{project.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{project.description}</p>
                                <Link href={`/courses/${project.slug}`}>
                                know more
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>
        <div className="mt-20 text-center">
            <Link href={"/courses"}
            className="px-4 py-2 flex justify-center items-center"
            >
                <HoverBorderGradient>
                    view all projects
                </HoverBorderGradient>
            </Link>
        </div>
    </div>
  )
}

export default FeaturedCourses