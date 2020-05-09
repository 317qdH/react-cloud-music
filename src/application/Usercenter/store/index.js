import { fromJS } from 'immutable';

export const CHANGE_USERCENTER_List = 'usercenter/CHANGE_USERCENTER_List';

export const defaultUserObj = {
    name:'张三',
    age:'18',
    avatar:'https://style.912688.com/_resources/index_v2/images/super/super-7.jpg'
}

export const changeUsercenterObj = (data) =>({
    type:CHANGE_USERCENTER_List,
    data
})

export const getUserList = (data)=>{
    return dispatch => {
        dispatch(changeUsercenterObj({age:data}))
    }
}

const reducer = (state = defaultUserObj,action) => {
    switch(action.type){
        case CHANGE_USERCENTER_List:
            return {...state,...action.data}
        default:
            return state
    }
}

export { reducer }