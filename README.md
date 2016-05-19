# wh-questions

This module allows you to count the number of [wh-questions]((https://en.wikipedia.org/wiki/Question#wh)) in a given string (text) or array. Here, it specifically count for the key words: (what || where || how || why || who || when).

## Installation
```
  > npm install wh-questions
```
## Usage

```js
import count from 'wh-questions'

console.log(count('how what and where') ); // 3
console.log(count(['how', 'How', 'what', 'where']) ); // 4

```
## spec
No api to mess with. Feed what's intended (string or array) and get your expected output (number).

Please note the counting fails if the wh-question is right next to a punctuation. (example: "what,")

> No dependencies. few lines of codes.

## Related
- [check-question npm package](https://github.com/mohamedhayibor/check-question)
- [check-question-site](http://mohamedhayibor.github.io/check-question-site/)

## License
MIT © [Mohamed Hayibor](https://github.com/mohamedhayibor)
