import React, { useState } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { LocalStorageService, LS_KEYS } from './services/localStorage';
import { BotlleSecondVersion } from './components/bottle';
import { SettingsProvider } from './components/hooks/useSettings';
import { Bottle } from './components/bottleV2/BottleVTwo';
// import { BottleContainer } from './components/bottleContainer/BottleContainer';
import {Home} from './components/home';
import {FnSettings} from './components/settings';
import './App.css';

function App() {

  const [settings, setSettings] = useState(LocalStorageService.get(LS_KEYS.SETTINGS) || 
                                                {'bottles' : 3,
                                                'colors' : 3,
                                                'sections' : 3,
                                                'sound' : "checked"});    

  return (
    <SettingsProvider value={{settings, setSettings}}>
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='settings' element={< FnSettings state = {{settings, setSettings}} />}></Route>
            <Route exact path='bottle' element={< BotlleSecondVersion />}></Route>
            {/* <Route exact path='bottle' element={< BottleContainer />}></Route> */}
        </Routes>
    </BrowserRouter>
    </SettingsProvider> 
  );
}

export default App;
