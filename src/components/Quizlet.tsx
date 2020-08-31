import React, { useEffect, useState } from 'react';
import { Form, TextArea, Header } from 'semantic-ui-react';
import data from '../data';
import '../css/Quizlet.css';
import { GeneratorProps } from '../types';

export default function Quizlet({ start, end, pinyin, hints }: GeneratorProps) {
  const [text, setText] = useState<string>();

  useEffect(() => {
    let acc = '';
    for (let i = start; i <= end; i += 1) {
      let line = '';
      data[i].forEach((item) => {
        const { c, p, h } = item;
        line += `${pinyin ? p : c}${hints ? ` (${h})` : ''}-${
          pinyin ? c : p
        }\n`;
      });
      acc += line;
    }
    setText(acc);
  }, [end, hints, pinyin, start]);

  return (
    <>
      <Header as="h1">How to Use</Header>
      <p>Create a new Quizlet set.</p>
      <p>
        Below description, click on &quot;+ Import from Word, Excel, Google
        Docs, etc.&quot;.
      </p>
      <p>
        Copy and paste this text into the textbox, select &quot;Custom&quot; for
        &quot;Between term and definition&quot;, and put in a hyphen character
        (-).
      </p>
      {text && (
        <div className="quizlet-container">
          <Form>
            <TextArea disabled rows="30">
              {text}
            </TextArea>
          </Form>
        </div>
      )}
    </>
  );
}
