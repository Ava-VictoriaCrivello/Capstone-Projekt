import GlobalStyles from '../src/GlobalStyles.js';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);



export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    defaultViewport: 'mobile1',
  },
};

export const decorators = [
  Story => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];
