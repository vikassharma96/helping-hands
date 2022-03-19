import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import HomeScreen from './screens/homeScreen';
import './App.css';
import theme from './theme';

const App: React.FC = (props: any) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <HomeScreen />
      </div>
    </ThemeProvider>
  );
};

export default App;
