import { Link } from 'react-router';

export default function About() {
  return (
    <div id="about">
      <Link to="/">Home</Link>
      <h1>About React Router</h1>
      <div>
        <p>React Router is a library for routing in React.</p>

        <h2>Quick Start</h2>
        <ul>
          <li>
            <a href="https://reactrouter.com/docs/en/v6/getting-started/installation">
              Installation
            </a>
          </li>
          <li>
            <a href="https://reactrouter.com/docs/en/v6/getting-started/concepts">Concepts</a>
          </li>
          <li>
            <a href="https://reactrouter.com/docs/en/v6/getting-started/examples">Examples</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
