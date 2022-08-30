import { useState } from 'react';
import styled from 'styled-components'
import { Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { FadeYUp } from './components/helpers/Animations';

import { Nav, Header, AuthModal } from './components/blocks';

import {
  ActivityExchange,
  Dashboard,
  BloggersExchange,
  Landings,
  Marathone,
  MutualPR,
  Shop,
  Structure
} from './pages';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  font-size: 16px;
  padding: 30px 20px;
  grid-gap: 30px;
  @media (max-width: ${props => props.theme.screen.tablet}){
    grid-gap: 16px;
    padding: 16px;
  }
`

const AppInner = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  height: 100%;
  grid-gap: 20px;
  @media (max-width: ${props => props.theme.screen.tablet}){
    grid-template-columns: initial;
  }
`

const AppContent = styled.div`
  opacity: 0;
  animation: ${FadeYUp} .5s ${props => props.theme.transition.function} forwards;
  animation-delay: .2s;
  position: relative;
  background: ${props => props.theme.colors.indigo};
  border-radius: 20px;
  @media (max-width: ${props => props.theme.screen.tablet}){
    border-radius: 15px;
  }
`

const App = () => {
  const location = useLocation();
  const [authOpen, setAuthOpen] = useState<boolean>(false);
  const timeout = {
    appear: 400,
    enter: 800,
    exit: 400,
  }
  
  return (
    <AppWrapper>
      <Header authOpen={authOpen} setAuthOpen={setAuthOpen} />
      <AppInner>
        <Nav aside={true} />
        <AppContent>
          <TransitionGroup>
            <CSSTransition
              key={location.pathname}
              classNames="fade"
              timeout={timeout}
              >
              <Routes location={location}>
                <Route path="/" element={ <Dashboard /> } />
                <Route path="/activity-exhange" element={ <ActivityExchange /> }/>
                <Route path="/bloggers-exhange" element={ <BloggersExchange /> }/>
                <Route path="/mutual-pr" element={ <MutualPR /> }/>
                <Route path="/structure" element={ <Structure /> }/>
                <Route path="/shop" element={ <Shop /> }/>
                <Route path="/marathone" element={ <Marathone /> }/>
                <Route path="/landings" element={ <Landings /> }/>
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </AppContent>
      </AppInner>
      <CSSTransition
        in={authOpen}
        timeout={600}
        classNames="modal"
        unmountOnExit>
          <AuthModal authOpen={authOpen} setAuthOpen={setAuthOpen} />
      </CSSTransition>
    </AppWrapper>
  );
}

export default App;