
export function Footer() {
  return (
    <footer className=" border-t border-zinc-800 bg-black">
      <div className=" flex h-16 items-center justify-center px-4 w-full">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  )
}

