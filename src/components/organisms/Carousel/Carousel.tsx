import React, { useState } from "react";
import { Container } from "./style";
import Backdrop from "@mui/material/Backdrop";
import { useSwipeable } from "react-swipeable";
import { useDetailContext } from "../../../contexts/detail/useDetail";
import { useNavigate } from "react-router-dom";

export interface ICarouselItem {
  title: string;
  thumbPath: any;
  description: string;
  level: string;
  detail: string;
}

export interface ICarousel {
  items: ICarouselItem[];
}

export default function Carousel({ items }: ICarousel) {
  const navigate = useNavigate();

  const [currentItem, setCurrentItem] = useState<number>(0);

  const { setDetail, setThumbPath } = useDetailContext();

  function showDetails() {
    setThumbPath(items[currentItem].thumbPath);
    setDetail(items[currentItem].detail);
    navigate("/detail");
  }

  const gestures = useSwipeable({
    onSwipedRight: () => {
      if (currentItem < items.length - 1) setCurrentItem(currentItem + 1);
    },
    onSwipedLeft: () => {
      if (currentItem > 0) setCurrentItem(currentItem - 1);
    },
  });

  return (
    <Backdrop open invisible {...gestures} onClick={() => showDetails()}>
      <Container>
        <h3>{items[currentItem].title}</h3>
        <div className="card-thumb">
          <img
            src={items[currentItem].thumbPath}
            alt="ilustração sobre o exercício"
          />
        </div>
        <p className="card-description">{items[currentItem].description}</p>
        <h3>Nível: {items[currentItem].level}</h3>
      </Container>
    </Backdrop>
  );
}
