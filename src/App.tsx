import { useState } from 'react';
import * as C from './App.styles';

import { MenuIcon } from './components/screen/MenuIcon';

const App = () => {
  const [iconList, setIconList] = useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{}]);

  return (
    <C.Container>
      <C.MenuTop>...</C.MenuTop>

      <C.MenuBottom>
        {iconList.map((item, index) => (
          <MenuIcon key={index} />
        ))}
      </C.MenuBottom>
    </C.Container>
  ); 
}

export default App;