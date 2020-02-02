# Gridsome Source for Google Sheets

![npm](https://img.shields.io/npm/v/gridsome-source-google-sheets.svg)
![npm](https://img.shields.io/npm/dt/gridsome-source-google-sheets.svg)
![NPM](https://img.shields.io/npm/l/gridsome-source-google-sheets.svg)

Source plugin for fetching data from Google Sheets. 

## Requirements

Gridsome: >0.7.0

## Install 

```js
yarn add gridsome-source-google-sheets
```
npm
```js
npm install gridsome-source-google-sheets
```

## How to use

You will need to generate a google api key [here](https://console.developers.google.com/apis/credentials). The sheetId 
can be found on the sheets url. It is the large hash number near the end. You will also need to make your spreadsheet viewable to the public to use the api credentials.

```js
module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-source-google-sheets',
      options: {
        sheetId: 'GOOGLE_SHEET_ID', 
        apiKey: 'GOOGLE_API_KEY',
        // type: 'TYPE_NAME', //Optional - default is googleSheet. Used for graphql queries.
      }
    }
  ]
}
```

### Example query on page template

```js
<page-query>
  query MyData {
    allGoogleSheet {
      edges {
        node {
          id
          title
        }
      }
    }
  }
</page-query>
```

### To use data in page

```js
<template>
  <div>
    {{ $page.allGoogleSheet.node.id }}
  </div>
  <div>
    {{ $page.allGoogleSheet.node.title }}
  </div>
</template>
```

### Using Templates

To use this in a template first setup the template route in gridsome.config.js

```js
module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-source-google-sheets',
      options: {
        sheetId: 'GOOGLE_SHEET_ID', 
        apiKey: 'GOOGLE_API_KEY',
        // type: 'TYPE_NAME', //Optional - default is googleSheet. Used for graphql queries.
      }
    }
  ],
  templates: {
    googleSheet: [
      {
        path: '/:id',
        component: './src/templates/googleSheet.vue'
      }
    ]
  }
}

```

### Example template in src/template/googleSheet.vue

```js
<template>
  <layout>
    <div>{{$page.googleSheet.title}}</div>
    <div>{{$page.googleSheet.body}}</div>
  </layout>
</template>

<page-query>
query Post ($path: String!) {
  googleSheet (path: $path) {
    title
    body
  }
}
</page-query>
```

## Limitations

* Max columns 52
* Max rows 10000
