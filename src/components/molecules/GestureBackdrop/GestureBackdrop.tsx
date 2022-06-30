import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import { useSwipeable } from "react-swipeable";

export enum Gesture {
  Click = 0,
  Right = 1,
  Left = 2,
  Up = 3,
  Down = 4,
}

export interface IGestureBackdrop {
  children: React.ReactNode;
  gestureCallback: any;
  actOnDirection: Gesture;
}

export default function GestureBackdrop({
  children,
  gestureCallback,
  actOnDirection,
}: IGestureBackdrop) {
  const swipeHandlers = [
    {
      onClick: () => {
        gestureCallback();
      },
    },
    useSwipeable({
      onSwipedRight: () => {
        gestureCallback();
      },
    }),
    useSwipeable({
      onSwipedLeft: () => {
        gestureCallback();
      },
    }),
    useSwipeable({
      onSwipedUp: () => {
        gestureCallback();
      },
    }),
    useSwipeable({
      onSwipedDown: () => {
        gestureCallback();
      },
    }),
  ];

  return (
    <div>
      {(Object.keys(Gesture) as Array<keyof typeof Gesture>).map((gesture) => {
        if (actOnDirection === Gesture[gesture]) {
          return (
            <Backdrop key={gesture} open {...swipeHandlers[Gesture[gesture]]}>
              {children}
            </Backdrop>
          );
        }
      })}
    </div>
  );
}
