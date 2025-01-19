'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const Intro = () => {
  const { ref } = useSectionInView('Home');

  return (
    <section
      ref={ref}
      id="home"
      // className="my-10 flex scroll-mt-96 flex-col items-center gap-4 text-center sm:mt-150"
      className=" sm:mt-150 flex scroll-mt-96 flex-col items-center gap-4 text-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 15,
          duration: 0.6,
        }}
        className="flex flex-wrap gap-2"
      >
        <Image
          alt="hana"
          src="/img/hana-one3.png"
          width={270}
          height={270}
          priority
          style={{ width: '100%', height: 'auto' }}
        />
      </motion.div>
      <motion.a
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'tween',
          duration: 0.2,
        }}
        href="https://github.com/HanaAndargie?tab=repositories"
        className="bg-muted rounded px-3 py-1 text-sm font-medium"
      >
        🎉
        <span className="ml-3">Check out my new project</span>
      </motion.a>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold leading-tight tracking-tighter sm:text-4xl"
      >
        {/* Front-end developer with a passion for design */}
        Electrical &amp; Computer Engineer | Front-End Developer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="text-muted-foreground max-w-lg text-justify"
      >
        {/* Hello, I&apos;m Michał. I am front-end developer from Poland. I enjoy
        building sites and apps. My focus is React (Next.js). */}
        {/* Hello, I&apos;m Hana. I am xyz developer from Ethiopia. I enjoy building
        sites and apps. My focus is React (Next.js). */}
        I am an Electrical &amp; Computer Engineer &amp; Front-End Developer
        passionate about advancing Human-Computer Interaction (HCI) &amp;
        Human-Robot Interaction (HRI). My work spans cutting-edge research,
        real-world engineering projects, &amp; impactful community leadership.
        With experience in autonomous systems, deep learning, &amp; web
        development, I aim to contribute to innovative &amp; meaningful
        solutions that drive progress &amp; make a difference.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-row gap-2"
      >
        <Button asChild size="lg">
          <Link href="#contact">
            Get in touch <Icons.arrowRight className="ml-2 size-4" />
          </Link>
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className="hidden sm:flex"
          asChild
        >
          <a href="/hanaresume.pdf" download>
            Download CV <Icons.download className="ml-2 size-4" />
          </a>
        </Button>
        <Button variant="secondary" size="icon" asChild>
          <a
            href="https://www.linkedin.com/in/hana-kassie-19b326227/"
            aria-label="Linkedin"
            download
            target="_blank"
          >
            <Icons.linkedin className="size-6" />
          </a>
        </Button>
        <Button variant="secondary" size="icon" asChild>
          <a
            href="https://github.com/HanaAndargie"
            aria-label="Github"
            target="_blank"
          >
            <Icons.github className="size-6" />
          </a>
        </Button>
      </motion.div>
    </section>
  );
};
