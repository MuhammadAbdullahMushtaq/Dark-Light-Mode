import React from 'react';
import './styles/App.css';
import DarkMode from "./components/DarkMode.js";


function App() {
  return (
    <div className="App">
      <nav>
        <a href="/">Home</a>
        <a href="/">Projects</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <DarkMode />
      </nav>
      <h1>Hello World</h1>
      <div id="images"></div>
      <p>The Paragraphs module in Drupal provides editors with a component driven architecture for building pages. Morpht has been developing Paragraph approaches to site building since 2015. This case study captures some of the content from a Drupal 7 "Paragraphs Demo" site which was built to showcase what could be done with Paragraphs.</p>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
    </div>
  );
}

export default App;