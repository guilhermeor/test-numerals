const regexpRoman = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/
export const regexRomanNumeral = (numeral: string) => regexpRoman.test(numeral)

export function isInt(n: any) {
    let parse = Number(n);
    return parse == n && parse % 1 === 0;
}