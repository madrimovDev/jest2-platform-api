import {} from 'express'
import { Payload } from '../../src/models/payload.model';

declare global {
    namespace Express {
        interface Request {
            payload: Payload
        }
    }
}