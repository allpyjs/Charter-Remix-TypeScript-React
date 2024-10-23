import {
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineUser,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";
import SideBarBtn from "./SideBarBtn";

export default function Header() {
  return (
    // The real website left bar does not scale at small screen
    // So move the left bar to the top at small screen
    <header className="top-0 z-10 flex h-16 animate-fade flex-row items-center justify-between bg-indigo-950/40 px-4 text-white transition-all duration-700 animate-ease-in-out sm:left-0 sm:h-full sm:min-h-screen sm:w-28 sm:flex-col sm:justify-center sm:border-r sm:border-slate-600 sm:px-0 sm:py-6">
      {/* Icon */}
      <div className="animate-fade-right animate-delay-200 sm:mb-auto">
        <img
          src="https://avatars.githubusercontent.com/u/122620870?s=200&v=4"
          className="h-10 w-10 hover:animate-spin"
        />
      </div>

      {/* Main button group */}
      <div className="ml-6 flex animate-fade-right flex-row items-center justify-center space-x-4 animate-delay-500 animate-ease-in-out sm:ml-0 sm:mt-28 sm:flex-col sm:space-x-0 sm:space-y-12">
        <SideBarBtn title="Home">
          <AiOutlineHome size="1.75em" />
        </SideBarBtn>

        <SideBarBtn title="Chats" url="https://www.carter.chat/chats">
          <AiOutlineMessage size="1.75em" />
        </SideBarBtn>

        <SideBarBtn
          title="My Characters"
          url="https://www.carter.chat/characters"
        >
          <AiOutlineUserAdd size="1.75em" />
        </SideBarBtn>

        <SideBarBtn title="Play">
          {/* <BiGame size="1.75em" /> */}
          <IoGameControllerOutline size="1.75em" />
          {/* 'SOON' is hidden on small screen */}
          <p className="hidden whitespace-nowrap rounded-full bg-violet-700 px-1 text-xs text-white sm:flex">
            SOON
          </p>
        </SideBarBtn>
      </div>

      {/* Spacer */}
      <div className="flex-grow bg-white" />

      {/* Bottom buttons */}
      <div className="flex animate-fade-right flex-row items-center space-x-4 animate-delay-700 animate-ease-in-out sm:flex-col sm:space-x-0 sm:space-y-8">
        {/* Get Pro Button */}
        <button className="flex animate-pulse items-center justify-center rounded-full bg-white px-2 py-1 sm:animate-wiggle-more sm:animate-infinite">
          <span className="bg-gradient-to-r from-blue-500 from-30% via-green-500 to-cyan-500 bg-clip-text text-xs font-bold text-transparent sm:text-base">
            Get Pro
          </span>
        </button>

        {/* User Icon */}
        <AiOutlineUser
          size="2em"
          title="User"
          color="white"
          className="rounded-full transition-transform duration-300 ease-in-out hover:scale-125 sm:mb-auto"
        />
      </div>
    </header>
  );
}
