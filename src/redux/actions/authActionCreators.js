import * as constants from '../constants'


/** 
 * loginUser
 * @param {*} data
 * @param {*} onSuccess
 * @param {*} onError
*/ 

export const loginUser = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: '/login',
        data,
        success: (response) => (setUserInfo(response)),
        postProcessSuccess: onSuccess,
        postProcessError: onError
    }
    
})

const setUserInfo = (data) => {
    console.log("DATA:", data)
    const userInfo = {
        userId: data.id,
        name: data.name,
        isAdmin: data.isAdmin,
        token: data.token,
        isLoggedIn: true
    };
    console.log("USER_INFO:", userInfo)
    localStorage.setItem('USER_INFO', JSON.stringify(userInfo));
    return { type: constants.SET_USER_INFO, payload: userInfo }
} 

export const logoutUser = () => {
    localStorage.removeItem('USER_INFO');
    const action = { type: constants.RESET_USER_INFO};
    return action;
}