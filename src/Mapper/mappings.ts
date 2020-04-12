import {IMapping} from './IMapping'
import {EArabicNumber} from '../Enums/EArabicNumber'
import {ERomanNumber} from '../Enums/ERomanNumber'

export const Mappings: IMapping[] = [
    { arabic: EArabicNumber.ONE_THOUSAND, roman: ERomanNumber.ONE_THOUSAND },
    { arabic: EArabicNumber.NINE_HUNDRED, roman: ERomanNumber.NINE_HUNDRED },
    { arabic: EArabicNumber.FIVE_HUNDRED, roman: ERomanNumber.FIVE_HUNDRED },
    { arabic: EArabicNumber.FOUR_HUNDRED, roman: ERomanNumber.FOUR_HUNDRED },
    { arabic: EArabicNumber.ONE_HUNDRED, roman: ERomanNumber.ONE_HUNDRED },
    { arabic: EArabicNumber.NINETY, roman: ERomanNumber.NINETY },
    { arabic: EArabicNumber.FIFTY, roman: ERomanNumber.FIFTY },
    { arabic: EArabicNumber.FOURTY, roman: ERomanNumber.FOURTY },
    { arabic: EArabicNumber.TEN, roman: ERomanNumber.TEN },
    { arabic: EArabicNumber.NINE, roman: ERomanNumber.NINE },
    { arabic: EArabicNumber.FIVE, roman: ERomanNumber.FIVE },
    { arabic: EArabicNumber.FOUR, roman: ERomanNumber.FOUR },
    { arabic: EArabicNumber.ONE, roman: ERomanNumber.ONE}
  ]