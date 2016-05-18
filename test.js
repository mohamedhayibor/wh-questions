import test from 'ava';
import question from './';

test('count the right number of wh-questions', t => {
  let three = question('how what and where');
  let four = question(['how', 'How', 'what', 'where']);

  t.is(three, 3)
  t.is(four, 4)
})
