import React from "react";
import { Container } from "./style";
import SimpleLogo from "../../atoms/SimpleLogo/SimpleLogo";
import Carousel, { ICarouselItem } from "../../organisms/Carousel/Carousel";
import thumbOne from "../../../assets/thumbs/1.png";
import thumbTwo from "../../../assets/thumbs/2.png";
import thumbThree from "../../../assets/thumbs/3.png";
import thumbFour from "../../../assets/thumbs/4.png";
import thumbFive from "../../../assets/thumbs/5.png";
import thumbSix from "../../../assets/thumbs/6.png";
import thumbSeven from "../../../assets/thumbs/7.png";
import Wave from "react-wavify";

export default function ListPage() {
  const items: ICarouselItem[] = [
    {
      title: "Agachamento",
      thumbPath: thumbOne,
      description:
        "Ótimo exercício para fortalecer as pernas e os glúteos. ótimo exercício para fortalecer as pernas e os glúteos.",
      level: "Iniciante",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi, accusamus, nesciunt soluta quos sequi vel eius similique sint tempore eveniet odio praesentium, adipisci quaerat consequatur quibusdam aperiam minima labore.",
    },
    {
      title: "Bambole",
      thumbPath: thumbTwo,
      description:
        "Ótimo exercício para fortalecer as pernas e os glúteos. ótimo exercício para fortalecer as pernas e os glúteos.",
      level: "Iniciante",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi, accusamus, nesciunt soluta quos sequi vel eius similique sint tempore eveniet odio praesentium, adipisci quaerat consequatur quibusdam aperiam minima labore.",
    },
    {
      title: "Agachamento Lateral",
      thumbPath: thumbThree,
      description:
        "Ótimo exercício para fortalecer as pernas e os glúteos. ótimo exercício para fortalecer as pernas e os glúteos.",
      level: "Iniciante",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi, accusamus, nesciunt soluta quos sequi vel eius similique sint tempore eveniet odio praesentium, adipisci quaerat consequatur quibusdam aperiam minima labore.",
    },
  ];

  return (
    <>
      <Container>
        <SimpleLogo className="logo" />
        <Carousel items={items}></Carousel>
      </Container>
    </>
  );
}
