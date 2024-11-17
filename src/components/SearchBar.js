import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <div className="flex justify-center mt-4">
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search tasks..."
      className="border border-gray-300 rounded-md p-2 w-3/4 focus:outline-none focus:ring focus:ring-blue-300"
    />
  </div>
);

export default SearchBar;
