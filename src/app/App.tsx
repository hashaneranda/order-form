import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import Theme from 'theme/theme';
import ThemeSwitcher from 'theme/themeSwitcher';

// pages
const Form = React.lazy(() => import('pages/Form/Form'));
const DataView = React.lazy(() => import('pages/DataView/DataView'));

const App: React.FC = () => {
  return (
    <StylesProvider injectFirst>
      <ThemeSwitcher>
        <Theme>
          <Suspense
            fallback={
              <div style={{ minWidth: '100vw', minHeight: '100vh', display: 'grid', placeItems: 'center' }}>
                <CircularProgress />
              </div>
            }
          >
            <Router>
              <Switch>
                <Route path='/' exact component={Form} />
                <Route path='/summary' exact component={DataView} />
              </Switch>
            </Router>
          </Suspense>
        </Theme>
      </ThemeSwitcher>
    </StylesProvider>
  );
};

export default App;
