import React, { useState, useEffect } from 'react';
import charJSON from '../data.json';
import Card from './Card';

interface ViewerProps {
  start: Number,
  end: Number
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
  const [isGenerated, setIsGenerated] = useState(false);
  const allCards: JSX.Element[] = [];

  useEffect(() => {
    if (!isGenerated) {
      for (let i = Number(start); i <= Number(end); i += 1) {
        (charJSON as CharJSON)[String(i)].forEach((card: CardData) => {
          allCards.push(
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
      setIsGenerated(true);
    }
  }, [isGenerated, start, end, allCards]);

  return (
    <>
      {isGenerated && allCards}
    </>
  );
}
