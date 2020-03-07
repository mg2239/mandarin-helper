import React, { useState } from 'react';
import '../css/App.css';
import CardViewer from './CardViewer';
import charDict from '../data.json';

export default function App() {
  const [validBounds, setValidBounds] = useState(false);
  const [boundStart, setBoundStart] = useState(0);
  const [boundEnd, setBoundEnd] = useState(0);

  const sheetRange = Object.keys(charDict);
  const startLim = Number(sheetRange[0]);
  const endLim = Number(sheetRange[sheetRange.length - 1]);

  function handleStartChange(e: React.FormEvent<HTMLInputElement>) {
    setBoundStart(Number(e.currentTarget.value));
  }

  function handleEndChange(e: React.FormEvent<HTMLInputElement>) {
    setBoundEnd(Number(e.currentTarget.value));
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (boundStart && boundEnd
      && startLim <= boundStart
      && boundStart <= boundEnd
      && boundEnd <= endLim) {
      setValidBounds(true);
    }
  }

  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <a href="/">
        <h1 style={{ display: 'inline-block', marginBottom: '16px' }}>CHIN 1101/1102 Flashcards</h1>
      </a>
      {!validBounds && (
        <>
          <p>
            Which character sheets
            {` (${startLim} - ${endLim}) `}
            would you like to study?
          </p>
          <p>Enter the same page twice to only study one page.</p>
          <form onSubmit={onSubmit}>
            <div className="input-group mb-2 mt-2" id="sheet-input">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Sheet</span>
              </div>
              <input
                type="text"
                onChange={handleStartChange}
                className="form-control"
                aria-describedby="basic-addon1"
              />
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon2">to</span>
              </div>
              <input
                type="text"
                onChange={handleEndChange}
                className="form-control"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append" id="button-addon1">
                <button className="btn btn-outline-secondary" type="submit">Submit</button>
              </div>
            </div>
          </form>
        </>
      )}
      {validBounds && (
        <CardViewer start={boundStart} end={boundEnd} />
      )}
    </div>
  );
}
