const LinkedList = require('./linked-list.js')

function main() {
  const items = [
    'Apollo',
    'Boomer',
    'Helo',
    'Husker',
    'Starbuck',
  ]
  let SLL = new LinkedList
  for (let i = 0; i < items.length; i++) {
    SLL.insertLast(items[i])
  }
  return SLL
}

module.exports = {
  main,
}