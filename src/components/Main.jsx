import { useState } from "react";
import data from "../data/data.jsx";

export default function Main() {
  const [page, setPage] = useState(null);

  function handleClick(i) {
    setPage(i);
  }

  let currentData = data[page] || null;

  return (
    <>
      <main>
        <div className="container">
          <div className="title">
            <h1>Programming Languages</h1>
            <h4>... not just web!</h4>
            <hr />
          </div>
          <div className="content">
            <div className="buttons">
              {data.map((language, index) => {
                return (
                  <button
                    key={`button:${index}`}
                    onClick={() => handleClick(index)}
                    className={index === page ? "active" : ""}
                  >
                    {language.name}
                  </button>
                );
              })}
            </div>
            <div className="page">
              {currentData !== null ? (
                <>
                  <h2>{currentData.name}</h2>
                  <p>{currentData.description}</p>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
