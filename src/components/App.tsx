import React, { useState } from 'react';
import { Button, Checkbox, Header, Input } from 'semantic-ui-react';
import CardViewer from './CardViewer';
import Quizlet from './Quizlet';
import data from '../data';
import '../css/App.css';

type DataType = 'flashcards' | 'quizlet';

export default function App() {
  const [type, setType] = useState<DataType>();
  const [boundStart, setBoundStart] = useState(0);
  const [boundEnd, setBoundEnd] = useState(0);
  const [pinyin, setPinyin] = useState(true);
  const [hints, setHints] = useState(true);

  const sheetRange = Object.keys(data);
  const startLim = Number(sheetRange[0]);
  const endLim = Number(sheetRange[sheetRange.length - 1]);

  function onSubmit(dataType: DataType) {
    if (
      boundStart &&
      boundEnd &&
      startLim <= boundStart &&
      boundStart <= boundEnd &&
      boundEnd <= endLim
    ) {
      setType(dataType);
    }
  }

  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <Header as="a" href="/" id="title">
        Mandarin Helper
      </Header>
      {!type && (
        <>
          <p>
            Generate flashcards for character sheets
            {` ${startLim} - ${endLim}, `}
            or export a Quizlet set.
          </p>
          <p>Enter the same sheet number twice to only study that sheet.</p>
          <div className="input-container">
            <Input
              label="Sheet"
              onChange={(e) => setBoundStart(Number(e.target.value))}
            />
            <Input
              label="to"
              onChange={(e) => setBoundEnd(Number(e.target.value))}
            />
          </div>
          <div className="check-contain">
            <Checkbox
              label="Show hints"
              defaultChecked
              onChange={() => setHints((prev) => !prev)}
            />
            <Checkbox
              label="Pinyin first"
              defaultChecked
              onChange={() => setPinyin((prev) => !prev)}
            />
          </div>

          <div className="button-container">
            <Button onClick={() => onSubmit('flashcards')}>Flashcards</Button>
            <Button onClick={() => onSubmit('quizlet')}>Quizlet</Button>
          </div>
        </>
      )}
      {type === 'flashcards' && (
        <CardViewer
          start={boundStart}
          end={boundEnd}
          pinyin={pinyin}
          hints={hints}
        />
      )}
      {type === 'quizlet' && (
        <Quizlet
          start={boundStart}
          end={boundEnd}
          pinyin={pinyin}
          hints={hints}
        />
      )}
    </div>
  );
}
