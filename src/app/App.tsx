import React, { Suspense } from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import Theme from 'theme/theme';
import ThemeSwitcher from 'theme/themeSwitcher';

// pages
const Form = React.lazy(() => import('pages/Form/Form'));

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
            <Form />
          </Suspense>
        </Theme>
      </ThemeSwitcher>
    </StylesProvider>
  );
};

export default App;
