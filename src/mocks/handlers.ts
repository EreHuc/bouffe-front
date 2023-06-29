import { rest } from 'msw';
import { createPet } from './pet.mock.ts';

const uri = 'https://petstore.swagger.io/v2'

export const handlers = [
    // Handles a POST /login request
    rest.get(`${uri}/pet/findByStatus`, (_, res, ctx) =>
        res(ctx.json(Array.from({length: 30}).map(createPet))))
]
