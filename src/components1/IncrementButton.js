import React, { useState } from 'react';

function IncrementButton() {
  const [count, setCount] = useState(0); // Initialize count state to 0

  const handleClick = () => {
    if (count < 10) {
      setCount(count + 1); // Increment count by 1
    }
  };

  // Determine button style based on count value
  const buttonStyle = {
    backgroundColor: count >= 10 ? 'gray' : 'blue', // Change color to gray if count >= 10
    color: 'white', // Text color
    border: 'none', // Remove default border
    padding: '10px 20px', // Padding for button
    cursor: count >= 10 ? 'not-allowed' : 'pointer', // Change cursor style
  };

  return (
    <button onClick={handleClick} disabled={count >= 10} style={buttonStyle}>
      {count === 0 ? 'Click me' : (count >= 10 ? 'Disabled!' : count)}
    </button>
  );
}

export default IncrementButton;
