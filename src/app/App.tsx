import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';

import Theme from 'theme/theme';
import ThemeSwitcher from 'theme/themeSwitcher';

// pages
import Form from 'pages/Form/Form';

const App: React.FC = () => {
  return (
    <StylesProvider injectFirst>
      <ThemeSwitcher>
        <Theme>
          <Form />
        </Theme>
      </ThemeSwitcher>
    </StylesProvider>
  );
};

export default App;
