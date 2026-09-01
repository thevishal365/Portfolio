import React from 'react';
import type { Project } from '../types/profile';

interface ProjectListProps {
  projects: Project[];
}

const PROJECT_LINK_CLASS =
  'group/link inline-flex min-h-9 items-center justify-center gap-2 rounded-md border border-white/10 bg-transparent px-3 py-1.5 text-[12px] font-medium tracking-[0.02em] text-slate-300 transition-colors duration-200 hover:border-slate-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500';

export const PROJECT_TITLE_CLASS = 'text-[18px] font-normal tracking-[-0.03em] text-white sm:text-[20px]';

const ExternalIcon: React.FC = () => (
  <svg
    className="h-3.5 w-3.5 text-slate-500 transition-colors duration-200 group-hover/link:text-white"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

const CodeIcon: React.FC = () => (
  <svg
    className="h-3.5 w-3.5 text-slate-500 transition-colors duration-200 group-hover/link:text-white"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  if (projects.length === 0) return null;

  return (
    <section id="projects" className="mt-10 scroll-mt-24" aria-labelledby="projects-heading">
      <div className="inline-block">
        <h2 id="projects-heading" className="mb-2 text-[16px] font-semibold uppercase tracking-[0.18em] text-[#FFFFFF]">
          Projects
        </h2>
        <div className="h-px w-full bg-gradient-to-r from-white via-white/50 to-transparent" />
      </div>
      <div className="mt-3" />

      <ol className="space-y-6">
        {projects.map((project) => (
          <li key={project.id}>
            <article className="flex items-start gap-3.5">
              <span
                aria-hidden="true"
                className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#000000] text-[11px] font-medium text-slate-300"
              >
                {project.id}
              </span>

              <div className="min-w-0 flex-1">
                <h3 className={PROJECT_TITLE_CLASS}>{project.name}</h3>
                <p className="mt-2 text-[15px] leading-7 text-slate-300 sm:text-[16px]">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={PROJECT_LINK_CLASS}
                    aria-label={`${project.name} live site`}
                  >
                    <ExternalIcon />
                    <span>Live</span>
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={PROJECT_LINK_CLASS}
                    aria-label={`${project.name} source code`}
                  >
                    <CodeIcon />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
};
