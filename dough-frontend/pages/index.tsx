import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {};

const Home: React.FC = (props: Props) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>Test</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Shadcn is working! Congrats.</DialogTitle>
            <DialogDescription>Now start working.</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Home;
