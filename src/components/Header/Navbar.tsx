import { FaGithub } from "react-icons/fa";


function Navbar() {
  return (
    <>
      <nav className="flex items-center p-5 w-full justify-between">
        <img src="/public/logo.png" alt="logo" width={"200"} />
        <div className="flex justify-end space-x-3 px-5">
          <span className="text-white font-bold">Development by  </span>
          <a href="https://github.com/JesusE123" target="_blank">
          <FaGithub className="text-3xl hover:cursor-pointer hover:scale-125 transition inline-block"/>
          </a>
        </div>
      </nav>
    </> 
  );
}

export default Navbar;
