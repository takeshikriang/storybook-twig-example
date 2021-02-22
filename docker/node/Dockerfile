FROM node:current-alpine

WORKDIR /var/www/html/

COPY [".storybook", ".storybook"]
COPY ["stories", "stories"]
COPY ["package.json", "package.json"]
COPY ["postcss.config.js", "postcss.config.js"]
COPY ["tailwind.config.js", "tailwind.config.js"]
COPY ["yarn.lock", "yarn.lock"]

RUN yarn install

RUN yarn build-storybook
