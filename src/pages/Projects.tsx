import Project from '@/components/Project';
import { motion as m } from 'framer-motion';
import BackButton from '../components/BackButton';
import Background from '../components/Background';

const projects = [
  {
    name: 'VUTTR',
    description: 'A Very Useful Tools to Remember',
    github: 'https://github.com/lucascmpus/vuttr',
  },
  {
    name: 'Menu Api',
    description: 'CRUD with Express Prisma MySQL',
    github: 'https://github.com/lucascmpus/menu-api',
  },
  {
    name: 'Doutor Nature',
    description: 'Technical Test',
    github: 'https://github.com/lucascmpus/Doutor-Nature',
    link: 'https://doutor-nature-psi.vercel.app/',
  },
  {
    name: 'To Do',
    description: 'Uma lista de tarefas para organizar o trabalho e a vida',
    github: 'https://github.com/lucascmpus/To-Do-JS',
    link: 'https://to-do-js-zeta.vercel.app/',
  },
  {
    name: 'dtmoney',
    description: 'Curso RocketSeat',
    github: 'https://github.com/lucascmpus/dtmoney',
  },
];

function Projects() {
  return (
    <>
      <BackButton />

      <m.div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center font-Montserrat text-white text-left font-bold">
        <div className="flex flex-col gap-10 lg:w-[750px]">
          {projects.map(({ description, github, name, link }) => (
            <Project
              description={description}
              github={github}
              name={name}
              key={name}
              link={link}
            />
          ))}
        </div>
      </m.div>

      <Background />
    </>
  );
}

export default Projects;
