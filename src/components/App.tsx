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

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (boundStart && boundEnd
      && boundStart <= boundEnd
      && boundStart >= startLim
      && boundEnd <= endLim) {
      setValidBounds(true);
    }
  }

  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <a href="/"><h1 style={{ display: 'inline-block' }}>Mandarin Helper</h1></a>
      {!validBounds && (
        <>
          <p>
            Which character sheets
            {` (${startLim} - ${endLim}) `}
            would you like to study?
          </p>
          <p>Enter the same page twice to only study one page.</p>
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
              <button className="btn btn-outline-secondary" onClick={handleSubmit} type="button">Submit</button>
            </div>
          </div>
        </>
      )}
      {validBounds && (
        <CardViewer start={boundStart} end={boundEnd} />
      )}
    </div>
  );
}
