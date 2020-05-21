import { checkForURL } from '../js/nameChecker'

test('validate url', () => {
  expect(checkForURL('https://www.udacity.com')).toBe(true);
  expect(checkForURL('sbs319')).toBe(false);
});