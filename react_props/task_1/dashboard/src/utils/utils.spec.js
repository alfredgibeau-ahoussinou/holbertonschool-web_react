import { getCurrentYear, getFooterCopy, getLatestNotification } from './utils';

describe('utils', () => {
  describe('getCurrentYear', () => {
    test('returns the current year', () => {
      const currentYear = new Date().getFullYear();
      expect(getCurrentYear()).toBe(currentYear);
    });
  });

  describe('getFooterCopy', () => {
    test('returns correct string when argument is true', () => {
      expect(getFooterCopy(true)).toBe('Holberton School');
    });

    test('returns correct string when argument is false', () => {
      expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });
  });

  describe('getLatestNotification', () => {
    test('returns the correct notification string', () => {
      const expected = '<strong>Urgent requirement</strong> - complete by EOD';
      expect(getLatestNotification()).toBe(expected);
    });
  });
});
