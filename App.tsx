/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store/store';
import AppNavigation from './src/routes/AppNavigation';
import {MenuProvider} from 'react-native-popup-menu';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MenuProvider>
          <AppNavigation />
        </MenuProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
