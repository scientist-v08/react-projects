// Uncomment this line to use CSS modules
// import styles from './app.module.css';
// import reactLogo from '../assets/react-logo.png';

import Footer from './footer';
import Header from './header';
import Main from './main';
import { Fragment } from 'react/jsx-runtime';

function App() {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
