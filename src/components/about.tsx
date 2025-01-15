'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4 text-justify">
          I&apos;m Hana A. Kassie, an Electrical &amp; Computer Engineer and
          front-end developer from Ethiopia. My passion for technology began
          early, and over the past three years, I&apos;ve focused on blending my
          engineering expertise with my love for creating user-focused
          applications. I thrive on solving complex problems, whether it&apos;s
          designing intuitive interfaces or exploring advanced computing
          concepts. As an engineer, I&apos;ve worked on projects involving
          autonomous systems, deep learning, and human-computer interaction,
          applying cutting-edge technologies to real-world challenges. On the
          front-end, I specialize in React, Next.js, TypeScript, and Tailwind
          CSS, building dynamic, responsive applications, and have experience
          with back-end technologies like Nest.js and Prisma for full-stack
          development. What excites me most is the intersection of engineering
          and software development—leveraging technical knowledge to create
          innovative, scalable solutions, whether optimizing algorithms for
          robots or designing seamless web applications.
        </p>
        <p>
          I&apos;m open to opportunities where I can bring my diverse skills to
          the table, contribute to impactful projects, and continue to grow as a
          professional. If you&apos;re looking for someone who&apos;s passionate
          about blending engineering and front-end development, I&apos;d love to
          hear from you!
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
