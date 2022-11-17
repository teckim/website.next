import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import MenuIcon from "../assets/icons/menu.svg";
import CloseIcon from "../assets/icons/close.svg";
import Link from "next/link";

const ROUTES = [
  {
    to: "/#testimonials",
    name: "Testimonials",
  },
  {
    to: "/#portfolio",
    name: "Portfolio",
  },
  {
    to: "/#about",
    name: "About",
  },
  {
    to: "/#contact",
    name: "Contact",
  },
];

interface MobileMenuProps {
  isOpen: boolean;
  onclose: (value: boolean) => void;
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="fixed z-10 inset-x-0 bg-white/80 backdrop-blur-sm">
      <div className="h-16 flex justify-between items-center container">
        <div>
          <Link href="/" className="text-primary-500 text-xl font-bold font-mono">&#60;&#47;&#62;</Link>
        </div>
        <nav className="ml-auto hidden md:block">
          <ul className="px-4 flex gap-x-6 text-md text-slate-600 tracking-wide">
            {ROUTES.map(({ to, name }) => (
              <li key={name} className="hover:text-primary-500">
                <Link href={to}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <button className="md:hidden" type="button" aria-label="Hamburger menu" onClick={openModal}>
            <MenuIcon />
          </button>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} onclose={closeModal} />
    </div>
  );
}

function MobileMenu({ onclose, isOpen }: MobileMenuProps) {
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
          <div>
            <div className="fixed inset-0 bg-primary-500/70 backdrop-blur-sm" />
            <button
              className="fixed z-10 right-4 top-4"
              type="button"
              onClick={() => onclose(true)}
            >
              <CloseIcon />
            </button>
          </div>
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <nav>
                <ul className="px-4 flex flex-col gap-y-6 text-4xl font-semibold tracking-wide text-white">
                  {ROUTES.map(({ to, name }) => (
                    <li key={name}>
                      <Link href={to} onClick={() => onclose(false)}>
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Navbar;
