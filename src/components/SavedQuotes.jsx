import React from "react";

const SavedQuotes = ({ quotes, handleClick }) => {
  return (
    <div className="fullscreen-modal">
      <div className="container">
        <div className="content">
          <button className="button-close" onClick={handleClick}>
            X
          </button>
          <h1>Saved Quotes</h1>
          <ul>
            {quotes.map((quote) => (
              <li>{quote.content}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SavedQuotes;
