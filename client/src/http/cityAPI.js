import {$authHost, $host} from "./index";


export const createCity = async (City) => {
    const {data} = await $authHost.post('api/city', City)

    return data
}

export const fetchCity = async () => {
    const {data} = await $host.get('api/city',)
    return data
}

export const deleteExursion = async (id) => {
    await $authHost.delete('api/city', {params: {
            id
        }})
}


