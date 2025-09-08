export class Attempt {
    public number;
    public times;
    public weight;

    private checkNumberTimes(number: number | null): number | null | 'max' {
        if ((number === 0) || (number === null)) {
            return (null)
        } else {
            if (number === 100) {
                return ('max')
            } else {
                return (number)
            }
        }
    };

    private checkNumberWeight(number: number | null): number | null {
        if (number) {
            return (number)
        } else {
            return (null)
        }
    };

    constructor(number: number, times: number | null, weight: number | null) {
        this.number = number;
        this.times = this.checkNumberTimes(times);
        this.weight = this.checkNumberWeight(weight);
    };
}