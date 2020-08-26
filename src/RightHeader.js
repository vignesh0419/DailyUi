import React from 'react';
import { SubscribeButton, SubscribeText, SignIn, About } from './App.style';

const RightHeader = () => {
    return (
        <div style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            height: '88px',
        }}>

            <SubscribeButton>
                <SubscribeText>Subscribe</SubscribeText>
            </SubscribeButton>
            <SignIn>SignIn</SignIn>
            <About>About</About>

        </div>
    )

}
export default RightHeader;