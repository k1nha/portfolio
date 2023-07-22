import { ProjectType } from '@/types';
import { Project } from '@/components';
import { useLanguageContext } from '@/contexts';
import { BackgroundLayout } from '@/layouts';
import { motion as m } from 'framer-motion';

export function ProjectPage() {
  const { t } = useLanguageContext();

  const projects: ProjectType[] = [
    {
      name: 'Codei.pro',
      description: t('projeto-codei-descricao'),
      github: 'https://github.com/eternaltechnology',
      link: 'https://codei.pro/',
    },
    {
      name: 'VUTTR',
      description: t('projeto-vuttr-descricao'),
      github: 'https://github.com/lucascmpus/vuttr',
    },
    {
      name: 'Menu Api',
      description: t('projeto-menu-api-descricao'),
      github: 'https://github.com/lucascmpus/menu-api',
    },
    // {
    //   name: 'To Do',
    //   description: 'Uma lista de tarefas para organizar o trabalho e a vida',
    //   github: 'https://github.com/lucascmpus/To-Do-JS',
    //   link: 'https://to-do-js-zeta.vercel.app/',
    // },
    {
      name: 'Eternal Tech',
      description: t('projeto-eternal-descricao'),
      github: 'https://eternaltech-client.vercel.app/',
    },
  ];
  return (
    <BackgroundLayout>
      <m.div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center font-Montserrat text-white text-left font-bold">
        <div className="flex flex-col gap-10 lg:w-[750px] px-4 lg:px-0">
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
    </BackgroundLayout>
  );
}
