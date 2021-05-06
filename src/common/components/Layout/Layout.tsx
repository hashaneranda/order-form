import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

import { useThemeValue } from 'theme/themeContext';
import { THEME_OPTIONS } from 'theme/config';

// pages
const Form = React.lazy(() => import('pages/Form/Form'));
const DataView = React.lazy(() => import('pages/DataView/DataView'));

// styles
import { RootConatiner, FabContainer, LoadingConatiner } from './styles';

const Layout: React.FC = () => {
  const [{ selectedTheme }, dispatch] = useThemeValue();

  const toggleTheme = () => {
    const toggleTheme = selectedTheme === THEME_OPTIONS.DARK ? THEME_OPTIONS.LIGHT : THEME_OPTIONS.DARK;

    dispatch({
      type: toggleTheme,
    });
  };

  return (
    <RootConatiner>
      <FabContainer color='primary' aria-label='add' onClick={() => toggleTheme()}>
        {selectedTheme === THEME_OPTIONS.DARK ? <Brightness7Icon /> : <Brightness4Icon />}
      </FabContainer>

      <Suspense
        fallback={
          <LoadingConatiner>
            <CircularProgress />
          </LoadingConatiner>
        }
      >
        <Router>
          <Switch>
            <Route path='/' exact component={Form} />
            <Route path='/summary' exact component={DataView} />
          </Switch>
        </Router>
      </Suspense>
    </RootConatiner>
  );
};

export default Layout;
