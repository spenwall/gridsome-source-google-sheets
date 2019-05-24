# Gridsome Source for Google Sheets

Source plugin for fetching data from Google Sheets. 

## Install 

```js
yarn add gridsome-source-google-sheets
```

## How to use

You will need to generate a google api key here. The 
```js
module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: googlesheets,
      options: {
        sheetId: "",
        apiKey: "",
      }
    }
  ]
}
```