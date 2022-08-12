import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react';
import Home from './components/pages/Home';
import Crivella from './components/pages/Crivella';
import Freixo from './components/pages/Freixo';
import Information from './components/pages/Information';
import PageNotFound from './components/pages/PageNotFound';
import { MenuOutlined, Close } from '@mui/icons-material';
import { GlobalStyle } from './components/styled/GlobalStyle';
import { PageWrapper } from './components/styled/App.styled';
import {
  Navbar,
  Logo,
  StyledActiveLink,
  Closed,
  MenuIconWrapper,

} from './components/styled/Navbar.styled';

const App = () => {
  const [active, setActive] = useState('false');


  const showMenu = () => {
    setActive(!active);
  }

  return (
    <>
      <GlobalStyle />
        <HashRouter>
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
                  <StyledActiveLink to='/crivella' onClick={!active && showMenu}> Crivella &#38; News </StyledActiveLink>
                </li>
                <li>
                  <StyledActiveLink to='/freixo' onClick={!active && showMenu}> Freixo &#38; News </StyledActiveLink>
                </li>
                <li>
                  <StyledActiveLink to='/information' onClick={!active && showMenu}> Mais dados </StyledActiveLink>
                </li>
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
        </HashRouter>
    </>
  );
}

export default App;
