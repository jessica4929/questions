import data from "./data.js";
import Question from "./Question.jsx";

const App = () => {
  console.log(data);
  return (
    <main>
      <article className="container">
        <h1>Questions</h1>
        {data.map((question) => {
          return <Question key={question.id} {...question} />;
        })}
      </article>
    </main>
  );
};
export default App;
