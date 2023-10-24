import LoginCard from "@/components/parts/LoginCard/LoginCard";
import React from "react";

type Props = {};

const Home: React.FC = (props: Props) => {
  return (
    <div className="flex flex-col h-[100vh] justify-center items-center">
      <div className="flex flex-col justify-center items-center h-1/2">
        Hero Section
      </div>
      <div className="flex flex-col justify-center items-center h-1/2">
        Drawer
        <LoginCard />
      </div>
    </div>
  );
};

export default Home;
