import LOGO from "./assets/react-core-concepts.png"



function CoreConcept() {
  return (
    <li>
      <img src="" alt="" className="src" />
      <h3>TITLE</h3>
      <p>Description</p>
    </li>
  )
}

function App() {
  return (
    <div>
      <header>
        <img src={LOGO} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts needed for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <section id = "core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title = "Components" description = "The core UI building block"/>
            <CoreConcept />
            <CoreConcept />
            <CoreConcept />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
