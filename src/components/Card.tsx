/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import '../css/Card.css';

interface Card {
  char: string,
  pinyin: string,
  hint: string,
}

export default function Card(props: Card) {
  const {
    char, pinyin,
  } = props;
  let { hint } = props;

  const [clicked, setClicked] = useState(false);

  hint = hint.replace(new RegExp(char, 'g'), '?');

  return (
    <>
      <p className="hint">
        Hint:
        {` ${hint}`}
      </p>
      <div className="card-container">
        <div
          className={`flashcard${clicked ? ' flipped' : ''}`}
          onClick={() => setClicked(!clicked)}
        >
          <div className="card-face front">
            <p className="card-text">{pinyin}</p>
          </div>
          <div className="card-face back">
            <p className="card-text">{char}</p>
          </div>
        </div>
      </div>
      <hr style={{ width: '400px', borderColor: '#cccccc' }} />
    </>
  );
}
