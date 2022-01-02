import StatusCodes           from 'http-status-codes';
import { Request, Response } from 'express';
import { paramMissingError } from '@shared/constants';
import { IName }             from '@entities/Name';
import NameDao               from '@daos/Name/NameDao';

const nameDao                      = new NameDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

export class NamesController {

    /**
     * Get all names.
     * 
     * @param req 
     * @param res 
     * @returns 
     */
    async getAll(req: Request, res: Response) {
        const names = await nameDao.getAll();
        return res.status(OK).json({ names });
    }

    /**
     * Add one name.
     * 
     * @param req 
     * @param res 
     * @returns 
     */
    async addOne(req: Request, res: Response) {
        const { name } = req.body as { name: IName };
        if (!name) {
            return res.status(BAD_REQUEST).json({
                error: paramMissingError,
            });
        }
        await nameDao.add(name);
        return res.status(CREATED).end();
    }

    /**
     * Update one name.
     * 
     * @param req 
     * @param res 
     * @returns 
     */
    async updateOne(req: Request, res: Response) {
        const { name } = req.body as { name: IName };
        if (!name) {
            return res.status(BAD_REQUEST).json({
                error: paramMissingError,
            });
        }
        name.id = Number(name.id);
        await nameDao.update(name);
        return res.status(OK).end();
    }

    /**
     * Delete one name.
     * 
     * @param req 
     * @param res 
     * @returns 
     */
    async deleteOne(req: Request, res: Response) {
        const { id } = req.params;
        await nameDao.delete(Number(id));
        return res.status(OK).end();
    }

}