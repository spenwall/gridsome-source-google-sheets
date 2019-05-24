# Gridsome Source for Google Sheets

Source plugin for fetching data from Google Sheets. 

## Install 

```js
yarn add gridsome-source-google-sheets
```
npm
```js
npm install gridsome-source-google-sheets
```

## How to use

You will need to generate a google api key here. The sheetId can be found on the sheets url.
```js
module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-source-google-sheets',
      options: {
        sheetId: "",
        apiKey: "",
      }
    }
  ]
}
```

In your pages

```js
<page-query>
  query MyData {
    allGoogleSheet(sortBy: "id", order: ASC) {
      edges {
        node {
          id
          Col1
          Col2
        }
      }
    }
  }
</page-query>
```