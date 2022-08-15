import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import ReactSwitch from 'react-switch';
import Home from './components/pages/Home';
import Crivella from './components/pages/Crivella';
import Freixo from './components/pages/Freixo';
import Information from './components/pages/Information';
import PageNotFound from './components/pages/PageNotFound';
import { MenuOutlined, Close } from '@mui/icons-material';
import { GlobalStyle } from './components/styled/GlobalStyle';
import { PageWrapper, ToggleThemeWrapper } from './components/styled/App.styled';
import {
  Navbar,
  Logo,
  StyledActiveLink,
  Closed,
  MenuIconWrapper,
} from './components/styled/Navbar.styled';

const themeLight = {
  id: "light",
  colorBackground: '#F9F9F9',
  colorBackgroundPlus: '#F0F0F0',
  colorText: 'rgba(0, 0, 0, .8)'
}
  
const themeDark = {
  id: "dark",
  colorBackground: '#393939',
  colorBackgroundPlus: 'rgba(0, 0, 0, .8)',
  colorText: '#E5E5E5'  
}
  

const App = () => {
  const [active, setActive] = useState('false');
  const [theme, setTheme] = useState(themeLight)

  const showMenu = () => {
    setActive(!active);
  }

  const toggleTheme = () => {
    if(theme.id === "light") setTheme(themeDark)
    if(theme.id === "dark") setTheme(themeLight)
  }
  return (
    <>
      <GlobalStyle />
        <HashRouter>
          <ThemeProvider theme={theme}>
            <PageWrapper>
              <Logo>
                <Link to='/'> <img src="./images/logo.svg" alt="" /> </Link>
                <Link to='/'>
                  <p>
                    NCD<br/>
                    <span>Notícias Candidados Dashboard</span>
                  </p>
                </Link>
              </Logo>

              <MenuIconWrapper>
                <MenuOutlined onClick={showMenu} />
              </MenuIconWrapper>
              <Navbar className={!active ? 'active' : ''}>
                <ul>
                  <Closed>
                    <Close onClick={showMenu} />
                  </Closed>
                  <li>
                    <StyledActiveLink to='/' onClick={!active && showMenu}> Home </StyledActiveLink>
                  </li>
                  <li>
                    <StyledActiveLink to='/crivella' onClick={!active && showMenu}> Crivella </StyledActiveLink>
                  </li>
                  <li>
                    <StyledActiveLink to='/freixo' onClick={!active && showMenu}> Freixo </StyledActiveLink>
                  </li>
                  <li>
                    <StyledActiveLink to='/information' onClick={!active && showMenu}> Mais dados </StyledActiveLink>
                  </li>

                  <ToggleThemeWrapper>
                    <label>
                      {theme.id === "light" ? "Light Mode" : "Dark Mode" }
                    </label>
                    <ReactSwitch
                      onChange={toggleTheme}
                      checked={theme.id === "dark"}
                    />
                  </ToggleThemeWrapper>
                </ul>
              </Navbar>

              <Routes>
                <Route exact path='/' element={ <Home /> } />
                <Route path='/crivella' element={ <Crivella  /> } />
                <Route path='/freixo' element={ <Freixo /> } />
                <Route path='/information' element={ <Information /> } />
                <Route path='/*' element={ <PageNotFound /> } />
              </Routes>
            </PageWrapper>
          </ThemeProvider>
        </HashRouter>
    </>
  );
}

export default App;
