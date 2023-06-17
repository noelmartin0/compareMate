import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchPage() {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSearch = () => {
    if (keyword.trim() !== '') {
      searchProducts(keyword);
    }
  };

  const searchProducts = async (keyword) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ keyword }),
      });

      if (response.ok) {
        const products = await response.json();
        navigate('/Results', { state: { products } });
      } else {
        console.error('Failed to fetch search results');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Search Page</h1>
      <input type="text" value={keyword} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchPage;