import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Home from '../screens/Home';
import { Icon } from 'react-native-elements';
import SubjectStack from './SubjectStack';
import QuizStack from './QuizStack';
import ProfileStack from './ProfileStack';


export const BottomTab = createMaterialBottomTabNavigator(
  {
    Home: Home,
    Subjects: SubjectStack,
    Quizzes: QuizStack,
    Profile: ProfileStack,
  },
  {
    initialRouteName: 'Home',
    activeColor: 'rgb(83,109,254)',
    inactiveColor: '#9e9e9e',
    barStyle: { backgroundColor: '#fff' },
    shifting: true,
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {

        const { routeName } = navigation.state;
        let iconName;
        if( routeName === 'Home') {
          iconName = "ios-home";
        } else if (routeName === 'Subjects') {
          iconName="ios-book";
        } else if (routeName === 'Quizzes') {
          iconName="ios-list-box";
        } else if (routeName === 'Profile') {
          iconName= "md-person";
        } 

        return <Icon name={iconName} color={tintColor} type="ionicon"/>
      }
    })
  }
);