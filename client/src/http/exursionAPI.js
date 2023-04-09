import {$authHost, $host} from "./index";


export const createExursion = async (Exursion) => {
    const {data} = await $authHost.post('api/exursion', Exursion)
    return data
}

export const fetchExursioncityId = async (cityId) => {
    const {data} = await $authHost.get(`api/exursion/${cityId}`)
    return data
}

export const fetchExursionId = async (id) => {
    const {data} = await $authHost.get(`api/exursion/exid/${id}`)
    return data
}

export const deleteExursion = async (id) => {
    await $authHost.delete(`api/exursion/${id}`)
}
