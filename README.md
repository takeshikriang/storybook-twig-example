# Storybook TWIG example
An example how to set up a Storybook TWIG project.

NOTE: This project uses [Tailwind CSS framework](https://tailwindcss.com/) for styling.

## Getting started
Clone the repo and install dependencies
```
$ git clone git@github.com:takeshikriang/storybook-twig-example.git

$ cd storybook-twig-example
$ yarn install
```

Start Storybook
```
$ yarn storybook
```

Open `http://localhost:6006` in your browser

## How to build
Simply run the following command to build it
```
$ yarn build-storybook
```

## Example Docker
NOTE: not for production use
```
$ docker-compose up -d --build
```
Open `http://localhost/?path=/story/card--default` in your browser

## License
[MIT](https://github.com/takeshikriang/storybook-twig-example/blob/master/LICENSE)
