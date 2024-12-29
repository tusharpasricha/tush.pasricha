import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Timeline } from "@/components/Timeline";

export default function Page() {
  const projects = [
    {
      title: "Freelancing website using Blockchain",
      description:
        "Freelancing application used to create a contract between freelancer and employer increasing the trustability.",
      image: "/img/freelancing.png",
      tags: ["SOLIDITY", "METAMASK", "REACT"],
      demo: "https://freelancer-dapp-tusharpasricha.vercel.app/",
      code: "https://github.com/tusharpasricha/freelancing-deals-dapp",
    },
    {
      title: "Rent Tracker",
      description:
        "Rent Tracking website where you can manage your rented property.",
      image: "/img/renttraker.png",
      tags: ["REACT", "FIREBASE"],
      demo: "https://renttracker.vercel.app/",
      code: "https://github.com/tusharpasricha/renttracker",
    },
    {
      title: "Bitcoin Explorer",
      description:
        "A bitcoin explorer with a feature where you can interact with like-minded bitcoiners",
      image: "/img/bitcoin.png",
      tags: ["REACT"],
      demo: "https://bitcoin-explorer-tusharpasricha.vercel.app/",
      code: "https://github.com/tusharpasricha/Bitcoin-Explorer",
    },
  ];

  const skills = [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "SQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Tailwind",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="relative mx-auto mb-8 h-48 w-48">
          <div className="absolute inset-0 rounded-full bg-[#E97451]" />
          <Image
            src="/img/tush4.jpeg"
            alt="Profile"
            width={192}
            height={192}
            className="relative rounded-full object-cover"
          />
        </div>
        <h1 className="mb-4 text-4xl font-bold">Tushar Pasricha</h1>
        <p className="mx-auto mb-6 max-w-2xl text-gray-400">
          I&apos;m a recent B.Tech graduate in Computer Science and Engineering with
          a passion for solving problems and learning something new every day.
          My focus is on understanding the core principles behind technology and
          finding practical ways to apply them.
        </p>
        <p className="mx-auto mb-8 max-w-2xl text-gray-400">
          I believe in approaching every project with curiosity and a
          willingness to grow, knowing there&apos;s always more to learn. Whether in
          development or life, I&apos;m committed to staying adaptable and open to
          new challenges.
        </p>
        <div className="mb-8 flex justify-center gap-4">
          <a
            href="https://linkedin.com/in/tusharpasricha"
            target="_blank"
            className="text-gray-400 hover:text-white"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://github.com/tusharpasricha"
            target="_blank"
            className="text-gray-400 hover:text-white"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://twitter.com/tusharpasricha_"
            target="_blank"
            className="text-gray-400 hover:text-white"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </a>
        </div>
        {/* <Button variant="secondary"> */}
          <a
          
            href="https://drive.google.com/file/d/1vkInHRCuuAFM2XEWkB2dUQZL7NGZ6MPq/view" // Link to the local resume image
            download="Tushar_Pasricha_Resume"
            target="_blank"
            className="text-gray-400 hover:text-gray-300 bg-gray-900 py-2 px-4 rounded-lg text-sm"
          >
            Resume
          </a>
        {/* </Button> */}
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-2xl font-bold text-center">
          Experience & Education
        </h2>
        <Timeline />
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-2xl font-bold text-center">Skills</h2>
        <div className="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill) => (
            <div key={skill.name} className="text-center">
              <Image
                src={skill.icon}
                alt={skill.name}
                width={50}
                height={50}
                className="mx-auto mb-2"
              />
              <p className="text-sm text-gray-400">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-2xl font-bold text-center">Projects</h2>
        <div className="grid gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="bg-zinc-900 text-white">
              <CardContent className="grid gap-4 p-6 md:grid-cols-2">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="rounded-lg object-cover"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                    <p className="mb-4 text-gray-400">{project.description}</p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button variant="secondary" asChild>
                      <a href={project.demo}>Demo</a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={project.code}>Code</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
