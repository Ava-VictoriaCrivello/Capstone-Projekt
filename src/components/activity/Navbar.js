import styled from 'styled-components';
import {Link, useMatch, useResolvedPath} from 'react-router-dom';

function Navbar() {
  return (
    <StyledNavigation>
      <>
        <main>
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
  max-width: '375';
  max-height: '667';
  background-color: #fff;
  box-shadow: 0 8px 8px rgba(102, 102, 102, 0.05);
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;

  nav {
    background-color: white;
    color: white;
    display: flex;
    max-width: '375';
    max-height: '667';
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
    max-width: '375';
    max-height: '667';
    padding: 6px 10px;
    margin: 10px 0;
    border: 1px #ddd;
    box-sizing: border-box;
    display: block;
  }
`;

export {Navbar};
