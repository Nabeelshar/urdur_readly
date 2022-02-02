import { getGuessStatuses } from './statuses'
import { solution, solutionIndex } from './words'
import { MAX_GUESSES } from '../constants/wordlist'

export const shareStatus = (guesses: string[], lost: boolean) => {
  const copiedData =
    'Urdle (' +
    solutionIndex +
    ') اُردل' +
    (guesses[guesses.length - 1] === solution
      ? '\n        ' + (guesses.length + '/' + MAX_GUESSES)
      : '') +
    ' \n' +
    generateEmojiGrid(guesses) +
    '\n\nhttps://urdle.chaoticity.com'
  if (
    navigator.userAgent.toLowerCase().indexOf('firefox') < 0 &&
    /Mobi/.test(navigator.userAgent) &&
    navigator.share &&
    navigator.canShare({ text: copiedData })
  ) {
    navigator.share({ text: copiedData })
  } else {
    navigator.clipboard.writeText(copiedData)
  }
}

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess).reverse()
      return guess
        .split('')
        .reverse()
        .map((letter, i) => {
          switch (status[i]) {
            case 'correct':
              return '🟦'
            case 'present':
              return '🟧'
            default:
              return '⬛'
          }
        })
        .join('')
    })
    .join('\n')
}
