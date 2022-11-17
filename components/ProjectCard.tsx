import Image from "next/image";
import { IProject } from "../data/projects";
import { projectClickEvent } from "../modules/ga";
import Features from "./Features";

interface ProjectCardProps {
  project: IProject;
  onClick: Function;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const handleClick = (title?: string) => {
    onClick();
    projectClickEvent(title);
  }

  return (
    <div className="bg-white p-4 rounded-md shadow-sm">
      <div className="flex flex-col md:grid grid-cols-2 gap-x-12 gap-y-6">
        <div className="bg-slate-50/50">
          <Image
            className="w-full rounded-md"
            width={500}
            height={500}
            src={`/images/${project.image}`}
            alt={project.title || 'Project image'}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <Features features={project.technologies} />
          <div>
            <h3 className="text-2xl text-slate-800 font-semibold">
              {project.title}
            </h3>
            <p className="text-slate-700 text-ellipsis mb-1 overflow-hidden whitespace-nowrap md:whitespace-normal">
              {project.description}
            </p>
          </div>
          <div className="mt-auto">
            <button
              className="w-full md:w-auto px-6 py-2 mt-2 text-primary-600 hover:text-white bg-white hover:bg-primary-600 border border-primary-600 rounded-md"
              onClick={() => handleClick(project.title)}
            >
              See project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
