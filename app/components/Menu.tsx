import TriangleIcon from "./TriangleIcon";
import Line from "./Line";

import { font_title, font_subtitle, font_text } from "@/utils/fontsUtils";
import BoxContact from "./BoxContact";

const Menu = () => {
  return (
    <menu
      className="font-sans 
                        menu-content 
                        bg-ivas-black-silver 
                        w-[70rem] 
                        h-screen 
                        flex "
    >
      <div className="infos-content mt-24 ml-24 mr-24 text-white flex flex-col ">
        <div className={`title ${font_title}`}>Ivã Reinaldo Stival</div>
        <div className={`subtitle mt-2.5 ${font_subtitle}`}>
          Software Engineer
        </div>
        <div className={`subtitle mt-2 text-ivas-light-silver ${font_text}`}>
          I`m a software developer that always is looking for cool challenges
          and improvement of knowledge.
          <span className="pipe-icon absolute ml-1 translate-y-[-3px] font-extrabold text-ivas-light-green inline animate-blink-icon ">
            &#x007C;
          </span>
        </div>

        {/* -------- Links -----------*/}
        <div className="links mt-5 font-extralight text-sm mt-2 text-ivas-light-silver">
          <div className="group about-content flex flex-row items-center cursor-pointer">
            <Line className="group-hover:w-[50px]" />
            <TriangleIcon className="mr-2 group-hover:text-white" />
            <div className="about group-hover:text-white">About</div>
          </div>
          <div className="group experience-content flex flex-row items-center cursor-pointer">
            <Line className="group-hover:w-[50px]" />
            <TriangleIcon className="mr-2 group-hover:text-white" />
            <div className="experience group-hover:text-white">Experience</div>
          </div>
          <div className="group experience-content flex flex-row items-center cursor-pointer">
            <Line className="group-hover:w-[50px]" />
            <TriangleIcon className="mr-2 group-hover:text-white" />
            <div className="projects group-hover:text-white">Projects</div>
          </div>
        </div>
        <BoxContact className="absolute bottom-0 mb-16 opacity-50" />
      </div>
    </menu>
  );
};

export default Menu;
