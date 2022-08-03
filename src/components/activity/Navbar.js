import styled from 'styled-components';
import {Link, useMatch, useResolvedPath} from 'react-router-dom';

function Navbar() {
  return (
    <StyledNavigation>
      <>
        <main>
          <header>
            <img width={180} height={180} src="./images/logo.png" alt="logo" />
            <h1>Structure your Day</h1>
            <h2>Deine Zeit optimal genutzt!</h2>
            <h2>Weil unsere Zeit zu kostbar ist!</h2>
          </header>

          <nav>
            <CustomLink to="/">Homepage</CustomLink>

            <CustomLink to="/listEntries">Einträge</CustomLink>
            <CustomLink to="/Calendar">Todos</CustomLink>
          </nav>
        </main>
      </>
    </StyledNavigation>
  );
}

function CustomLink({to, children, ...props}) {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({path: resolvePath.pathname, end: true});

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

const StyledNavigation = styled.main`
  width: 100%;
  background-color: #fff;
  box-shadow: 0 8px 8px rgba(102, 102, 102, 0.05);
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;

  nav {
    background-color: white;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 2rem;
    padding: 0 1rem;
  }

  nav li {
    color: grey;
    float: center;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;

    font-size: 17px;
  }

  nav a {
    color: black;
  }
  nav a:hover {
    background-color: #ddd;
    color: salmon;
  }

  header {
    width: 200px;
    padding: 6px 10px;
    margin: 10px 0;
    border: 1px #ddd;
    box-sizing: border-box;
    display: block;
  }
`;

export {Navbar};
