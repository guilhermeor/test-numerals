import { ENumerals } from '../Enums/ENumerals'
import { EArabicNumber } from '../Enums/EArabicNumber'
import { Mappings } from './mappings'
import * as Utils from '../Utils/utils'

export class mapperNumeral {
    private readonly type: ENumerals
    private readonly numeral: string
    private readonly chooseConverse = {
        [ENumerals.Arabic]: this.toRoman,
        [ENumerals.Roman]: this.toArabic
    }

    constructor(numeral: string) {
        this.type = Utils.isInt(numeral) ? ENumerals.Arabic : ENumerals.Roman
        this.numeral = numeral
    }

    public convert() {
        if (!this.IsValid(this.numeral))
            return { message: "Invalid numeral", success: false }
        return this.chooseConverse[this.type](this.numeral)
    }

    private IsValid(numeral: any) {
        return this.type == ENumerals.Arabic ?
            numeral < EArabicNumber.MAX && numeral > EArabicNumber.MIN : Utils.regexRomanNumeral(numeral)
    }

    private toRoman(arabicNumeral: string) {
        let arabicNumeralTemp = Number(arabicNumeral)
        let result = ''
        Mappings.forEach((mapping) => {
            while (arabicNumeralTemp >= mapping.arabic) {
                result += mapping.roman;
                arabicNumeralTemp -= mapping.arabic;
            }
        });
        return { message: result, success: true }
    }

    private toArabic(romanNumeral: string) {
        let result = 0
        while (romanNumeral.length) {
            Mappings.forEach((mapping) => {
                while (romanNumeral.startsWith(mapping.roman)) {
                    const substr = romanNumeral.slice(mapping.roman.length, romanNumeral.length)
                    result += mapping.arabic
                    romanNumeral = substr
                }
            })
        }
        return { message: result, success: true }
    }
} 