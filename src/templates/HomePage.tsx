import React, { Children, ReactNode } from "react";
import Navigation from "../components/navigation";

type HomePageProps = {
  children: React.ReactNode;
};

function HomePage({ children }: HomePageProps) {
  return (
    <div className="container mx-auto">
      <header>
        <h1 className="font-bold text-9xl my-10 text-center">
          🐱‍👤🐱‍🏍🐱‍👓🐱‍🚀🐱‍🐉🐱‍💻🤳🎨
        </h1>
        <Navigation />
      </header>
      <main>{children}</main>
    </div>
  );
}

export default HomePage;
