import { Routes, Route, Link } from 'react-router-dom'

function Home() {
  return <h1>Home Page</h1>
}

function Cats() {
  return <h1>Cats Page</h1>
}

function App() {
  return (
    <div>

      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/cats">Cats</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cats" element={<Cats />} />
      </Routes>

    </div>
  )
}

export default App