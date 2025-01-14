import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/img/ocs.png',
    title: 'Improving Video-Level Consistency in NVS',
    description:
      'Research on consistency in video synthesis. Focused on complex scenes and occlusions.',
    technologies: ['Novel View Synthesis', 'Video Analysis', 'Research'],
    links: {
      preview: 'https://your-preview-link.com',
      github: 'https://github.com/your-repo/video-consistency',
      githubApi: 'https://api.github.com/repos/your-repo/video-consistency',
    },
  },
  {
    image: '/img/ocs.png',
    title: 'Autonomous Human-Following Trolley',
    description:
      'Real-time human detection with TensorFlow Lite. Developed path planning algorithms for trolley movement.',
    technologies: ['TensorFlow Lite', 'Python', 'OpenCV', 'Raspberry Pi'],
    links: {
      preview: 'https://your-preview-link.com',
      github: 'https://github.com/your-repo/autonomous-trolley',
      githubApi: 'https://api.github.com/repos/your-repo/autonomous-trolley',
    },
  },
  {
    image: '/img/ocs.png',
    title: 'Human Autonomous Vehicle Interaction',
    description:
      'Simulations on human interaction with vehicles. Studied the impact of weather scenarios on interactions.',
    technologies: ['Unreal Engine', 'Simulation', 'Research'],
    links: {
      preview: 'https://your-preview-link.com',
      github: 'https://github.com/your-repo/human-vehicle',
      githubApi: 'https://api.github.com/repos/your-repo/human-vehicle',
    },
  },
  {
    image: '/img/ocs.png',
    title: 'One Card System',
    description:
      'Student authentication system with face terminals and RFID, built using React, Next.js, Node.js, Go, Python, and PostgreSQL. Allows seamless student access across multiple university modules.',
    technologies: ['React', 'Next.js', 'Node.js', 'Go', 'Python', 'PostgreSQL'],
    links: {
      preview: 'https://your-preview-link.com',
      github: 'https://github.com/your-repo/one-card-system',
      githubApi: 'https://api.github.com/repos/your-repo/one-card-system',
    },
  },

  //////////////////////////
  // {
  //   image: '/img/ocs.png',
  //   title: 'Improving Video-Level Consistency in NVS',
  //   description: 'Research on consistency in video synthesis.',
  //   technologies: ['Novel View Synthesis', 'Video Analysis', 'Research'],
  //   links: {
  //     preview: 'https://your-preview-link.com',
  //     github: 'https://github.com/your-repo/video-consistency',
  //     githubApi: 'https://api.github.com/repos/your-repo/video-consistency',
  //   },
  // },
  // {
  //   image: '/img/ocs.png',
  //   title: 'Autonomous Human-Following Trolley',
  //   description: 'Real-time human detection with TensorFlow Lite.',
  //   technologies: ['TensorFlow Lite', 'Python', 'OpenCV', 'Raspberry Pi'],
  //   links: {
  //     preview: 'https://your-preview-link.com',
  //     github: 'https://github.com/your-repo/autonomous-trolley',
  //     githubApi: 'https://api.github.com/repos/your-repo/autonomous-trolley',
  //   },
  // },
  // {
  //   image: '/img/ocs.png',
  //   title: 'Human Autonomous Vehicle Interaction',
  //   description: 'Simulations on human interaction with vehicles.',
  //   technologies: ['Unreal Engine', 'Simulation', 'Research'],
  //   links: {
  //     preview: 'https://your-preview-link.com',
  //     github: 'https://github.com/your-repo/human-vehicle',
  //     githubApi: 'https://api.github.com/repos/your-repo/human-vehicle',
  //   },
  // },
  // {
  //   image: '/img/ocs.png',
  //   title: 'One Card System',
  //   description:
  //     'Student authentication system with face terminals and RFID, built using React, Next.js, Node.js, Go, Python, and PostgreSQL.',
  //   technologies: ['React', 'Next.js', 'Node.js', 'Go', 'Python', 'PostgreSQL'],
  //   links: {
  //     preview: 'https://your-preview-link.com',
  //     github: 'https://github.com/your-repo/one-card-system',
  //     githubApi: 'https://api.github.com/repos/your-repo/one-card-system',
  //   },
  // },
  //////////////////////////////
  // {
  //   image: '/projects/socialhub.svg',
  //   title: 'SocialHub',
  //   description:
  //     'Next-generation social media app, built with its own backend.',
  //   technologies: ['Next.js', 'TypeScript', ' Nest.js', 'Tailwind', 'Prisma'],
  //   links: {
  //     preview: 'https://socialhub-ms.vercel.app/',
  //     github: 'https://github.com/Skolaczk/SocialHub',
  //     githubApi: 'https://api.github.com/repos/Skolaczk/SocialHub',
  //   },
  // },
  // {
  //   image: '/projects/nextstarter.svg',
  //   title: 'Next-starter',
  //   description: 'Next.js starter template, packed with useful features.',
  //   technologies: [
  //     'Next.js',
  //     'TypeScript',
  //     'Tailwind',
  //     'Shadcn/ui',
  //     'Next-auth',
  //     'Prisma',
  //   ],
  //   links: {
  //     preview: 'https://next-starter-skolaczk.vercel.app',
  //     github: 'https://github.com/Skolaczk/next-starter',
  //     githubApi: 'https://api.github.com/repos/Skolaczk/next-starter',
  //   },
  // },
  // {
  //   image: '/projects/audiophile.svg',
  //   title: 'Audiophile',
  //   description: 'Online store specializing in headphones and speakers.',
  //   technologies: [
  //     'React',
  //     'Styled-components',
  //     'TypeScript',
  //     'Stripe',
  //     'Firebase',
  //   ],
  //   links: {
  //     preview: 'https://audiophile-ms.netlify.app/',
  //     github: 'https://github.com/Skolaczk/Audiophile',
  //     githubApi: 'https://api.github.com/repos/Skolaczk/Audiophile',
  //   },
  // },
] as const;

