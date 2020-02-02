const { google } = require('googleapis')

class GoogleSheetSource {
  static defaultOptions() {
    return {
      sheetId: '',
      apiKey: '',
      type: 'googleSheet',
    }
  }

  constructor(api, options = GoogleSheetSource.defaultOptions()) {
    this.options = options

    api.loadSource(async store => {
      const contentType = store.addCollection({
        typeName: this.options.type
      })

      const sheets = google.sheets({
        version: 'v4',
        auth: this.options.apiKey,
      })

      await sheets.spreadsheets.values
        .get({
          spreadsheetId: this.options.sheetId,
          range: 'A1:ZZ10000',
        })
        .then(response => {
          const data = response.data.values
          const titles = data.shift()
          const nodes = data.map(value => {
            return titles.reduce(
              (title, key, index) => ({ ...title, [key]: value[index] }),
              {}
            )
          })
          nodes.map((value, key, title) => {
            contentType.addNode(value)
          })
        })
        .catch(err => console.log(err))
    })
  }
}

module.exports = GoogleSheetSource
