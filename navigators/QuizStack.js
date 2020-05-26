import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from '../screens/SearchScreen';
import Subjects from '../screens/Subjects';
import LessonList from '../screens/LessonList';
import LessonView from '../screens/LessonView';
import LessonSubView from '../screens/LessonSubView';
import Quizzes from '../screens/Quizzes';
import QuestionArchive from '../screens/QuestionArchive';
import QuizPreviewScreen from '../screens/QuizPreviewScreen';
import QuestionView from '../screens/QuestionView';

const QuizStack = createStackNavigator({ 
  Quizzes: Quizzes,
  QuizArchive: QuestionArchive,
  QuizPreview: QuizPreviewScreen,
  QuestionView: QuestionView
}, {
  initialRouteName: 'Quizzes',
  headerMode: 'none'
});

export default QuizStack;