# Checkout.com API developer portal

## Prerequisites

- [node.js >= 12.14.1](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/en/)

## Install

To run this project or storybook, you first must install node modules.

```
    yarn install
```

## Start development server

To run this project and view it in the browser. Run the following:
Note: search isn't functional in the development environment.

```
    yarn start
```

## Troubleshooting

We heavily rely on caching for performance issues so if some changes are not reflected in the resulting portal try cleaning cache by running:

```
    yarn clean
```

## Docs

Read the [online documentation](https://redoc.ly/docs/developer-portal/introduction/).

## Storybook

To build components in isolation or to view existing components. Run the following and open localhost: 6006

```
    yarn storybook
```