export const experiencesData = [
  {
    title: 'One-Card System',
    location: 'Addis Ababa, Ethiopia',
    description:
      'A centralized system for authenticating students seamlessly across various modules using advanced face terminal and RFID cards.',
    date: 'Aug 2024 - Present',
  },
  {
    title: 'Computer Vision and Graphics Research Initiative',
    location: 'Addis Ababa and Cornell University(Remote)',
    description:
      'Research on improving video-level consistency in novel view synthesis (NVS), including identifying inconsistencies, developing detection methods, and analyzing errors in synthesized videos.',
    date: 'Dec 2024 - Jan 2025',
  },
  {
    title: 'Autonomous Human-Following Trolley Project',
    location: 'Addis Ababa Institute of Technology, Ethiopia',
    description:
      'Developed an autonomous trolley using TensorFlow Lite for object detection, optimized path planning algorithms, and integrated Raspberry Pi with sensors and controllers for system efficiency.',
    date: 'Feb 2024 - June 2024',
  },
  {
    title: 'Efficient Store Management System',
    location: 'Ministry of Innovation and Technology, Ethiopia',
    description:
      'Participated in implementing an efficient store management system for the ministry, significantly reducing paperwork and manual tasks. Streamlined complex workflows with a user-friendly interface, boosting operational productivity. Effectively utilized React, Node.js, and PostgreSQL for a dynamic, robust, and seamless software solution.',
    date: 'Oct 2023 - Feb 2024',
  },
  {
    title: 'Undergraduate Research Intern',
    location:
      'Michigan Autonomous Vehicle Research Intergroup Collaboration (MAVRIC), USA',
    description:
      'Simulated various weather conditions in Unreal Engine to study human-vehicle interactions, developed research questions, conducted pilot testing, and presented weekly paper reviews.',
    date: 'May 2023 - Jan 2024',
  },
  {
    title: 'Hardware Engineer Intern',
    location: 'Minnovation (Remote)',
    description:
      'Developed innovative street camera systems capable of accurately counting the number of cars within a specified timeframe, contributing to the prediction of traffic jams. Spearheaded the implementation of vision-based human detection using deep learning techniques, successfully training a model to detect humans in real-time data captured by cameras. Participated in the 27th Minnovation project competition, showcasing expertise in hardware engineering and innovative problem-solving.',
    date: 'May 2023 - Oct 2023',
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;
