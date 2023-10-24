import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type Props = {};

const LoginCard = (props: Props) => {
  return (
    <>
      <Dialog>
        <DialogTrigger className=" bg-purple-500 rounded-lg shadow-lg p-4 w-[312px] text-white font-bold">
          Login
        </DialogTrigger>
        <DialogContent className="p-4 w-[80%] rounded-lg">
          <DialogHeader>
            <DialogTitle className="pt-2">Login with your credentials</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col justify-center items-center p-2 gap-y-2">
            <div className="w-full">
              <Label>Username</Label>
              <Input type="text" className="w-full" />
            </div>
            <div className="w-full">
              <Label>Password</Label>
              <Input type="password" className="w-full" />
            </div>
            <Button className="mt-2 w-full h-12">Login</Button>
            
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LoginCard;
