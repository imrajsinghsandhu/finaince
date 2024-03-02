import './App.css';

function App() {

  const randomiseTextColour = () => {
    // i want to change the colour of the button background
    const p = document.querySelector('p');
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    p.style.color = randomColor;
  }

  return (
    <div className="App">
      <header>
        <nav>
          <button onClick={() => randomiseTextColour()}>Home</button>
        </nav>
      </header>
      <main>
        <p>Putting the AI in finaince</p>
      </main>
      <footer>
        <p>
          I am bringing sophisticated Machine Learning indicators to the retail investor.
          I am levelling out the playing field
        </p>
      </footer>
    </div>
  );
}

export default App;
