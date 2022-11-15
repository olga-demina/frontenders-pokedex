import { useState } from "react";

const SearchBar = ({ performSearch }) => {
  const [searchKey, setSearchKey] = useState("");

  function handleChange(event) {
    setSearchKey(event.target.value);
  }

  function handleKeyup(event) {
    if (event.code === "Enter") {
      handleSearch();
    }
  }

  function handleSearch() {
    performSearch(searchKey);
    setSearchKey("");
  }

  return (
    <header>
      <h2>Cerca un pokemon</h2>
      <input
        type="search"
        placeholder="e.g. bulbausaur"
        onChange={handleChange}
        onKeyUp={handleKeyup}
        value={searchKey}
      />
      <button onClick={handleSearch} disabled={!searchKey}>
        Cerca
      </button>
    </header>
  );
};

export default SearchBar;
