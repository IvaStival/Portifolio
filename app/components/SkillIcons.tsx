import { font_skill_text_small } from "@/utils/fontsUtils";

const SkillIcons = ({
  data,
  className,
}: {
  data: Array<string>;
  className?: any;
}) => {
  const render_itens = data.map((item) => {
    return (
      <div
        key={Math.random()}
        className={`skill-icon-content flex justify-center items-center w-fit h-6 rounded p-2 bg-ivas-off-green`}
      >
        <div className={`${font_skill_text_small}`}>{item}</div>
      </div>
    );
  });

  return (
    <div
      className={`skills-content flex flex-row space-x-3 mt-2 w-full ${className}`}
    >
      {render_itens}
    </div>
  );
};

export default SkillIcons;
