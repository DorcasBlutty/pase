import Wallpapers from "./wallpapers";

function Header() {
    
  return (
    <header className="header">
      <div className="container">
        <h1 className="title">Mavel's Fearless</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
          molestias earum eveniet.
        </p>
        <div className="search-bar">
          <input type="search" placeholder="Search" />
              </div>
              <Wallpapers/>
      </div>
      <style jsx>
        {`
          .header {
            width: 100%;
            height: 120vh;
            padding-top: 15rem;
            padding-bottom: 5rem;
            color: var(--color-secondary);
            background-color: var(--color-primary);
            position: relative;
          }

          .title,
          .subtitle {
            width: 60rem;
            max-width: 100%;
          }

          .title {
            font-size: 7.2rem;
          }

          .subtitle {
            margin-bottom: 3rem;
          }
          .container {
            width: 124rem;
            max-width: 100%;
            margin: 0rem auto;
          }
          @media (max-width: 1280px) {
            .container {
              padding: 0rem 10rem;
            }
          }

          @media (max-width: 768px) {
            .container {
              padding: 0rem 4rem;
            }
          }
          
          .search-bar {
  width: 30rem;
  max-width: 100%;
  margin-bottom: 8rem;
  border-bottom: 2px solid var(--color-tertiary);

  position: relative;
  font-size: 1.6rem;
}

.search-bar input {
  width: 100%;
  height: 100%;
  border: 0;
  outline: none;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

        `}
      </style>
    </header>
  );
}
export default Header;
