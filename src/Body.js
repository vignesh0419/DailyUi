import React from 'react';
import { BodyImg } from './App.style';
import Img from './image/image.svg';
import LeftBody from './LeftBody';


const Body = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '85%', alignItems: 'center' }}>
                <LeftBody />
                <div>
                    <BodyImg src={Img} />
                </div>
            </div>
        </div>

    )
}
export default Body;