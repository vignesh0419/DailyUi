import React from 'react';
import { SignupDiv, GoogleImg, FbImg, TwitterImg, LinkedInImg, SignupText, EmailLable, EmailArea, PswdLable,Pwdimg, PswdArea, SignUpBtn, SignUpTxt1 } from './App.style';
import Google from './image/Google.png';
import Facebook from './image/facebook.png';
import twitter from './image/twitter.png';
import linkedin from './image/linkedin.png';
import image1 from './image/image1.png';

const Signup = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
            <SignupDiv>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <GoogleImg src={Google} />
                    <FbImg src={Facebook} />
                    <TwitterImg src={twitter} />
                    <LinkedInImg src={linkedin} />
                </div>
                <SignupText>or sign up with</SignupText>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                    <EmailLable> E-mail</EmailLable>
                    <EmailArea ></EmailArea>
                    <div style={{ display: 'flex', flexDirection: 'row'}}>
                        <PswdLable> Password </PswdLable>
                        <Pwdimg src={image1}/>
                    </div>
                    <PswdArea   />
                    <SignUpBtn> sign up </SignUpBtn>
                    <SignUpTxt1 />
                </div>
            </SignupDiv>

        </div>
    )

}
export default Signup;