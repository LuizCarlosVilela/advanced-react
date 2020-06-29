import React from 'react';

import { ThemeContext, themes } from './Theme';

import Card from './components/Card';

export default function App(){
  return (
    <ThemeContext.Provider value={themes.primary}>
      <Card />
    </ThemeContext.Provider>
  )
}