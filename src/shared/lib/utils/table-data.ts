export class TableData {
    public key;
    public attempts;
    public times;
    public weight;

    constructor(key: string, attempts: string, times: string, weight?: string) {
        this.key = key;
        this.attempts = attempts;
        this.times = times;
        this.weight = weight;
    }
}