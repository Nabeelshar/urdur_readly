import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal
      title="کھیلنے کا طریقہ"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p className="text-sm text-gray-500 dark:text-gray-300">
        لفظ 6 باریوں میں بوجھیں۔ ہر باری کے بعد حروف کا رنگ یہ بتائے گا کہ آپ کا
        اندازہ کتنا صحیح تھا۔
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ا" status="correct" />
        <Cell value="ر" />
        <Cell value="د" />
        <Cell value="و" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        <b className="text-rose-600">ا</b> لفظ میں اپنی جگہ پر ہے
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="د" />
        <Cell value="۱" />
        <Cell value="ر" status="present" />
        <Cell value="و" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        <b className="text-rose-600">ر</b> لفظ میں ہے لیکن اس جگہ پر نہیں
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="م" />
        <Cell value="ن" />
        <Cell value="گ" />
        <Cell value="ل" status="absent" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        <b className="text-rose-600">ل</b> لفظ میں کہیں نہیں ہے
      </p>
      <div className="mt-2 text-center pt-4">
        <p className="text-sm text-gray-500">
          اس گیم کا{' '}
          <a
            href="https://github.com/awaisathar/word-guessing-game"
            className="underline font-bold"
          >
            اوپن سورس کوڈ
          </a>{' '}
          ایک{' '}
          <a
            href="https://github.com/hannahcode/word-guessing-game"
            className="underline font-bold"
          >
            انگریزی ورژن
          </a>{' '}
          سے اخذ شدہ ہے۔
        </p>
      </div>
    </BaseModal>
  )
}
