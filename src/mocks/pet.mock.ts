import { faker } from '@faker-js/faker';
import { Pet, PetStatusEnum } from '../api';

const orUndefined = <T>(value: T): T | undefined => faker.helpers.arrayElement([undefined, value])

export const createPet = (): Pet => ({
    id: orUndefined(faker.number.int()),
    category: orUndefined({
        id: orUndefined(faker.number.int()),
        name: orUndefined(faker.company.buzzNoun())
    }),
    name: faker.animal.type(),
    photoUrls: [faker.image.url()],
    tags: orUndefined([{
        id: orUndefined(faker.number.int()),
        name: orUndefined(faker.company.buzzNoun())
    }]),
    status: faker.helpers.arrayElement([PetStatusEnum.Sold, PetStatusEnum.Available, PetStatusEnum.Pending])
})
