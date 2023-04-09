import {$authHost} from "./index";

export const fetchQuestions = async () => {
    const {data} = await $authHost.get('api/questions')
    return data
}

export const qChange = async (id, status) => {
  const {data} = await $authHost.post('api/questions/changeQuestion', {status, id})
  return data
}

export const createQ = async (fname, text, email) => {
  const {data} = await $authHost.post('api/questions', {fname: fname, text: text, email: email })
  return data
}



