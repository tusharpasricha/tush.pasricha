import { Github, Linkedin, Twitter } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-black/50 backdrop-blur-md">
      <div className=" flex h-16 items-center justify-between px-4">
        <div className="flex flex-1 items-center gap-2">
          <a
            href="mailto:tusharpasricha21@gmail.com"
            className="text-sm text-gray-400 hover:text-white"
          >
            tusharpasricha21@gmail.com
          </a>
        </div>

        <div className="flex flex-1 justify-end gap-4">
          <a
            href="https://linkedin.com/in/tusharpasricha"
            target="_blank"
            className="text-gray-400 hover:text-white"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://github.com/tusharpasricha"
            target="_blank"
            className="text-gray-400 hover:text-white"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://twitter.com/tusharpasricha_"
            target="_blank"
            className="text-gray-400 hover:text-white"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </a>
        </div>
      </div>
    </header>
  );
}
