import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Timer application</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home">
          <h2>Home</h2>
          <p>This is the home section of my website. You can add your content here.</p>
        </section>

        <section id="about">
          <h2>About</h2>
          <p>This is the about section. Tell visitors about yourself or your project.</p>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>This is the contact section. Add your contact information here.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
