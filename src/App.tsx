import { useState, useEffect } from 'react';
import * as C from './App.styles';

import { Loading } from './components/common/Loading';
import { WelcomeScreen } from './components/common/WelcomeScreen';
import { MenuIcon } from './components/screen/MenuIcon';
import { Window } from './components/common/Window';

import { MenuIconList } from './utils/MenuIconList';
import { MenuLeftItems } from './utils/MenuList/MenuLeftItems';
import { MenuRightItems } from './utils/MenuList/MenuRightItems';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [loadingFadeOut, setLoadingFadeOut] = useState(false);
  const [welcomeScreen, setWelcomeScreen] = useState(false);
  const [welcomeScreenFadeOut, setWelcomeScreenFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setWelcomeScreen(true);
    }, 5000);

    setTimeout(() => {
      setLoadingFadeOut(true);
    }, 3000);
    
    setTimeout(() => {
      setWelcomeScreenFadeOut(true);
    }, 8000);

    setTimeout(() => {
      setWelcomeScreen(false);
    }, 9000);
  }, []);

  if(loading) {
    return (<Loading fadeOut={loadingFadeOut} />);
  }

  if(!loading && welcomeScreen === true) {
    return (<WelcomeScreen fadeOut={welcomeScreenFadeOut} />);
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
  
        <Window />

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