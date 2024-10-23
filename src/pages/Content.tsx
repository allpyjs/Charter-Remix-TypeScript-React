import { useState, useEffect, useRef } from "react";
import { AiOutlineToTop } from "react-icons/ai";
import { IoIosAdd, IoMdAlbums, IoMdBonfire } from "react-icons/io";
import HighlightIcon from "../components/HighlightIcon";
import CharListBtn from "../components/CharListBtn";
import CharacterList from "../components/CharacterList";
import { BiLogoDiscord, BiLogoTiktok, BiLogoYoutube } from "react-icons/bi";

export default function Content() {
  const [scrollButton, setScrollButton] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Keep track of the scroll pos
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", toggleVisibility);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", toggleVisibility);
      }
    };
  }, [containerRef]);

  // Function to handle the scroll event and set the visibility state
  // Window object does not work because this is a overflow container
  const toggleVisibility = () => {
    const container = containerRef.current;
    if (container && container.scrollTop > 400) {
      setScrollButton(true);
    } else {
      setScrollButton(false);
    }
  };

  return (
    <div
      className="flex h-screen w-full animate-fade flex-col items-center overflow-auto bg-black text-white animate-delay-500"
      ref={containerRef}
    >
      {/* Scroll to top button */}
      <button
        className={`fixed bottom-8 right-8 z-20 animate-fade rounded-full bg-violet-700 p-4 opacity-50 drop-shadow transition-all duration-500 animate-fill-backwards hover:scale-110 hover:opacity-100 sm:bottom-16 ${
          !scrollButton && `hidden cursor-default`
        }`}
        onClick={() => {
          if (containerRef.current) {
            containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
      >
        <AiOutlineToTop size="1.75em" color="white" />
      </button>

      {/* Earn $1000 Text */}
      <button className="group w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 py-1 text-center font-bold">
        <p className="animate-pulse transition-all group-hover:animate-none">
          Share Your Characters & Earn up to $1,000! 🎉
        </p>
      </button>

      {/* A heading text block */}
      <div className="flex w-full flex-col items-center justify-center space-y-2 py-16 text-center font-light sm:space-y-4">
        <h1 className="animate-fade-down text-4xl font-bold animate-delay-[300ms] animate-ease-in-out sm:text-5xl md:text-6xl">
          Chat With{" "}
          <span className="animate-pulse bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Imaginary
          </span>{" "}
          Characters
        </h1>
        <h2 className="animate-fade-down text-xl font-medium animate-delay-[500ms] animate-duration-1000 animate-ease-in-out sm:text-2xl">
          More than just living in your head ⚡️
        </h2>
        <h3 className="animate-fade-down px-8 text-sm animate-delay-[500ms] animate-duration-1000 animate-ease-in-out sm:text-base">
          Wanna talk to Gordon Freeman? I wish he could talk too.
          <br />
          How about creating a Gordon who can actually talk while he swings his
          crowbar?
        </h3>
      </div>

      {/* Highlight block */}
      <div className="flex w-full animate-fade-up flex-col items-center bg-indigo-950/40 pt-8 text-center animate-delay-[800ms] animate-duration-1000 animate-ease-in-out">
        <h1 className="max-w-xs text-3xl font-bold sm:max-w-none">
          Fantasies, Immersions, All Yours.
        </h1>
        {/* <h2 className='text-xl font-medium'>Characters Highlight</h2> */}
        <h3 className="text-sm font-light sm:text-base">
          Check out some of our best characters!
          <br />
          From us, and the community.
        </h3>
        <div className="flex min-h-[18rem] w-full flex-col items-center justify-center gap-8 py-8 sm:my-0 sm:flex-row">
          <HighlightIcon
            name="Neutral Gordon Freeman"
            imageUrl="https://combineoverwiki.net/images/thumb/2/2b/Gordon_bust_rtb2.jpg/250px-Gordon_bust_rtb2.jpg"
          />
          <HighlightIcon
            name="Cursed Gordon Freeman"
            imageUrl="https://images.gamebanana.com/img/ico/sprays/604a3c40ef0ba.png"
          />
          <HighlightIcon
            name="Morgan The Freeman"
            imageUrl="https://cdn.openart.ai/stable_diffusion/dc55bb7174384bce288d3e4f02cf17dca0222c07_2000x2000.webp"
          />
          <HighlightIcon
            name="Chicken at cs_italy"
            imageUrl="https://i.ytimg.com/vi/JFyGA2IFRPA/maxresdefault.jpg"
          />
          <HighlightIcon
            name="Linus Drop Tips"
            imageUrl="https://pbs.twimg.com/media/D7ShRPYXoAA-XXB?format=jpg&name=4096x4096"
          />
        </div>
      </div>

      {/* Character List block */}
      <div className="flex w-full animate-fade-up flex-col items-center justify-center space-y-4 py-12 animate-delay-[1300ms] animate-duration-700">
        {/* Headings */}
        <div className="flex max-w-xs flex-col space-y-2 text-center sm:max-w-none">
          <h1 className="text-3xl font-bold">
            Explore{" "}
            <span className="animate-pulse bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 bg-clip-text text-transparent animate-duration-[2500ms]">
              Characters
            </span>{" "}
            & Our Community.
          </h1>
          <h2 className="text-xl font-medium sm:text-2xl">
            Create & Discover 🔥
          </h2>
          <h3 className="text-sm font-light sm:text-base">
            Chat, Laugh, Enjoy
          </h3>
        </div>

        {/* Buttons */}
        <div className="flex min-h-[4rem] w-full flex-wrap items-center justify-center gap-x-2 gap-y-2 px-4 sm:gap-x-4">
          <CharListBtn title="Create" icon={IoIosAdd} />
          <CharListBtn title="Community Feed" icon={IoMdAlbums} />
          <CharListBtn title="Rising" icon={IoMdBonfire} />
          <CharListBtn title="Male" />
          <CharListBtn title="Female" />
        </div>

        {/* The Actual List */}
        <CharacterList />
      </div>

      {/* Footer */}
      <footer className="flex h-auto w-full flex-col pb-8">
        <div className="mx-6 mb-8 h-[1px] bg-slate-600" />

        <div className="flex items-center justify-between px-8">
          <img
            src="https://avatars.githubusercontent.com/u/122620870?s=200&v=4"
            className="h-10 w-10"
          />
          <a className="text-sm font-light text-slate-600 hover:underline">
            Legal Text
          </a>
          <div className="flex items-center space-x-2">
            <button>
              <BiLogoDiscord size="1.5em" />
            </button>
            <button>
              <BiLogoTiktok size="1.5em" />
            </button>
            <button>
              <BiLogoYoutube size="1.5em" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
