import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`https://wp1.edukacija.online/backend/wp-json/wp/v2/product?search=${query}`);
        const data = await res.json();
        setSuggestions(data);
      } catch (err) {
        console.error("Failed to fetch suggestions:", err);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const handleSelect = (slug) => {
    navigate(`/shop/${slug}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (suggestions.length > 0) {
      navigate(`/shop/${suggestions[0].slug}`);
    }
  };

  return (
    <div className="search-box p-4 bg-transparent text-white rounded">
      <form onSubmit={handleSubmit} className="d-flex mb-2">
        <input
          className="form-control me-2"
          type="text"
          placeholder="Type a product name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>

      {suggestions.length > 0 && (
        <ul className="list-group mt-2">
          {suggestions.map((item) => (
            <li
              key={item.id}
              className="list-group-item list-group-item-action"
              onClick={() => handleSelect(item.slug)}
              style={{ cursor: "pointer" }}
            >
              {item.title.rendered}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;