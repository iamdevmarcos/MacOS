import { useState } from 'react';
import * as C from './App.styles';

import { MenuIcon } from './components/screen/MenuIcon';

import { MenuIconList } from './utils/MenuIconList';
import { MenuTopList } from './utils/MenuList/MenuTopList';

const App = () => {
  return (
    <C.Container>
      <C.MenuTop>
        <C.MenuTopLeft>
          <C.MenuTopList>
            <li>
              <img src="/assets/images/apple-logo.png" />
            </li>
            {MenuTopList.map((item, index) => (
              <li>{item.title}</li>
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
            <li>Mon Jun 22</li>
            <li>9:41 AM</li>
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