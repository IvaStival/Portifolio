import BoxWindow from "./BoxWindow";
import SkillIcons from "./SkillIcons";

import {
  font_text,
  font_text_small,
  font_item_title,
} from "@/utils/fontsUtils";

type itemData = {
  date: string;
  title: string;
  text: string;
  skills: Array<string>;
};

type contentData = {
  className?: any;
  data: itemData;
  children?: React.ReactNode;
};

const BoxContent = ({ className, data, children }: contentData) => {
  return (
    <div className={`box-content ${className}`}>
      <BoxWindow>
        <div className="main-content flex flex-row">
          <div
            className={`date-info ${font_text} min-w-[150px] text-ivas-light-silver`}
          >
            {data["date"]}
          </div>
          <div className="main-info">
            <div className={`title-info ${font_item_title}`}>
              {data["title"]}
            </div>
            <div
              className={`description-info break-words max-w-[450px] mt-3 ${font_text_small}`}
            >
              {data["text"]}
            </div>
            <SkillIcons data={data["skills"]} className="mt-3" />
          </div>

          {children}
        </div>
      </BoxWindow>
    </div>
  );
};

export type { itemData };
export default BoxContent;
