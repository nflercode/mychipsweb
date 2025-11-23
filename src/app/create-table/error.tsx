'use client';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}:
{ error: Error; reset: () => void }) {

  return (
    <div className="flex flex-col p-4 items-center">
      <Card className="p-4 flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold mb-4 text-left">Uh oh, an error occurred</h1>
        <div className="mb-4 ">We are sorry for the inconvenience.</div>
        <Button onClick={() => reset()}>Try again</Button>
      </Card>
    </div>
  );
};