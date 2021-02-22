import Twig from 'twig';
Twig.cache();

import template from './components/card.html.twig';

const html = template({
  title: 'Card Title',
  cover: 'https://source.unsplash.com/rMaqjPnupGo/1280x720'
});

export default {
  title: 'Card',
  excludeStories: /.*twig$/
};

export const Default = () => `<div class="max-w-md">${html}</div>`;

Default.parameters = {
  docs: {
    source: {
      code: html
    }
  }
};
