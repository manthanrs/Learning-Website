import React, { useState } from 'react';

const questions = [
  {
    question: 'What is AI?',
    options: ['Artificial Icecream', 'Artificial Intelligence', 'Analog Input'],
    answer: 1,
  },
  {
    question: 'What does ML stand for?',
    options: ['Machine Learning', 'Manual Loop', 'Media Line'],
    answer: 0,
  },
];

function Quiz({ lessonId, onEvent }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    const isCorrect = selected === questions[current].answer;
    onEvent('quiz_submit');
    alert(isCorrect ? 'Correct!' : 'Incorrect.');
    setSubmitted(true);
  };

  if (!questions[current]) return null;

  return (
    <div className="border p-4 mt-4">
      <h3 className="text-lg font-bold">Quiz</h3>
      <p>{questions[current].question}</p>
      <ul className="mt-2">
        {questions[current].options.map((opt, idx) => (
          <li key={idx}>
            <label>
              <input
                type="radio"
                name="option"
                value={idx}
                onChange={() => setSelected(idx)}
                disabled={submitted}
              />{' '}
              {opt}
            </label>
          </li>
        ))}
      </ul>
      {!submitted && (
        <button className="bg-green-500 text-white p-2 mt-2" onClick={handleSubmit} disabled={selected === null}>
          Submit
        </button>
      )}
    </div>
  );
}

export default Quiz;