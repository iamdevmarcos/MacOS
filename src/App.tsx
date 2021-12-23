import { useState, useEffect } from 'react';
import * as C from './App.styles';

import { Loading } from './components/common/Loading';
import { WelcomeScreen } from './components/common/WelcomeScreen';
import { MenuIcon } from './components/screen/MenuIcon';

import { MenuIconList } from './utils/MenuIconList';
import { MenuLeftItems } from './utils/MenuList/MenuLeftItems';
import { MenuRightItems } from './utils/MenuList/MenuRightItems';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [loadingFadeOut, setLoadingFadeOut] = useState(false);
  const [welcomeScreen, setWelcomeScreen] = useState(false);
  const [welcomeScreenFadeOut, setWelcomeScreenFadeOut] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setWelcomeScreen(true);
    }, 5000);

    setTimeout(() => {
      setLoadingFadeOut(true);
    }, 3000);
    
    setTimeout(() => {
      setWelcomeScreen(false);
    }, 8000);
  }, []);

  if(loading) {
    return (<Loading fadeOut={loadingFadeOut} />);
  }

  if(!loading && welcomeScreen === true) {
    return (<WelcomeScreen />);
  }

  if(!loading && !welcomeScreen) {
    return (
      <C.Container>
        <C.MenuTop>
          <C.MenuTopLeft>
            <C.MenuTopList>
              <li>
                <img src="/assets/images/apple-logo.png" />
              </li>
              {MenuLeftItems.map((item, index) => (
                <li key={index}>{item.title}</li>
              ))}
            </C.MenuTopList>
          </C.MenuTopLeft>
          <C.MenuTopRight>
            <C.MenuTopList>
              <li>
                <img src="/assets/images/icons/battery.png" />
              </li>
              <li>
                <img src="/assets/images/icons/wifi.png" />
              </li>
              <li>
                <img src="/assets/images/icons/search.png" />
              </li>
              <li>
                <img src="/assets/images/icons/github.png" />
              </li>
              {MenuRightItems.map((item, index) => (
                <li key={index}>{item.title}</li>
              ))}
            </C.MenuTopList>
          </C.MenuTopRight>
        </C.MenuTop>
  
        <C.MenuBottom>
          {MenuIconList.map((item, index) => (
            <MenuIcon
              key={index}
              icon={item.icon}
            />
          ))}
        </C.MenuBottom>
      </C.Container>
    ); 
  }
}

export default App;