import books from './books.json';
var classNames = new Set();

for(let i=0; i<books.length; i++){
  var words = books[i].course.split(" ");
  classNames.add(words[0])
}

var classArr = [...classNames];

export default classArr;


