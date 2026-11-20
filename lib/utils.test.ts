import { cn, isValidEmail, truncate, capitalize } from './utils';

describe('Lumeli utility functions', () => {
  it('merges Tailwind utility classes without duplicates', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4');
  });
  it('validates a normal email address', () => {
    expect(isValidEmail('hello@example.com')).toBe(true);
    expect(isValidEmail('not-an-email')).toBe(false);
  });
  it('truncates only when over the limit', () => {
    expect(truncate('abc', 5)).toBe('abc');
    expect(truncate('abcdef', 3)).toBe('abc...');
  });
  it('capitalizes the first character', () => {
    expect(capitalize('lumeli')).toBe('Lumeli');
  });
});
