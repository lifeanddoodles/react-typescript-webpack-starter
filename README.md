## Download the Boilerplate

`npx degit https://github.com/lifeanddoodles/react-typescript-webpack-starter app-name`

## Install Dependencies

Go to your project folder, for example: `cd app-name`\
`npm install`

## Run Dev Server

`npm run start`

## Build

`npm run build`

## Env Variables

With Webpack we can define our own variables for use in the application.

In `/webpack/webpack.dev.js`, at the top add:

```javascript
const webpack = require('webpack')
```

Inside the plugins array add:

```javascript
plugins: [
...
new webpack.DefinePlugin({
'process.env.yourvariablename': JSON.stringify('valueindev'),
}),
],
```

In `/webpack/webpack.prod.js` at the top add:

```javascript
const webpack = require('webpack')
```

Inside the plugins array add:

```javascript
plugins: [
...
new webpack.DefinePlugin({
'process.env.yourvariablename': JSON.stringify('valueinprod'),
}),
],
```

To use it in a component on the front end just add:

```javascript
{
  process.env.yourvariablename
}
```
