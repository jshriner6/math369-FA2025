var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "lab-1",
  "level": "1",
  "url": "lab-1.html",
  "type": "Worksheet",
  "number": "",
  "title": "Lab 1: Systems of Equations",
  "body": " Lab 1: Systems of Equations   You have traded your cow for 5 magic chocolate covered espresso beans. Each night at midnight, each bean splits into three beans. To take advantage of this, you eat 8 beans each morning for breakfast. You wonder how many beans you will have after breakfast 30 days after you traded your cow.  Let be the sequence of number of beans you have days after trading your cow, (after breakfast, before midnight; take ).      Write out the first few terms of the sequence. Then give a recursive definition for the sequence and explain how you know it is correct.      What do you notice about all elements of the sequence? Will they all be ...? Prove your conjecture by mathematical induction.        Find a closed formula for and prove it is correct using induction.     "
},
{
  "id": "lab-1-3-1",
  "level": "2",
  "url": "lab-1.html#lab-1-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Write out the first few terms of the sequence. Then give a recursive definition for the sequence and explain how you know it is correct.   "
},
{
  "id": "lab-1-3-2",
  "level": "2",
  "url": "lab-1.html#lab-1-3-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  What do you notice about all elements of the sequence? Will they all be ...? Prove your conjecture by mathematical induction.   "
},
{
  "id": "lab-1-4-1",
  "level": "2",
  "url": "lab-1.html#lab-1-4-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Find a closed formula for and prove it is correct using induction.   "
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
