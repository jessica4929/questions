import { FaPlus, FaMinus } from "react-icons/fa6";

const SingleQuestion = ({ isActive, toggleQuestion, title, info, id }) => {
  const isThisActive = id === isActive;
  return (
    <div className="question">
      <header className="question-header">
        <h5>{title}</h5>
        <button
          type="button"
          className="btn question-btn"
          onClick={() => toggleQuestion(id)}
        >
          {isThisActive ? <FaMinus /> : <FaPlus />}
        </button>
      </header>
      {isThisActive && <p>{info}</p>}
    </div>
  );
};
export default SingleQuestion;
