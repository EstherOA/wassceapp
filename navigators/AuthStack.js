import { createStackNavigator } from 'react-navigation-stack';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import VerifyPhone from '../screens/VerifyPhone';
import PasswordReset from '../screens/PasswordReset';
import ResetEmail from '../screens/ResetEmail';

const AuthStack = createStackNavigator({ 
  Signup: Signup,
  Login: Login,
  VerifyPhone: VerifyPhone,
  PasswordReset: PasswordReset,
  ResetEmail: ResetEmail 
}, {
  initialRouteName: 'Login',
  headerMode: 'none'
});

export default AuthStack;