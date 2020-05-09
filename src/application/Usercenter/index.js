import React,{ Component,useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { changeUsercenterObj } from './store/index';

function Usercenter (props){
    console.log(props)
    const { userCenterObj } = props;
    const { getUserDataDispatch } = props;
    
    useEffect(()=>{
        // console.log(getUserDataDispatch)
    })

    const dianji = (time)=>{
        getUserDataDispatch(time)
    }

    return (
        <div>
            <h1>这里是会员中心</h1>
            <h2>{userCenterObj.name}</h2>
            <h2>{userCenterObj.age}</h2>
            <img src={userCenterObj.avatar} />
            <button onClick={() => {dianji(new Date().getTime())}}>刁难我</button>
        </div>
    )
}

const mapStateToProps = (state) =>({
    userCenterObj:state.getIn(['userCenter'])
})

const mapDispatchToProps = (dispatch) =>{
    return {
        getUserDataDispatch(data){
            dispatch(changeUsercenterObj({age:data}))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Usercenter))