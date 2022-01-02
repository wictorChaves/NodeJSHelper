import { IName }        from '@entities/Name';
import { getRandomInt } from '@shared/functions';
import MockDaoMock      from '../MockDb/MockDao.mock';
import { INameDao }     from './INameDao';

class NameDao extends MockDaoMock implements INameDao {

    public async getOne(id: number): Promise<IName | null> {
        const db = await super.openDb();
        for (const name of db.names) {
            if (name.id === id) {
                return name;
            }
        }
        return null;
    }


    public async getAll(): Promise<IName[]> {
        const db = await super.openDb();
        return db.names;
    }


    public async add(name: IName): Promise<void> {
        const db      = await super.openDb();
              name.id = getRandomInt();
        db.names.push(name);
        await super.saveDb(db);
    }


    public async update(name: IName): Promise<void> {
        const db = await super.openDb();
        for (let i = 0; i < db.names.length; i++) {
            if (db.names[i].id === name.id) {
                db.names[i] = name;
                await super.saveDb(db);
                return;
            }
        }
        throw new Error('Name not found');
    }


    public async delete(id: number): Promise<void> {
        const db = await super.openDb();
        for (let i = 0; i < db.names.length; i++) {
            if (db.names[i].id === id) {
                db.names.splice(i, 1);
                await super.saveDb(db);
                return;
            }
        }
        throw new Error('Name not found');
    }
}

export default NameDao;