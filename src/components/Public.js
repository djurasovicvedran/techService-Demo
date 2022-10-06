import { Link } from "react-router-dom";

import React from "react";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">techService!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Sarajevo, techService is ready to meet your tech needs.
        </p>
        <address className="public__addr">
          techService
          <br />
          Titova 54
          <br />
          71210, Sarajevo
          <br />
          <a href="tel:+15555555555">(555) 555-5555</a>
        </address>
        <br />
        <p>Owner: Future Millionaire</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};

export default Public;
