import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
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

  hint = hint.replace(new RegExp(char, 'g'), '?');

  return (
    <>
      <p className="hint">
        Hint:
        {` ${hint}`}
      </p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Flippy
          flipOnHover={false}
          flipOnClick
          flipDirection="horizontal"
          style={{ width: '400px', height: '200px', marginBottom: '16px' }}
        >
          <FrontSide>
            <p className="pinyin">{pinyin}</p>
          </FrontSide>
          <BackSide>
            <p className="char">{char}</p>
          </BackSide>
        </Flippy>
      </div>
      <hr style={{ width: '400px', borderColor: '#cccccc' }} />
    </>
  );
}
