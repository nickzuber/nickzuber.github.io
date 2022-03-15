const Colors = [
  '#51cf66',
  '#fcc419',
  '#ff922b',
  '#22b8cf',
  '#339af0',
  '#9775fa',
  '#cc5de8',
  '#f06595',
  '#ff6b6b',
  '#20c997',
];

export function* makeColorPicker () {
  let i = 0;
  while (true) {
    yield Colors[i++ % Colors.length]
  }
}
