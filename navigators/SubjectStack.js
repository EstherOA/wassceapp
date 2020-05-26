import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from '../screens/SearchScreen';
import Subjects from '../screens/Subjects';
import LessonList from '../screens/LessonList';
import LessonView from '../screens/LessonView';
import LessonSubView from '../screens/LessonSubView';

const SubjectStack = createStackNavigator({ 
  SearchScreen: SearchScreen,
  Subjects: Subjects,
  Lessons: LessonList,
  LessonView: LessonView,
  LessonSubView, LessonSubView
}, {
  initialRouteName: 'Subjects',
  headerMode: 'none'
});

export default SubjectStack;