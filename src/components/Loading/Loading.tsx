import React, { FC, ReactNode } from "react";

type ILoadingProps = {
  gif: string;
  alt?: string;
};

const Loading: FC<ILoadingProps> = ({ gif, alt = "Loading Gif" }) => {
  return (
    <div>
      <img src={gif} alt={alt} className="w-full max-w-[150px]" />
    </div>
  );
};

export default Loading;
