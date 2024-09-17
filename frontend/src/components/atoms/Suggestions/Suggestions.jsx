// Suggestions.jsx
import React, { useEffect, useRef, useState } from "react";
import "./Suggestions.css";

export const Suggestions = ({ results }) => {
  const suggestionsRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsOpen(results && results.length > 0);
  }, [results]);

  if (!results || !Array.isArray(results) || !isOpen) {
    return null;
  }

  return (
    <div className="suggestions" ref={suggestionsRef}>
      {results.map((result) => (
        <div
          key={result.id}
          className="suggestion"
          onClick={() => alert(`You selected ${result.name}!`)}
        >
          {result.name}
        </div>
      ))}
    </div>
  );
};