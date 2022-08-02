import styled from 'styled-components';

function Navbar() {
  return (
    <StyledNavigation>
      <>
        <main>
          <nav>
            <ul>
              <a href="/">
                <h3>Structure your Day</h3>
              </a>

              <a href="/listEntries">
                <label>Einträge</label>
              </a>

              
              

              <a href="/Calendar">
                <label>Kalender</label>
              </a>
              
              
              
            </ul>
          </nav>
        </main>
      </>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.main`
  box-sizing: border-box;
  width:  auto;

  nav {
    background-color: #3f3c3b;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 0 1rem;
  }

  nav a {
    color: inherit;
    text-decoration: none;
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;

    font-size: 17px;
  }

  label {
    font-size: 1rem;
  }
  h3 {
    font-size: 1.25rem;
  }

  nav ul {
    padding: 0;
    margin: 0;

    display: flex;
    gap: 1rem;
  }
`;

export {Navbar};
