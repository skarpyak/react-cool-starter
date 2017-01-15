import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import config from '../../config';
import globalIdLogo from './assets/logo.svg';
import Button from '../../components/Button';

import '../../theme/normalize.css';
import styles from './styles.scss';

const App = ({ children }) => (
  <div className={styles.App}>
    <Helmet {...config.app} />
    <div className={styles.header}>
      <Button
        icon={globalIdLogo}
        label={'Log in with Global iD'}
        onClick={() => {
          window.open('https://www.google.com', '_blank');
        }
      }
      />
    </div>
    <hr />
    {children}
    <hr />
    <div className={styles.footer} />
  </div>
);

App.propTypes = { children: PropTypes.node };
App.defaultProps = { children: PropTypes.node };

export default App;
