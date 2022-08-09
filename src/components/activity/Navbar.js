import styled from 'styled-components';
import {Link, useMatch, useResolvedPath} from 'react-router-dom';

function Navbar() {
  return (
    <StyledNavigation>
      <>
        <main>
          <header>
            <img width={180} height={180} src="./images/logo.png" alt="logo" />
            <h2>Structure your Day</h2>
          </header>

          <nav>
            <CustomLink to="/">Homepage</CustomLink>
            <CustomLink to="/listEntries">Einträge</CustomLink>
            <CustomLink to="/todos">Todos</CustomLink>
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
display: flex;
  justify-content: space-evenly;
  text-align: center;
  width: 100%;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 12px;
  background-color: rgba(255,255,255, 0.2);






  
  
  
  
  

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
