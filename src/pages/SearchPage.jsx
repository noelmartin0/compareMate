import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchPage() {
   const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');

  const handleSearch = () => {
    navigate(`/Results?keyword=${keyword}`);
  };

  return (
    <div>
      <h1>Search Page</h1>
      <input type="text" value={keyword}  onChange={(e) => setKeyword(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchPage;