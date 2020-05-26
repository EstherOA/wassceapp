import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
import AuthLoading from '../screens/AuthLoading.js';
import AuthStack from './AuthStack';
import { BottomTab } from './BottomTab.js';
import SearchScreen from '../screens/SearchScreen.js';

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      Auth: AuthStack,
      BottomTab: BottomTab,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);