import React from "react";

interface LayoutTitleProps {
  tag?: string;
  title: string;
  description: string;
}

const LayoutTitle = ({ tag, title, description }: LayoutTitleProps) => {
  return (
    <>
      <div className="max-w-[540px] mx-auto">
        <div className="flex justify-center">
          {!tag ? "" : <div className="tag mb-5">{tag}</div>}
        </div>
        <h2 className="text-center font-bold text-3xl md:text-[54px] leading-9 md:leading-[60px] tracking-tighter bg-gradient-to-b from-black to-[#001E7F] text-transparent bg-clip-text pb-5">
          {title}
        </h2>
        <p className="leading-[30px] tracking-tight text-center text-[22px] text-[#010D3E]">
          {description}
        </p>
      </div>
    </>
  );
};

export default LayoutTitle;
