import { StatusBar } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold} from '@expo-google-fonts/inter';
import Home from './src/screens';

import { ThemeProvider } from 'styled-components';
import theme from './src/theme';

export default function App() {

  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  if (!fontLoaded) {
    return null
  }

  return (

    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      {/* Só irá carregar o app se as fontes forem carregadas */}
      {fontLoaded? <Home/> : <Home/>}
    </ThemeProvider>
  );
}