export interface IName {
    id  : number;
    name: string;
}

class Name implements IName {

    public id  : number;
    public name: string;

    constructor(nameOrName: string | IName, id?: number) {
        if (typeof nameOrName === 'string') {
            this.name = nameOrName;
            this.id   = id || -1;
        } else {
            this.name = nameOrName.name;
            this.id   = nameOrName.id;
        }
    }
}

export default Name;
