import React, { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type ILayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: ILayoutProps) {
  return (
    <div>
      <div>
        <Header />
      </div>
      {children}
      <div className="mt-[80px] 2xl:mt-[120px]">
        <Footer />
      </div>
    </div>
  );
}
