/* eslint-disable no-loop-func */
import React, { useState, useEffect } from 'react';
import { Header } from 'semantic-ui-react';
import data from '../data';
import Card from './Card';
import { GeneratorProps } from '../types';

export default function CardViewer({
  start,
  end,
  pinyin,
  hints,
}: GeneratorProps) {
  const [cards, setCards] = useState([] as JSX.Element[]);

  useEffect(() => {
    if (!cards.length) {
      let sheetCounter = start;
      const cardAcc: JSX.Element[] = [];
      for (let i = start; i <= end; i += 1) {
        data[i].forEach((card) => {
          if (i === sheetCounter) {
            cardAcc.push(
              <Header as="h1" key={sheetCounter}>
                {`Character Sheet ${sheetCounter}`}
              </Header>,
            );
            sheetCounter += 1;
          }
          cardAcc.push(
            <Card
              key={card.c}
              char={card.c}
              pinyin={card.p}
              hint={card.h}
              pinyinFirst={pinyin}
              showHints={hints}
            />,
          );
        });
      }
      setCards(cardAcc);
    }
  }, [start, end, cards, pinyin, hints]);

  return <>{cards}</>;
}
