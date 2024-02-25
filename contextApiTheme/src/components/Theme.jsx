import React, { useContext, useEffect } from 'react';
import ThemeContext from '../context.js/ThemeContext';

function Theme() {
  const { theme, themeChanger } = useContext(ThemeContext);

  // Effect for updating the theme on HTML element
  useEffect(() => {
    const htmlElement = document.querySelector('html');

    // Remove previous theme classes
    htmlElement.classList.remove('light', 'dark');

    // Add the current theme class
    htmlElement.classList.add(theme);
  }, [theme]);

  // Function to handle the theme change
  const handleThemeChange = () => {
    // Call the themeChanger function from context
    themeChanger();
  };

  return (
    <>
      <p>This is a Theme changer and current theme is: {theme}</p>
      <button onClick={handleThemeChange} style={{padding:'10px'}}>Click</button>
    </>
  );
}

export default Theme;

!
