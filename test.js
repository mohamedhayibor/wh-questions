import test from 'ava';
import question from './';

test('count the right number of wh-questions', t => {
  let three = question('how what and where');
  let four = question(['how', 'How', 'what', 'where']);

  t.is(three, 3)
  t.is(four, 4)
})

test('should ignore non wh-questions', t => {
  let three = question('how what and where were we getting together');
  let four = question(['how', 'How', 'what', 'where', 'tech', 'riding']);

  t.is(three, 3)
  t.is(four, 4)
})

test('should return 0 if there are no wh-question in the string or array', t => {
  let three = question('whatever sentence will not have wh-question');
  let four = question(['riding', 'life', 'alchemist', 'code', 'death']);

  t.is(three, 0)
  t.is(four, 0)
})

// no need to test for empty strings or arrays as it automatically throws errors.
