import Countdown from 'react-countdown'
import { StatBar } from '../stats/StatBar'
import { Histogram } from '../stats/Histogram'
import { GameStats } from '../../lib/localStorage'
import { shareStatus } from '../../lib/share'
import { solution, tomorrow } from '../../lib/words'
import { BaseModal } from './BaseModal'
import {
  STATISTICS_TITLE,
  GUESS_DISTRIBUTION_TEXT,
  NEW_WORD_TEXT,
  SHARE_TEXT,
  WIN_MESSAGES,
  CORRECT_WORD_MESSAGE,
} from '../../constants/strings'
import { BookOpenIcon, ShareIcon } from '@heroicons/react/outline'

type Props = {
  isOpen: boolean
  handleClose: () => void
  guesses: string[]
  gameStats: GameStats
  isGameLost: boolean
  isGameWon: boolean
  handleShare: () => void
}

function openDictionary() {
  window.open(`http://udb.gov.pk/result.php?search=${solution}`)
}

export const StatsModal = ({
  isOpen,
  handleClose,
  guesses,
  gameStats,
  isGameLost,
  isGameWon,
  handleShare,
}: Props) => {
  function getWinMessage(): string {
    return isGameWon
      ? WIN_MESSAGES[guesses.length]
      : CORRECT_WORD_MESSAGE(solution)
  }

  if (gameStats.totalGames <= 0) {
    return (
      <BaseModal
        title={STATISTICS_TITLE}
        isOpen={isOpen}
        handleClose={handleClose}
      >
        <StatBar gameStats={gameStats} />
      </BaseModal>
    )
  }
  return (
    <BaseModal
      title={STATISTICS_TITLE}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <StatBar gameStats={gameStats} />
      <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
        {GUESS_DISTRIBUTION_TEXT}
      </h4>
      <Histogram gameStats={gameStats} />
      {(isGameLost || isGameWon) && (
        <div className="mt-3  sm:mt-5 dark:text-white">
          <h1 className="text-lg">{getWinMessage()}</h1>
          <div className="text-xs mb-2 text-gray-400 dark:text-gray-100">
            {NEW_WORD_TEXT}{' '}
            <Countdown
              className="text-xs font-mono"
              date={tomorrow}
              daysInHours={true}
            />
          </div>
          <button
            type="button"
            className="inline-flex mb-2 justify-center w-full mb-2 rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            onClick={() => {
              shareStatus(guesses, isGameLost)
              handleShare()
            }}
          >
            <ShareIcon className="h-6 w-6 right-4 cursor-pointer mx-2" />
            {SHARE_TEXT}
          </button>
          <button
            type="button"
            className="flex my-1 mx-auto justify-center rounded-md border-gray-500 border 
             px-2 py-2 text-sm text-gray-500 font-normal"
            onClick={() => {
              openDictionary()
            }}
          >
            <BookOpenIcon className="h-5 w-5 ml-1" />
            {solution} کا مطلب دیکھیں
          </button>
        </div>
      )}
    </BaseModal>
  )
}
