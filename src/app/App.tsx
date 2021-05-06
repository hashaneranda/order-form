import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';

import Theme from 'theme/theme';
import ThemeSwitcher from 'theme/themeSwitcher';

// components
import Layout from 'common/components/Layout/Layout';

const App: React.FC = () => {
  return (
    <StylesProvider injectFirst>
      <ThemeSwitcher>
        <Theme>
          <Layout />
        </Theme>
      </ThemeSwitcher>
    </StylesProvider>
  );
};

export default App;
