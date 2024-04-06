import SingleQuestion from "./SingleQuestion";
const AltQuestion = ({ isActive, toggleQuestion, questions }) => {
  return (
    <>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            isActive={isActive}
            toggleQuestion={toggleQuestion}
            {...question}
          />
        );
      })}{" "}
    </>
  );
};
export default AltQuestion;
