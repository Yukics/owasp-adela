// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { checkUsername } from '../../lib/database';

interface Data {
    success: boolean,
    id: number,
    username: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const userId = checkUsername(req.body.username, req.body.password);

    switch(req.method){
        case 'POST':
            if (userId !== 0) {
                res.status(200).json({ success: true, id: userId, username: req.body.username })
            } else {
                res.status(200).json({ success: false, id: userId, username: req.body.username })
            }
            break;
    }
}