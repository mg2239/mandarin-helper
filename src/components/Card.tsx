import React, { useState } from 'react';
import '../css/Card.css';

type Card = {
  char: string;
  pinyin: string;
  hint: string;
  pinyinFirst: boolean;
  showHints: boolean;
};

export default function Card({
  char,
  pinyin,
  hint,
  pinyinFirst,
  showHints,
}: Card) {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      {showHints && (
        <p className="hint">
          Hint:
          {` ${hint}`}
        </p>
      )}
      <div className="card-container">
        <div
          className={`flashcard${clicked ? ' flipped' : ''}`}
          onClick={() => setClicked(!clicked)}
        >
          <div className="card-face front">
            <p className="card-text">{pinyinFirst ? pinyin : char}</p>
          </div>
          <div className="card-face back">
            <p className="card-text">{pinyinFirst ? char : pinyin}</p>
          </div>
        </div>
      </div>
      <span className="divider" />
    </>
  );
}
