import React, { createContext, useReducer, useRef } from 'react';
import { fromJS } from 'immutable';

//context;
export const CategoryDataContext = createContext({});

export const CHANGE_CATEGORY = 'singers/CHANGE_CATEGORY';
export const CHANGE_ALPHA = 'singers/CHANGE_ALPHA';

//reducer纯函数
const reducer = (state, action) => {
    switch (action.type) {
        case CHANGE_CATEGORY:
            return state.set('category', action.data);
        case CHANGE_ALPHA:
            return state.set('alpha', action.data);
        default:
            return state;
    }
};

export const Data = props => {
    const [data, dispatch] = useReducer(reducer, fromJS({
        category:'',
        alpha:''
    }));
    return (
        <CategoryDataContext.Provider value={{data,dispatch}}>
            {props.children}
        </CategoryDataContext.Provider>
    )
}