var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-1-1",
  "level": "1",
  "url": "sec-1-1.html",
  "type": "Section",
  "number": "",
  "title": "<span class=\"process-math\">\\(\\S 1.1\\text{:}\\)<\/span> What Can We Expect",
  "body": " : What Can We Expect  This week we covered the following topics:  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
