// 'use client';

// import { motion } from 'framer-motion';

// import { skillsData } from '@/lib/data';

// const fadeInAnimationVariants = {
//   initial: {
//     opacity: 0,
//     y: 100,
//   },
//   animate: (index: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 0.05 * index,
//     },
//   }),
// };

// export const Skills = () => {
//   return (
//     <>
//       <div className="mt-10 flex w-full flex-wrap justify-between gap-10 px-5 sm:justify-center sm:px-0 lg:justify-between">
//         {skillsData.map(({ icon }, index) => (
//           <motion.div
//             key={index}
//             variants={fadeInAnimationVariants}
//             initial="initial"
//             whileInView="animate"
//             viewport={{
//               once: true,
//             }}
//             custom={index}
//           >
//             {icon}
//           </motion.div>
//         ))}
//       </div>
//       <ul className="mt-6 flex flex-wrap gap-4">
//         <li className=" px-4 py-2 rounded-lg text-center shadow-md hover:bg-gray-100 hover:text-black transition-all duration-300">
//           Python
//         </li>
//         <li className=" px-4 py-2 rounded-lg text-center shadow-md hover:bg-gray-100 hover:text-black transition-all duration-300">
//           C
//         </li>
//         <li className=" px-4 py-2 rounded-lg text-center shadow-md hover:bg-gray-100 hover:text-black transition-all duration-300">
//           C++
//         </li>
//         <li className=" px-4 py-2 rounded-lg text-center shadow-md hover:bg-gray-100 hover:text-black transition-all duration-300">
//           PHP
//         </li>
//         <li className=" px-4 py-2 rounded-lg text-center shadow-md hover:bg-gray-100 hover:text-black transition-all duration-300">
//           JavaScript
//         </li>
//         <li className=" px-4 py-2 rounded-lg text-center shadow-md hover:bg-gray-100 hover:text-black transition-all duration-300">
//           SQL
//         </li>
//       </ul>
//     </>
//   );
// };

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

'use client';

import { motion } from 'framer-motion';

import { skillsData } from '@/lib/data';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export const Skills = () => {
  const languages = [
    'Python',
    'C',
    'C++',
    'PHP',
    'JavaScript (NodeJS, ReactJS, ExpressJS)',
    'HTML5',
    'CSS',
    'Bootstrap',
    'MATLAB',
    'SQL',
  ];
  const osEnvironments = ['Linux', 'Windows', 'ROS'];
  const tools = ['GitHub', 'Notion', 'Overleaf'];
  const software = ['Unreal Engine 5', 'Unity', 'Blueprint', 'LT spice'];
  return (
    <>
      <div className="mt-10 flex w-full flex-wrap justify-between gap-10 px-5 sm:justify-center sm:px-0 lg:justify-between">
        {skillsData.map(({ icon }, index) => (
          <motion.div
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {icon}
          </motion.div>
        ))}
      </div>
      <div className="mt-10">
        <h2 className="mb-4 text-xl font-semibold">Languages</h2>
        <ul className="flex flex-wrap gap-4">
          {languages.map((skill, index) => (
            <li
              key={index}
              className="rounded-lg px-4 py-2 text-center shadow-md transition-all duration-300 hover:bg-gray-100 hover:text-black"
            >
              {skill}
            </li>
          ))}
        </ul>

        <h2 className="mb-4 mt-8 text-xl font-semibold">OS Environments</h2>
        <ul className="flex flex-wrap gap-4">
          {osEnvironments.map((skill, index) => (
            <li
              key={index}
              className="rounded-lg px-4 py-2 text-center shadow-md transition-all duration-300 hover:bg-gray-100 hover:text-black"
            >
              {skill}
            </li>
          ))}
        </ul>

        <h2 className="mb-4 mt-8 text-xl font-semibold">Tools</h2>
        <ul className="flex flex-wrap gap-4">
          {tools.map((skill, index) => (
            <li
              key={index}
              className="rounded-lg px-4 py-2 text-center shadow-md transition-all duration-300 hover:bg-gray-100 hover:text-black"
            >
              {skill}
            </li>
          ))}
        </ul>

        <h2 className="mb-4 mt-8 text-xl font-semibold">Software</h2>
        <ul className="flex flex-wrap gap-4">
          {software.map((skill, index) => (
            <li
              key={index}
              className="rounded-lg px-4 py-2 text-center shadow-md transition-all duration-300 hover:bg-gray-100 hover:text-black"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
