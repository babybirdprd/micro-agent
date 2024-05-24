import { expect, test } from 'vitest';
import { simplify } from './simplify';

test('simplifies the ternary correctly', () => {
  expect(
    simplify(`
    type === 'Default' && status === 'Default'
  ? '71px'
  : type === 'With Icon' && status === 'Default'
  ? '79px'
  : type === 'With Icon' && status === 'Neutral'
  ? '79px'
  : type === 'With Icon' && status === 'Active'
  ? '79px'
  : type === 'With Icon' && status === 'Alert'
  ? '79px'
  : type === 'With Icon' && status === 'Caution'
  ? '79px'
  : type === 'Default' && status === 'Neutral'
  ? '71px'
  : type === 'Default' && status === 'Active'
  ? '71px'
  : type === 'Default' && status === 'Alert'
  ? '71px'
  : '71px'
  `)
  ).toBe(`type === 'With Icon' ? '79px' : '71px'`);
});