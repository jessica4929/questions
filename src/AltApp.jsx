import { useState } from "react";
import data from "./data.js";
import AltQuestion from "./AltQuestion.jsx";

const AltApp = () => {
  const [isActive, setIsActive] = useState(null);
  const toggleQuestion = (id) => {
    id === isActive ? setIsActive(null) : setIsActive(id);
  };
  return (
    <main>
      <article className="container">
        <h1>Questions</h1>

        <AltQuestion
          isActive={isActive}
          toggleQuestion={toggleQuestion}
          questions={data}
        />
      </article>
    </main>
  );
};
export default AltApp;
