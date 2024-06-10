import axios from "axios";
import { useState, useEffect } from "react";
import SavedQuotes from "./SavedQuotes";
import { FaQuoteLeft } from "react-icons/fa";

function Card() {
  const [quote, setQuote] = useState({
    content: "",
  });

  const [savedQuotes, setSavedQuote] = useState([]);
  const [showSaved, setShowSaved] = useState(false);

  const fetchNewQuote = async () => {
    try {
      const response = await axios.get(
        "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
      );
      setQuote({
        content: response.data[0],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const saveQuote = () => {
    setSavedQuote([...savedQuotes, quote]);
  };

  const handleClick = () => setShowSaved(!showSaved);

  useEffect(() => {
    async function getQuotes() {
      try {
        const response = await axios.get(
          "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
        );
        setQuote({
          content: response.data[0],
        });
      } catch (error) {
        console.log(error);
      }
    }
    getQuotes();
  }, []);

  return (
    <>
      {showSaved && (
        <SavedQuotes quotes={savedQuotes} handleClick={handleClick} />
      )}
      <div className="card">
        {quote.content ? (
          <>
            <div className="quote-icon">
              <FaQuoteLeft />
            </div>
            <h1 className="quote">{quote.content}</h1>
            <button className="get-quote" onClick={fetchNewQuote}>
              New Quote
            </button>
            <button className="get-quote" onClick={saveQuote}>
              Save Quote
            </button>
            <button className="get-quote" onClick={handleClick}>
              Show Saved
            </button>
          </>
        ) : (
          <div class="loader"></div>
        )}
      </div>
    </>
  );
}

export default Card;
