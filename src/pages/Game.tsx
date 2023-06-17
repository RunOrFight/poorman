import { DndContext } from "@dnd-kit/core";
import { Card, Hand, Progress, Side, Hero, Field } from "../components";
import { useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";

const WS_URL = "ws://localhost:5157";

const GamePage = () => {
  const [isDropped, setIsDropped] = useState(false);

  const handleDragEnd = (event: any) => {
    if (event.over && event.over.id === "droppable") {
      setIsDropped(true);
    }
  };

  useWebSocket(WS_URL, {
    onOpen: () => {
      console.log("WebSocket connection established.");
    },
  });

  return (
    <div id="bg" className="bg-contain w-full h-full">
      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex w-full h-full">
          <Side extraClassName="justify-end">
            <Hero />
          </Side>
          <div className="w-full h-full flex flex-col">
            <Hand />

            <div className="w-full h-full flex">
              <Progress />
              <div className="h-full w-full flex flex-col">
                <div className="h-full w-full flex justify-center items-center">
                  <Field />
                  <Field />
                  <Field />
                </div>
                <div>
                  <img src="src/assets/devider.png" />
                </div>
                <div className="h-full w-full flex justify-center items-center">
                  <Field />
                  <Field />
                  <Field />
                </div>
              </div>
            </div>

            <Hand>
              <Card id="cat-1" />
              <Card id="cat-2" />
              <Card id="cat-3" />
              <Card id="cat-4" />
            </Hand>
          </div>
          <Side extraClassName="justify-start">
            <Hero />
          </Side>
        </div>
      </DndContext>
    </div>
  );
};

export default GamePage;
