import React, { useRef, memo, useEffect } from 'react';
import Scroll from '../scroll/index';
import { PropTypes } from 'prop-types';
import { List, ListItem} from './style';

function Horizen (props) {

    const { list, oldVal, title } = props;
    const { handleClick } = props;

    const Category = useRef(null);

    //加入初始化内容宽度的逻辑
    useEffect(()=> {
        let categoryDOM =  Category.current;
        let tagElems = categoryDOM.querySelectorAll('span');
        let totalWidth = 0;
        Array.from(tagElems).forEach(ele => {
            totalWidth+= ele.offsetWidth;
        })
        categoryDOM.style.width = `${totalWidth}px`
    })

    return (
        <Scroll direction={"horizental"}>
            <div ref={Category}>
                <List>
                    <span>{title}</span>
                    {
                        list.map((item) => {
                            return (
                                <ListItem
                                  key={item.key}
                                  className={`${oldVal === item.key ? 'selected':''}`}
                                  onClick = {() => handleClick(item.key)}
                                >
                                    {item.name}
                                </ListItem>
                            )
                        })
                    }
                </List>
            </div>
        </Scroll>
    )
}

//首先考虑接受的参数
Horizen.defaultProps = {
    list:[],
    oldVal:'',
    title:'',
    handleClick:null
};

Horizen.propTypes = {
    list:PropTypes.array,
    oldVal:PropTypes.string,
    title:PropTypes.string,
    handleClick:PropTypes.func
};

export default memo(Horizen)