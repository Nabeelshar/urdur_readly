import { TRANSLITERATED, WORDS } from '../constants/wordlist'
import { VALIDGUESSES } from '../constants/validGuesses'
import { EXTRAS } from '../constants/extras'

export const isWordInWordList = (word: string) => {
  return (
    WORDS.includes(word.toLowerCase()) ||
    VALIDGUESSES.includes(word.toLowerCase()) ||
    EXTRAS.includes(word.toLowerCase()) ||
    TRANSLITERATED.includes(word.toLowerCase())
  )
}

export const isWinningWord = (word: string) => {
  return solution === word
}

export const getWordOfDay = () => {
  // January 12, 2022 Game Epoch
  const epochMs = 1641945600000
  const now = Date.now()
  const msInDay = 86400000
  const index =
    localStorage.getItem('i') != null
      ? parseInt('' + localStorage.getItem('i'))
      : Math.floor((now - epochMs) / msInDay)
  const nextday = (index + 1) * msInDay + epochMs

  return {
    solution: WORDS[index],
    solutionIndex: index,
    tomorrow: nextday,
  }
}

export const { solution, solutionIndex, tomorrow } = getWordOfDay()
