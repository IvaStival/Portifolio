import { itemData } from "./components/BoxContent";
import BoxContent from "./components/BoxContent";
import BoxWindow from "./components/BoxWindow";
import { font_text } from "@/utils/fontsUtils";
var about_text: string =
  "With 9 years in IT, I've managed servers, optimized networks, and led security enhancements. My recent focus on computer graphics and Data Science has refined my skills in C++, Python, and SQL, with experience in advanced image classification. I've also delved into ReactJS, NextJS, Express, Typescript, and REST through courses and personal projects. Though lacking formal work experience in ReactJS, my hands-on projects highlight my potential. Eager to apply my IT background and new skills to a ReactJS role for growth and innovation.";

export default function Home() {
  var data: itemData = {
    date: "2012 - Current",
    title: "IT/Software Engineer - Fantástica Filmes",
    text: "Local system and server responsible, manage local network, server and workstations for computer graphics works. Plugs and systems developments for help local workflow.",
    skills: ["C++", "Python", "ReactJS", "Express"],
  };

  var data2: itemData = {
    date: "",
    title: "HDControl",
    text: "Local system and server responsible, manage local network, server and workstations for computer graphics works. Plugs and systems developments for help local workflow.  ",
    skills: ["C++", "Python", "ReactJS", "Express", "HTML", "CSS"],
  };

  return (
    <div className="bg-ivas-black-silver group w-full h-screen font-sans relative">
      <div className="home-content flex flex-col items-center h-screen pt-20 pb-20 overflow-auto top-0">
        <BoxWindow className={`text-justify ${font_text}`}>
          {about_text}
        </BoxWindow>
        <BoxContent data={data} />
        <BoxContent data={data2} />
      </div>
    </div>
  );
}
