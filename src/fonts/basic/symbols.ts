const space = {
  char: ' ',
  matrix: [[0, 0, 0, 0]],
};

const period = {
  char: '.',
  matrix: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
  ],
};

const exclamation = {
  char: '!',
  matrix: [
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 1, 1, 0],
  ],
};

const question = {
  char: '?',
  matrix: [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 1, 1, 0],
  ],
};

const semicolon = {
  char: ';',
  matrix: [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 0],
  ],
};

const colon = {
  char: ':',
  matrix: [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
  ],
};

const at = {
  char: '@',
  matrix: [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 1],
  ],
};

const pound = {
  char: '#',
  matrix: [
    [0, 1, 1, 0],
    [1, 1, 1, 1],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [1, 1, 1, 1],
    [0, 1, 1, 0],
  ],
};

const dollar = {
  char: '$',
  matrix: [
    [0, 1, 0, 0],
    [1, 1, 1, 1],
    [1, 1, 0, 0],
    [1, 1, 1, 1],
    [0, 1, 0, 1],
    [1, 1, 1, 1],
  ],
};

const pct = {
  char: '%',
  matrix: [
    [1, 1, 0, 0],
    [1, 1, 0, 1],
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [1, 0, 1, 1],
    [0, 0, 1, 1],
  ],
};

const chevron = {
  char: '^',
  matrix: [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
};

const amp = {
  char: '&',
  matrix: [
    [0, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 0, 1, 0],
    [1, 1, 0, 1],
    [1, 1, 1, 0],
    [0, 1, 0, 1],
  ],
};

const star = {
  char: '*',
  matrix: [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ],
};

const leftParen = {
  char: '(',
  matrix: [
    [0, 0, 1, 1],
    [0, 1, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 1],
  ],
};

const rightParen = {
  char: ')',
  matrix: [
    [1, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [1, 1, 0, 0],
  ],
};

const leftBrace = {
  char: '[',
  matrix: [
    [1, 1, 1, 1],
    [1, 1, 0, 0],
    [1, 1, 0, 0],
    [1, 1, 0, 0],
    [1, 1, 0, 0],
    [1, 1, 1, 1],
  ],
};

const rightBrace = {
  char: ']',
  matrix: [
    [1, 1, 1, 1],
    [0, 0, 1, 1],
    [0, 0, 1, 1],
    [0, 0, 1, 1],
    [0, 0, 1, 1],
    [1, 1, 1, 1],
  ],
};

const leftBracket = {
  char: '(',
  matrix: [
    [0, 0, 1, 1],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
    [1, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 1],
  ],
};

const rightBracket = {
  char: ')',
  matrix: [
    [1, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [0, 0, 1, 1],
    [0, 0, 1, 0],
    [1, 1, 0, 0],
  ],
};

const quote = {
  char: "'",
  matrix: [
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
};

const doubleQuote = {
  char: '"',
  matrix: [
    [1, 0, 1, 0],
    [1, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
};

const forwardSlash = {
  char: '\\',
  matrix: [
    [0, 0, 0, 0],
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
    [0, 0, 0, 0],
  ],
};

const backSlash = {
  char: '/',
  matrix: [
    [0, 0, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 0, 0],
  ],
};

const pipe = {
  char: '|',
  matrix: [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ],
};

export default {
  notFound: space,
  ' ': space,
  '.': period,
  '!': exclamation,
  '?': question,
  ';': semicolon,
  ':': colon,
  '@': at,
  '#': pound,
  $: dollar,
  '%': pct,
  '^': chevron,
  '&': amp,
  '*': star,
  '(': leftParen,
  ')': rightParen,
  '[': leftBrace,
  ']': rightBrace,
  '{': leftBracket,
  '}': rightBracket,
  "'": quote,
  '"': doubleQuote,
  '\\': forwardSlash,
  '/': backSlash,
  '|': pipe,
};
