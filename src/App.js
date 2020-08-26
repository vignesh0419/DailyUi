import React from 'react';
import RightHeader from './RightHeader';
import LeftHeader from './LeftHeader';
import Body from './Body';
import { HeaderContainer } from './App.style';
import GlobalFonts from './fonts/font';
import Signup from './SignUp';
import { Route, Switch, BrowserRouter } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <div
        style={{
          margin: '0 auto'
        }}
      >
        <GlobalFonts />
        <HeaderContainer>
          <LeftHeader />
          <RightHeader />
        </HeaderContainer>
      </div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Body} />
          <Route exact path="/home" component={Body} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    </div>

  )


}
export default App;