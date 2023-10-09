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
import BoxContentDescription from "./BoxContentDescription/BoxContentDescription";

const BoxContent = ({ className, data }: contentData) => {
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
        <BoxContentDescription data={data} />
      </div>
    </BoxWindow>
  );
};

export default BoxContent;
