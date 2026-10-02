"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Code2, Database, Brain, Globe } from "lucide-react";
import Scene3D from "./components/Scene3D";

export default function Home() {
  return (
    <main className="bg-[#050816] text-white overflow-hidden">

      {/* ================= NAVBAR ================= */}

      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-6 bg-[#050816]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          <a
            href="#home"
            className="text-2xl font-bold tracking-wide"
          >
            JYOTI<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">

            <a
              href="#about"
              className="hover:text-cyan-400 transition"
            >
              About
            </a>

            <a
              href="#skills"
              className="hover:text-cyan-400 transition"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="hover:text-cyan-400 transition"
            >
              Projects
            </a>

            <a
              href="#education"
              className="hover:text-cyan-400 transition"
            >
              Education
            </a>

            <a
              href="#contact"
              className="hover:text-cyan-400 transition"
            >
              Contact
            </a>

          </div>

        </div>
      </nav>


      {/* ================= HERO ================= */}

      <section
        id="home"
        className="min-h-screen flex items-center px-6 md:px-10 pt-24"
      >

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 items-center">

          {/* Hero Content */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-cyan-400 font-medium mb-4">
              HELLO, I'M
            </p>

            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              Jyoti
              <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Priya
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-300 mt-6">
              Full Stack Developer
            </h2>

            <p className="text-gray-400 max-w-xl mt-6 leading-7">
              MCA graduate passionate about building modern web applications,
              artificial intelligence, machine learning and interactive digital
              experiences.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="#projects"
                className="px-7 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-7 py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
              >
                Contact Me
              </a>

            </div>

            <div className="flex gap-4 mt-8">

        <a
  href="https://github.com/jyoti0009"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-3 px-7 py-4 rounded-full border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition"
>
  <span className="font-bold">GH</span>
  GitHub
</a>

             <a
  href="https://www.linkedin.com/in/jyoti-priya74"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-3 px-7 py-4 rounded-full border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition"
>
  <span className="font-bold">in</span>
  LinkedIn
</a>

            </div>

          </motion.div>


          {/* 3D Scene */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <Scene3D />
          </motion.div>

        </div>


        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400"
        >
          <ArrowDown size={24} />
        </motion.div>

      </section>


      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="py-28 px-6 md:px-10"
      >

        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <p className="text-cyan-400 font-medium">
              GET TO KNOW ME
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              About <span className="text-cyan-400">Me</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mt-12">

              <div>
                <h3 className="text-2xl font-semibold mb-5">
                  I'm Jyoti Priya
                </h3>

                <p className="text-gray-400 leading-8">
                  I am an MCA graduate with a strong interest in software
                  development, full-stack web development and Artificial
                  Intelligence & Machine Learning.
                </p>

                <p className="text-gray-400 leading-8 mt-5">
                  I enjoy creating responsive, user-friendly web applications
                  and solving programming problems. I am continuously learning
                  new technologies and looking for opportunities where I can
                  contribute, grow and build meaningful software.
                </p>
              </div>


              <div className="grid grid-cols-2 gap-5">

                <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                  <Code2 className="text-cyan-400 mb-4" />
                  <h3 className="font-semibold">
                    Full Stack
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    Modern web applications
                  </p>
                </div>

                <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                  <Brain className="text-cyan-400 mb-4" />
                  <h3 className="font-semibold">
                    AI / ML
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    Intelligent applications
                  </p>
                </div>

                <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                  <Globe className="text-cyan-400 mb-4" />
                  <h3 className="font-semibold">
                    Responsive
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    Mobile-friendly interfaces
                  </p>
                </div>

                <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                  <Database className="text-cyan-400 mb-4" />
                  <h3 className="font-semibold">
                    Database
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    SQL & database concepts
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section
        id="skills"
        className="py-28 px-6 md:px-10 bg-white/[0.02]"
      >

        <div className="max-w-6xl mx-auto">

          <p className="text-cyan-400 font-medium">
            MY EXPERTISE
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

            {/* Programming */}

            <SkillCard
              title="Programming"
              skills={["Java", "Python"]}
            />

            {/* Web */}

            <SkillCard
              title="Web Technologies"
              skills={[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Next.js",
              ]}
            />

            {/* Database */}

            <SkillCard
              title="Database"
              skills={["MySQL", "MongoDB", "DBMS"]}
            />

            {/* Concepts */}

            <SkillCard
              title="Core Concepts"
              skills={[
                "OOP",
                "Data Structures",
                "DBMS",
                "Problem Solving",
              ]}
            />

            {/* AI */}

            <SkillCard
              title="AI / Machine Learning"
              skills={[
                "Machine Learning",
                "Python",
                "Pandas",
                "NumPy",
                "Scikit-learn",
              ]}
            />

            {/* Tools */}

            <SkillCard
              title="Tools"
              skills={[
                "Git",
                "GitHub",
                "VS Code",
                "Jupyter",
                "MS Office",
              ]}
            />

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="py-28 px-6 md:px-10"
      >

        <div className="max-w-6xl mx-auto">

          <p className="text-cyan-400 font-medium">
            MY WORK
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-12">


            {/* Project 1 */}

            <ProjectCard
              number="01"
              title="Food Delivery Web Application"
              description="A full-stack food delivery web application with responsive interfaces, user-focused functionality and database integration."
              technologies={[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "MySQL",
              ]}
            />


            {/* Project 2 */}

            <ProjectCard
              number="02"
              title="Fake Recognition"
              description="An AI/ML based project focused on identifying fake or manipulated information using machine learning concepts."
              technologies={[
                "Python",
                "Machine Learning",
                "Pandas",
                "NumPy",
                "Scikit-learn",
              ]}
            />


            {/* Project 3 */}

            <ProjectCard
              number="03"
              title="Twitter Clone"
              description="A social media style web application inspired by Twitter with user interface components and interactive functionality."
              technologies={[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
              ]}
            />

          </div>

        </div>

      </section>


      {/* ================= EDUCATION ================= */}

      <section
        id="education"
        className="py-28 px-6 md:px-10 bg-white/[0.02]"
      >

        <div className="max-w-6xl mx-auto">

          <p className="text-cyan-400 font-medium">
            MY JOURNEY
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Education
          </h2>


          <div className="mt-12 space-y-6">

            <div className="p-7 rounded-2xl border border-white/10 bg-white/5">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

                <div>
                  <h3 className="text-2xl font-semibold">
                    Master of Computer Applications
                  </h3>

                  <p className="text-cyan-400 mt-2">
                    Veer Madho Singh Bhandari Uttarakhand Technical University
                  </p>

                  <p className="text-gray-400 mt-2">
                    Dehradun, Uttarakhand
                  </p>
                </div>

                <span className="text-gray-400">
                  MCA
                </span>

              </div>

            </div>


            <div className="p-7 rounded-2xl border border-white/10 bg-white/5">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

                <div>
                  <h3 className="text-2xl font-semibold">
                    Bachelor of Computer Applications
                  </h3>

                  <p className="text-cyan-400 mt-2">
                    Banasthali Vidyapith
                  </p>

                  <p className="text-gray-400 mt-2">
                    Jaipur, Rajasthan
                  </p>
                </div>

                <span className="text-gray-400">
                  BCA • 2023
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="py-28 px-6 md:px-10"
      >

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-cyan-400 font-medium">
            GET IN TOUCH
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-7">
            I'm open to opportunities in software development, full-stack web
            development, AI/ML and related technology roles.
          </p>

<div className="flex flex-col md:flex-row justify-center gap-5 mt-10">

  <a
    href="mailto:jyotipriya438@gmail.com"
    className="flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
  >
    <Mail size={20} />
    Email Me
  </a>

  <a
    href="https://github.com/jyoti0009"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-3 px-7 py-4 rounded-full border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition"
  >
    <span className="font-bold">GH</span>
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/jyoti-priya74"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-3 px-7 py-4 rounded-full border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition"
  >
    <span className="font-bold">in</span>
    LinkedIn
  </a>

</div>
          
          </div>

        

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10 py-8 text-center">

        <p className="text-gray-500 text-sm">
          © 2026 Jyoti Priya. Built with Next.js, React & Three.js.
        </p>

      </footer>

    </main>
  );
}


/* ================= SKILL CARD ================= */

function SkillCard({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="p-7 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan-400/40 transition"
    >

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2 mt-5">

        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 rounded-full bg-cyan-400/10 text-cyan-300 text-sm"
          >
            {skill}
          </span>
        ))}

      </div>

    </motion.div>
  );
}


/* ================= PROJECT CARD ================= */

function ProjectCard({
  number,
  title,
  description,
  technologies,
}: {
  number: string;
  title: string;
  description: string;
  technologies: string[];
}) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.2 }}
      className="group p-7 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan-400/50 transition"
    >

      <p className="text-cyan-400 text-sm font-semibold">
        PROJECT {number}
      </p>

      <h3 className="text-2xl font-semibold mt-4 group-hover:text-cyan-400 transition">
        {title}
      </h3>

      <p className="text-gray-400 leading-7 mt-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-6">

        {technologies.map((technology) => (
          <span
            key={technology}
            className="text-xs px-3 py-1.5 rounded-full border border-gray-700 text-gray-300"
          >
            {technology}
          </span>
        ))}

      </div>

    </motion.div>
  );
}