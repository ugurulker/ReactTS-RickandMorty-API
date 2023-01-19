import * as React from "react";
import { homepageBg } from "../../assets/images";

export interface IHomepageProps {}

export function Homepage(props: IHomepageProps) {
  return (
    <div>
      <h1>Welcome, React-Typescript & React-Query Project</h1>
      <p>In this project, </p>

      <img
        src={homepageBg}
        alt="Rick and Morty"
        className="max-w-[750px] rounded-2xl hover:scale-105 duration-150"
      />
    </div>
  );
}
