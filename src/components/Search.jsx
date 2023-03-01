import { useState } from "react";
import { useGlobalContext } from "../context";

export default function Search() {
  const [text, setText] = useState("");
  const { setSearchTerm, fetchRandomMeal } = useGlobalContext();
  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (text) {
      setSearchTerm(text);
    }
  }

  const handleRandomMeal = () => {
    setSearchTerm("");
    setText("");
    fetchRandomMeal();
  };

  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="type favorite meal"
          className="form-input"
          onChange={handleChange}
          value={text}
        />
        <button className="btn" type="submit">
          Search
        </button>
        <button
          className="btn btn-hipster"
          type="btn"
          onClick={handleRandomMeal}
        >
          Surprise me!
        </button>
      </form>
    </header>
  );
}
