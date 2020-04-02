import {isDataLoad} from './app-reduser.ts';
import {LogInUserApi, RegisterNewUserApi} from '../api'



const SET_LOG_IN = 'auth/SET_LOG_IN';
const IS_LOG_IN = 'auth/IS_LOG_IN';
const SET_LOG_OUT = 'auth/SET_LOG_OUT';
const SET_ME = 'auth/SET_ME';
const IS_ERROR_LOGIN = 'auth/IS_ERROR_LOGIN';


const initState = {
        isLogIn:false,
        user:{},
        isErr: false,
};

const authReduser = (state = initState, action) => {
    
    switch (action.type) {
        case SET_LOG_IN:
            return {
                ...state,
                ...state.user,
                isLogIn: true,
                user: action.user.user
            };
        case IS_LOG_IN:
            return {
                ...state,
                ...state.user,
                isLogIn: true,
                user: action.user
                
            };
        case SET_LOG_OUT:
            return {
                ...state,
                ...state.user,
                isLogIn: false,
                user:{}
            };
        case SET_ME:
            return {
                ...state,
                isLogIn: true,
            };
        case IS_ERROR_LOGIN:
            return {
                ...state,
                ...state.user,
                isErr: true,
                isLogIn: false,
                user:{},

            };
        
        
        default:
            return state;
    }



};

export const setLogin = (user) => ({
    type: SET_LOG_IN,
    user
})
export const setIsLogIn = (user) => ({
    type: IS_LOG_IN,
    user
})
export const setLogOut = () => ({
    type: SET_LOG_OUT
})
export const setMe = () => ({
    type: SET_ME
})


export const loginUser =  (xuser) => {

    return async (dispatch) => {
        let myUser = {user:xuser}
       
        dispatch(isDataLoad(false));
        try{
        
        let dataUser = await LogInUserApi(myUser);
        localStorage.setItem('token', dataUser.user.token);
        localStorage.setItem('email', dataUser.user.email);
        
        dispatch(setLogin(dataUser));
        dispatch(isDataLoad(true));
        
        }catch(err){
            console.log('errrr login Auth')
        }
    }
}
export const registerNewUser =  (newUser) => {

    return async (dispatch) => {
        let myUser = {user:newUser}
       
        dispatch(isDataLoad(false));
        try{
        
        let dataUser = await RegisterNewUserApi(myUser);
        console.log(dataUser);
        dispatch(setLogin(dataUser));
        dispatch(isDataLoad(true));
        
        }catch(err){
            console.log('errrr register Auth')
        }
    }
}
export const logOutUser=  () => {

    return  (dispatch) => {
        localStorage.clear()
        dispatch(setLogOut()); 

    }
}


export default authReduser