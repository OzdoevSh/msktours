import {$authHost} from "./index";

export const createOrder = async (Order) => {
    const {data} = await $authHost.post('api/order', Order)
    return data
}

export const fetchOrder = async () => {
    const {data} = await $authHost.get('api/order')
    return data
}

export const deleteOrder = async (id) => {
    await $authHost.delete('api/order',{
        params: {
            id
        }
    })

}

export const fetchMyOrder = async (userId) => {
    const {data} = await $authHost.get('api/order/oneIdorder',{params: {
            userId
        }
    })
    return data
}




