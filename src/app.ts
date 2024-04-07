import generateDistinctColors from 'generate_distinct_colors';

import generatePng from './generatePng.js';

const app = async (word: string): Promise<void> => {
  const colors = await generateDistinctColors(word.length);

  const pngArr = [];
  for (let i = 0; i < word.length; i++) {
    pngArr.push(generatePng(word[i], i, word.length, colors[i]));
  }
};

app('Hello').catch(err => {
  console.error(err);
});
