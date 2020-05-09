import React,{useEffect, useState} from 'react';
import { renderRoutes } from 'react-router-config';
import { 
      Top,
      Tab,
      TabItem, 
    } from './style';
import { NavLink } from 'react-router-dom';//利用NavLink组件进行路由跳转

function Home (props) {
    const { route } = props;
    // const [ idx, setIndex ] = useState(1);
    // useEffect(()=>{
    //     setTimeout(() => {
    //         console.log(idx)
    //         setIndex(5);
    //         console.log(idx)
    //     }, 1000);
    // })
    return (
       <div>
            <Top>
                <span className="iconfont menu">&#xe65c;</span>
                <span className="title">WebApp</span>
                <span className="iconfont search">&#xe62b;</span>
            </Top>
            <Tab>
                <NavLink to="/recommend" activeClassName="selected">
                    <TabItem><span> 推荐</span></TabItem>
                </NavLink>
                <NavLink to="/singers" activeClassName="selected">
                    <TabItem><span> 歌手</span></TabItem>
                </NavLink>
                <NavLink to="/rank" activeClassName="selected">
                    <TabItem><span> 排行榜</span></TabItem>
                </NavLink>
                <NavLink to="/usercenter" activeClassName="selected">
                    <TabItem><span> 个人中心</span></TabItem>
                </NavLink>
            </Tab>
            { renderRoutes(route.routes) }
       </div>
    )
}

export default React.memo(Home)