import { Configuration, FindPetsByStatusStatusEnum, Pet, PetApi } from './api';
import { useEffect, useState } from 'react';

const conf = new Configuration({
    basePath: 'https://petstore.swagger.io/v2',
    apiKey: 'special-key'
})

const petApi = new PetApi(conf)

function App() {
    const [availablePets, setAvailablePets] = useState<Pet[]>([])

    useEffect(() => {
        petApi.findPetsByStatus({status: [FindPetsByStatusStatusEnum.Sold]}).then((pets) => {
            setAvailablePets(pets)
        })
    }, [])
    return <ul>
      {availablePets.map(pet => <li>{pet.name}</li>)}
    </ul>
}

export default App
