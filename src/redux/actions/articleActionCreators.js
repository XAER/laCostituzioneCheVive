import * as constants from '../constants'

export const getArticles = (token, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: '/articles',
        headers: {
            'x-access-token': token
        },
        success: (response) =>{
            setArticles(response)
        }
    }
})

const setArticles = (data) => {
    console.log("ARTICLES:", data)
    const articles = data
    return { type: constants.GET_ARTICLES, payload: articles }
}