import {$authHost} from "./index";

export const fetchCalls = async () => {
    const {data} = await $authHost.get('api/calls')
    return data
}

export const createCall = async (phone) => {
    const {data} = await $authHost.post('api/calls', {phone: phone})
    return data
}



