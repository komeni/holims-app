import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
const Quotes = () => {
  const [quote, setQuote] = useState([]);

  const fetchQuote = async () => {
    const quotes = await fetch("https://swquotes.herokuapp.com/random");
    const data = await quotes.json();

    setQuote(data[0]);
  };
  useEffect(() => {
    fetchQuote();
  }, []);
  return (
    <div className="container" style={{}}>
      <h1 className="display-2 fw-bold text-center">Motivational Quotes</h1>
      <br />
      <h4 className="text-center text-sucess">Dear Halimat,</h4>
      <div className="row">
        <div className="col-lg-8 col-sm-8 mx-auto mt-4 column">
          <div className="card rounded border-0 shadow-lg column">
            <div className="card-body rounded text-center">
              <h2>{quote.quote}</h2>
              <p className="text-muted">- {quote.author}</p>
            </div>
          </div>
          <div className="text-center mt-3">
            <button className="btn btn-success p-3" onClick={fetchQuote}>
              Not interesting?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
