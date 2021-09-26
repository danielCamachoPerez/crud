import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './views/Home';
import NewUser from './views/NewUser';
import Details from './components/Details';
import Edit from './views/Edit';

const App = () => {
  const {Navigator, Screen} = createStackNavigator()
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name='Home' component={Home} options={{title:'Users'}} />
        <Screen name='New User' component={NewUser} />
        <Screen name='Details' component={Details} />
        <Screen name='Edit' component={Edit} />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;