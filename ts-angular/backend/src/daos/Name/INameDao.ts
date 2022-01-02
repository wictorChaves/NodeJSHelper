import { IName } from '@entities/Name';

export interface INameDao {
    getOne: (id: number) => Promise<IName | null>;
    getAll: () => Promise<IName[]>;
    add   : (Name: IName) => Promise<void>;
    update: (Name: IName) => Promise<void>;
    delete: (id: number) => Promise<void>;
}