import { useState, useEffect } from 'react';
import * as C from './App.styles';

import { Loading } from './components/common/Loading';
import { MenuIcon } from './components/screen/MenuIcon';

import { MenuIconList } from './utils/MenuIconList';
import { MenuLeftItems } from './utils/MenuList/MenuLeftItems';
import { MenuRightItems } from './utils/MenuList/MenuRightItems';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if(loading) {
    return (<Loading />);
  }

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
          <MenuIcon key={index} />
        ))}
      </C.MenuBottom>
    </C.Container>
  ); 
}

export default App;