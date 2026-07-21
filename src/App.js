import { useState } from "react";
import "./style.css";
//import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 1998,
    question: "who is creator of this flashcards program?",
    answer: "Muhammad Awais",
  },
];

function FlashCards() {
  const [selectid, setSelected] = useState(null);
  const handleClick = (id) => {
    setSelected((id = id !== selectid ? id : null));
  };
  return (
    <div className="flashcards">
      {questions.map((ques) => (
        <div
          key={ques.id}
          className="card-wrapper"
          onClick={() => handleClick(ques.id)}
        >
          <div
            className={`card-inner${ques.id === selectid ? " flipped" : ""}`}
          >
            <div className="card-face card-front">
              <p>{ques.question}</p>
            </div>
            <div className="card-face card-back">
              <p>{ques.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
