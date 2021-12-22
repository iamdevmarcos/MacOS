import { useState } from 'react';
import * as C from './App.styles';

import { MenuIcon } from './components/screen/MenuIcon';

import { MenuIconList } from './utils/MenuIconList';

const App = () => {
  return (
    <C.Container>
      <C.MenuTop>...</C.MenuTop>

      <C.MenuBottom>
        {MenuIconList.map((item, index) => (
          <MenuIcon key={index} />
        ))}
      </C.MenuBottom>
    </C.Container>
  ); 
}

export default App;