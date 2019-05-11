import { configure, addDecorator, getStorybook } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { setDefaults, withInfo } from '@storybook/addon-info';
// import { configure as configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
// import { omit } from 'lodash-es';
import { checkA11y } from '@storybook/addon-a11y';

import '../src/global-styles';

const importAll = (req) => {
  req.keys().forEach((filename) => req(filename));
};

const loadStories = () => {
  let req;
  req = require.context('../client/components', true, /\.stories\.js$/);
  importAll(req);

  if (! process.env.EXPORT_TO_SKETCH) {
    req = require.context('../client/containers', true, /\.stories\.js$/);
    importAll(req);
  }
}

setDefaults({
  header: true,
  inline: false
});

// TODO: Uncomment once @storybook/addons reaches 3.4.x
// configureViewport({
//   viewports: omit(INITIAL_VIEWPORTS, 'responsive'),
//   defaultViewport: 'iphone6'
// });

setOptions({
  name: 'Experience',
  hierarchySeparator: /\/|\./,
  hierarchyRootSeparator: /\|/,
});

if (! process.env.EXPORT_TO_SKETCH) {
  addDecorator((story, context) => withInfo('')(story)(context));
}

addDecorator(checkA11y);

configure(loadStories, module);

export {
  getStorybook
};
