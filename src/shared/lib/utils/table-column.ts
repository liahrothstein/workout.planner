export class TableColumn {
    public title;
    public dataIndex;
    public key;

    constructor(title: string, dataIndex: string, key: string) {
        this.title = title;
        this.dataIndex = dataIndex;
        this.key = key;
    }
}