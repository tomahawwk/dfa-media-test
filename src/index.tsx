import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './redux/store'

// Styles 
import './assets/styles/normalize.css'
import './assets/styles/routing.css'
import './assets/styles/fonts.css'

import {createGlobalStyle, ThemeProvider} from 'styled-components'

const theme = {
  colors: {
    black: "#000000",
    darkBlue: "#192232",
    indigo: "#212B41",
    darkIndigo: "#1D263A",
    blue: "#667DF3",
    blueHover: "#475cc9",
    lightBlue: "#8B97AE",
    grey: "#707C95"
  },
  screen: {
    phone: "500px",
    tabletMin: "768px",
    tablet: "1024px",
    desktopMin: "1240px",
    desktop: "1440px",
    desktopMd: "1800px",
  },
  fonts: {
    primary: "PTRootUI",
    secondary: "Roboto"
  },
  unit: {
    desktop: "80",
    tablet: "35",
    phone: "16"
  },
  transition: {
    duration: ".4s",
    function: "cubic-bezier(.165,.84,.44,1)",
  }
}

const Global = createGlobalStyle`
  body {
    font-family: ${theme.fonts.primary};
    font-weight: 300;
    background: ${theme.colors.darkBlue};
    color: white;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const rootElement = document.getElementById('root');

if(rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Global />
          <App />
        </ThemeProvider>
      </Provider>
    </Router>
  );
}