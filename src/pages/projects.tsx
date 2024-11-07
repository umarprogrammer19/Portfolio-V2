import Head from "next/head";

import ProjectCard from "@/components/projects/project-card";
import { PROJECTS_CARD } from "@/data/projects";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects by Umar Farooq - Fullstack Developer Portfolio</title>
        <meta
          name="description"
          content="Explore a collection of projects by Umar Farooq, a seasoned Fullstack Developer. From innovative web applications to responsive interfaces, discover the depth and diversity of my work."
        />
        <link rel="canonical" href="https://uf-portfolio-v2.vercel.app/projects" />
        <meta
          property="og:url"
          content="https://uf-portfolio-v2.vercel.app/projects"
        />
        <meta
          property="og:title"
          content="Discover Projects by Umar Farooq - Fullstack Developer"
        />
        <meta
          property="og:description"
          content="Explore a showcase of projects crafted by Umar Farooq, a Fullstack Developer. Witness the fusion of creativity and technology in web development."
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/static/homepage.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="keywords"
          content="Projects, Umar Portfolio, Software Developer, React Developer, Frontend Developer, Web Development, JavaScript, HTML, CSS, UI/UX, Web Applications, Responsive Design"
        />
      </Head>
      <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold text-foreground md:text-4xl">
            Projects
          </h1>
          <div className="my-2">
            <span className="text-sm text-muted-foreground">
              Here are some of the projects I&apos;d like to share
            </span>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
            {PROJECTS_CARD.map((card, index) => (
              <ProjectCard key={index} {...card} />
            ))}
          </div>
          <div className="mx-auto mt-16 max-w-5xl text-center text-foreground md:mt-28">
            <span className="text-xl font-bold md:text-2xl">
              I am currently building new projects and learning backend
              development to expand my skill set beyond frontend.
            </span>
            <p className="mt-10 text-base md:text-xl">
              Visit my github to see some of the latest projects{" "}
              <a
                href="https://github.com/yourusername?tab=repositories"
                target="_blank"
                className="font-semibold text-accent underline underline-offset-2 hover:text-accent/70"
              >
                Github
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
