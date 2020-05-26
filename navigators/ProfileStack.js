import { createStackNavigator } from 'react-navigation-stack';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';

const ProfileStack = createStackNavigator({
    Profile: Profile,
    Settings: Settings
}, {
    initialRouteName: 'Profile',
    headerMode: 'none'
});

export default ProfileStack;