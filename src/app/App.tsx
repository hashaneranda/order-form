import React from "react";
import { StylesProvider } from "@material-ui/core/styles";

import Theme from "theme/theme";
import ThemeSwitcher from "theme/themeSwitcher";

const App: React.FC = () => {
  return (
    <StylesProvider injectFirst>
      <ThemeSwitcher>
        <Theme>
          <div>
            <h1>test</h1>
          </div>
        </Theme>
      </ThemeSwitcher>
    </StylesProvider>
  );
};

export default App;
