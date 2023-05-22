import React from 'react';
const footer = () => {
  const year = new Date().getFullYear();
  return <footer>{`Copyright © CompareMate ${year}`}</footer>;
};



export default footer;