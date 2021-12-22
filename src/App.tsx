import { useState } from 'react';
import * as C from './App.styles';

import { MenuIcon } from './components/screen/MenuIcon';

import { MenuIconList } from './utils/MenuIconList';

const App = () => {
  return (
    <C.Container>
      <C.MenuTop>
        <C.MenuTopLeft>
          <C.MenuTopList>
            <li></li>
            <li>Mail</li>
            <li>File</li>
            <li>Edit</li>
            <li>View</li>
            <li>Mailbox</li>
            <li>Message</li>
            <li>Help</li>
          </C.MenuTopList>
        </C.MenuTopLeft>
        <C.MenuTopRight>...</C.MenuTopRight>
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