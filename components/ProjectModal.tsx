import { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import CloseIcon from "../assets/icons/close-black.svg";
import { IProject } from "../data/projects";
import Features from "./Features";
import { projectLinkClickEvent } from "../modules/ga";

interface MobileMenuProps {
  isOpen: boolean;
  onclose: (value: boolean) => void;
  project: IProject | null;
}

export default function ProjectModal({
  onclose,
  isOpen,
  project,
}: MobileMenuProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onclose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-slate-100/60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0">
          <div className="flex h-screen max-h-screen justify-center items-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="p-4 max-h-full flex flex-col gap-y-8 bg-white rounded-md overflow-scroll">
                <div>
                  <button
                    className="float-right"
                    type="button"
                    onClick={() => onclose(false)}
                  >
                    <CloseIcon />
                  </button>
                  <h2 className="mb-1 text-xl text-slate-800 font-semibold">
                    {project?.title}
                  </h2>
                  <div className="flex items-center gap-x-2 text-sm text-slate-400 font-medium">
                    <span className="text-slate-700">{project?.company}</span>
                    <span className="h-2 w-2 bg-slate-400 rounded-full" />
                    <span>{project?.type}</span>
                    <span className="h-2 w-2 bg-slate-400 rounded-full" />
                    <span>{project?.year}</span>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-md">
                  <Image
                    className="w-full md:w-1/2 md:mx-auto rounded-md"
                    width={800}
                    height={800}
                    src={`/images/${project?.image}`}
                    alt={project?.title || 'Project image'}
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-slate-700">{project?.description}</p>
                  <Features features={project?.technologies} />
                </div>
                <div>
                  {project?.links?.live && (
                    <a
                      className="inline-block px-6 py-2 text-primary-600 hover:text-white bg-white hover:bg-primary-600 border border-primary-600 rounded-md"
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => projectLinkClickEvent(project?.links?.live)}
                    >
                      See live
                    </a>
                  )}
                  {project?.links?.source && (
                    <a
                      className="inline-block px-6 py-2 ml-2 text-primary-600 hover:text-white bg-white hover:bg-primary-600 border border-primary-600 rounded-md"
                      href={project.links.source}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => projectLinkClickEvent(project?.links?.source)}
                    >
                      See source
                    </a>
                  )}
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
