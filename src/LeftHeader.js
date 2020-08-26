import React from 'react';
import { Write, IconContainer, IconText } from './App.style';

const LeftHeader = () => {
    return (
        <div style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            height: '88px',
        }}>
            <IconContainer>
                <IconText>W</IconText>
            </IconContainer>
            <Write> Write</Write>
        </div>
    )

}
export default LeftHeader;