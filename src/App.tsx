import { useState } from 'react';
import './App.scss';
import reactLogo from './assets/react.svg';
import { content } from './data/content';

function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={ reactLogo } className="logo" alt="React logo" />
        </a>
        <div>
          <header>
            <div>
              <h1>React.js</h1>
              <p>Using the React library for rendering the UI</p>
            </div>
          </header>

          <div id="tabs">
            <menu>
              <button
                className={ activeContentIndex === 0 ? "active" : "" }
                onClick={ () => setActiveContentIndex(0) }
              >
                Why React?
              </button>

              <button
                className={ activeContentIndex === 1 ? "active" : "" }
                onClick={ () => setActiveContentIndex(1) }
              >
                Core Features
              </button>

              <button
                className={ activeContentIndex === 2 ? "active" : "" }
                onClick={ () => setActiveContentIndex(2) }
              >
                Related Resources
              </button>

              <button
                className={ activeContentIndex === 3 ? "active" : "" }
                onClick={ () => setActiveContentIndex(3) }
              >
                React vs Vanilla JS
              </button>
            </menu>
            <div id="tab-content">
              <ul>
                { content[activeContentIndex].map((item) => (
                  <li key={ item }>{ item }</li>
                )) }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
