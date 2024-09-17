// SearchBar.jsx
import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { Suggestions } from "../../atoms/Suggestions/Suggestions"; // Asegúrate de tener la ruta correcta

export const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/course");
        console.log("Response:", response);

        const data = response.data;
        console.log("Data:", data);

        const filteredResults = Array.isArray(data.data)
          ? data.data.filter((product) => {
              return (
                input &&
                product &&
                product.name &&
                product.name.toLowerCase().includes(input.toLowerCase())
              );
            })
          : [];

        setResults(filteredResults);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [input]);

  const handleInputFocus = () => {
    setIsExpanded(true);
  };

  const handleInputBlur = () => {
    if (input.trim() === "") {
      setTimeout(() => {
        setIsExpanded(false);
      }, 200);
    }
  };

  const handleChange = (value) => {
    setInput(value);
  };

  return (
    <div className={`search-bar ${isExpanded ? "expanded" : ""}`}>
      {isExpanded ? (
        <>
          <input
            type="text"
            placeholder="Buscar por títulos"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            value={input}
            onChange={(e) => handleChange(e.target.value)}
            className="search-input"
          />
          <Suggestions results={results} />
        </>
      ) : (
        <div className="icon-container" onClick={handleInputFocus}>
          <FaSearch className="search-icon" />
        </div>
      )}
    </div>
  );
};