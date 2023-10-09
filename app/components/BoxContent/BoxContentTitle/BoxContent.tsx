"use client";
import { useState } from "react";

import BoxWindow from "../BoxWindow";
import SkillIcons from "../SkillIcons";
import Button from "../Button";

import {
  font_text,
  font_text_small,
  font_item_title,
} from "@/utils/fontsUtils";
import ExpandButton from "../ExpandButton";
import { contentData } from "./BoxContent.types";


const BoxContent = ({ className, data, children }: contentData) => {
  const [activated, setActivated] = useState(false);

  const stopClickPropagation = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  const handleButtonClick: React.MouseEventHandler<HTMLButtonElement> = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {};

  return (
    <BoxWindow active={activated} className={className}>
      <div className="main-content flex flex-row">
        <div
          className={`date-info ${font_text} min-w-[150px] text-ivas-light-silver select-none`}
        >
          {data["date"]}
        </div>

        <div onClick={stopClickPropagation} className="main-info">
          <div className={`title-info flex flex-row ${font_item_title}`}>
            {data["title"]}
            <ExpandButton
              onClick={() => setActivated(!activated)}
              className="absolute right-0 mr-16"
            />
          </div>
          <div
            className={`description-info break-words max-w-[450px] mt-3 opacity-0  ${
              activated ? "opacity-100" : "opacity-100"
            } transition-opacity duration-400 delay-200 ease-in-out ${font_text_small}`}
          >
            {activated ? data["fulltext"] : data["smalltext"]}
          </div>
          <SkillIcons data={data["skills"]} className="mt-3" />
          {activated ? <Button>Code</Button> : ""}
        </div>

        {children}
      </div>
    </BoxWindow>
  );
};

export type { itemData };
export default BoxContent;
