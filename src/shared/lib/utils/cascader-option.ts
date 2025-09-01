export class CascaderOption {
    public value;
    public label;
    public children;

    constructor(value: string, label: string, children?: CascaderOption[]) {
        this.value = value;
        this.label = label;
        this.children = children;
    }
}