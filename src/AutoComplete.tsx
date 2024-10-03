import { SetStateAction, useState } from "react";

interface autoColpeteProps {
  suggestions: string[];
}

const Autocomplete = ({ suggestions }: autoColpeteProps) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState(suggestions);
  const [inputValue, setInputValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (e) => {
    const query = e.target.value;
    setInputValue(query);

    if (query.length > 0) {
      const filtered = suggestions.filter(
        (suggestion) =>
          suggestion.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
      setFilteredSuggestions(filtered);
      setIsVisible(true);
    } else {
      setFilteredSuggestions(suggestions);
    }
  };
  const handleFocus = () => {
    setIsVisible(true);
  };

  const handleBlur = () => {
    setTimeout(() => setIsVisible(false), 200);
  };
  const handleSuggestionClick = (suggestion: SetStateAction<string>) => {
    setInputValue(suggestion);
    setIsVisible(false);
  };

  return (
    <div className="autocomplete">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Type to search..."
      />
      {isVisible && (
        <ul className="suggestions-list">
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((suggestion, index) => (
              <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </li>
            ))
          ) : (
            <li>No suggestions available</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
