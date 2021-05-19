import test from 'ava'
import math from '../dist/batr-example.esm.mjs'

test('addition a + b', (t) => {
  const expected = 31
  const addition = math.add(7, 24)
  t.deepEqual(addition, expected)
})

test('subtraction a - b', (t) => {
  const expected = -17
  const subtraction = math.subtract(7, 24)
  t.deepEqual(subtraction, expected)
})

test('multiplication a * b', (t) => {
  const expected = 168
  const multiplication = math.multiply(7, 24)
  t.deepEqual(multiplication, expected)
})

test('division a * b', (t) => {
  const expected = 0.2916666666666667
  const division = math.divide(7, 24)
  t.deepEqual(division, expected)
})
