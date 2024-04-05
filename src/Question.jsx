import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
const Question = ({ id, title, info }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="question">
      <header className="question-header">
        <h5>{title}</h5>
        <button
          type="button"
          className="btn question-btn"
          onClick={() => setIsVisible(!isVisible)}
        >
          <FaPlus />
        </button>
      </header>
      {isVisible && <p>{info}</p>}
    </div>
  );
};
export default Question;
