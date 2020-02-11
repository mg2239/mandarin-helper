import React from 'react';

interface Card {
  char: string,
  pinyin: string,
  sheet: number,
  hint: string,
}

export default function Card(props: Card) {
  const {
    char, pinyin, sheet, hint,
  } = props;

  hint.replace(char, '?');

  return (
    <div>
      <h2>{`Character Sheet ${sheet}`}</h2>
      <p>{char}</p>
      <p>{pinyin}</p>
      <p>{hint}</p>
    </div>
  );
}
