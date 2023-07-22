import { ProjectType } from '@/types';
import { motion as m } from 'framer-motion';

export function Project({ description, github, name, link }: ProjectType) {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        x: 20,
        transition: { duration: 0.3 },
      }}
      className=""
    >
      {link ? (
        <div className="flex flex-col justify-start">
          <a
            className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4cbeff99] to-[#b7e5a2b0]"
            href={link}
            target="_blank"
          >
            {name}
          </a>

          <a
            href={link}
            target="_blank"
            className="text-base font-thin text-white"
          >
            {description}
          </a>
        </div>
      ) : (
        <div className="flex flex-col justify-start">
          <a
            className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4cbeff99] to-[#b7e5a2b0]"
            href={github}
            target="_blank"
          >
            {name}
          </a>
          <a
            href={github}
            target="_blank"
            className="text-base font-thin text-white"
          >
            {description}
          </a>
        </div>
      )}
    </m.div>
  );
}
