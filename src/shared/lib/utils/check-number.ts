export function checkNumber(number: number | null | 'max'): string {
    if (number === null) {
        return ('⎯')
    } else {
        return (`${number}`)
    }
}