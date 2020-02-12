import React, { useState, useEffect } from 'react';
import charJSON from '../data.json';
import Card from './Card';

interface ViewerProps {
  start: number,
  end: number
}

interface CharJSON {
  [sheet: string]: CardData[]
}

interface CardData {
  c: string,
  p: string,
  h: string,
}

export default function CardViewer(props: ViewerProps) {
  const { start, end } = props;
  const [cards, setCards] = useState([] as JSX.Element[]);

  useEffect(() => {
    const cardAcc: JSX.Element[] = [];
    for (let i = start; i <= end; i += 1) {
      (charJSON as CharJSON)[i].forEach((card: CardData) => {
        cardAcc.push(
          <Card
            key={card.c}
            char={card.c}
            pinyin={card.p}
            hint={card.h}
            sheet={i}
          />,
        );
      });
    }
    setCards(cardAcc);
  }, [start, end, cards]);

  return (
    <>
      {cards}
    </>
  );
}
