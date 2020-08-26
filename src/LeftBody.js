import React from 'react';
import { BodyTxt, BodyTxt1, SignUpTxt, SignUpButton, ArrowImg } from './App.style';
import Arrow from './image/Arrow.png';

const LeftBody = () => {

    
    return (
        <div>
            <BodyTxt>Write...</BodyTxt>
            <div style={{ marginTop: 27, marginBottom: 104 }}>
                <BodyTxt1>Your mind and earn as people read your mind</BodyTxt1>
            </div>
            <SignUpButton>
                <SignUpTxt>Sign up</SignUpTxt>
                <ArrowImg src={Arrow} />
            </SignUpButton>
        </div>
    )
}
export default LeftBody;