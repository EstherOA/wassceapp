import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import { Header, Button, Divider } from 'react-native-elements';

const quizImg = require('../assets/quiz.png');

class QuizPreviewScreen extends Component {

  navigateBack = () => {
    const { navigate } = this.props.navigation;
    navigate('QuizArchive');
  }
  
  navigateQuestionView = () => {
    const { navigate } = this.props.navigation;
    navigate('QuestionView');
  }

  render() { 
    return ( 
      <View style={styles.container }>
        <Header 
          leftComponent={{icon: 'md-arrow-back', type: 'ionicon', size: 30, color: 'white', onPress: this.navigateBack}}
          centerComponent={{text: "Lesson 1 - Quiz", style: { fontSize: 20, fontWeight: '400', color: "white" }}}
          backgroundColor="darkblue"
          leftContainerStyle={styles.backButtonStyle}
          placement="left"
        />
        <Divider />
        <View style={styles.mainView}> 
          <View style={styles.textView}>
            <Text style={styles.mainText}>Take a Quiz</Text>
            <Text style={styles.subText}>Get ready to test your knowledge so far</Text>
            <Text style={styles.instructionText}>5 questions ( 10-13 minutes )</Text>
          </View>  
          <ImageBackground style={styles.image} source={quizImg} resizeMode="stretch">
            <Button type="solid" title="Begin" raised buttonStyle={styles.butttonStyle} 
              titleStyle={{color: "blue"}} onPress={this.navigateQuestionView}
            />
          </ImageBackground>            
        </View>
      </View>
     );
  }
}
 
export default QuizPreviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkblue',
    paddingBottom: 10,
  },
  mainView: {
    paddingTop: '15%',
    paddingHorizontal: '4%',
    flexDirection: 'column',
  },
  butttonStyle: {
    backgroundColor: "white"
  },
  textView: {
    marginBottom: '35%',
    paddingLeft: '5%'
  },
  mainText: {
    fontSize: 30,
    color: "white",
    fontWeight: 'bold',
    marginBottom: 25
  },
  subText: {
    fontSize: 15,
    color: "white",
    marginBottom: 25
  },
  instructionText: {
    fontSize: 17,
    color: "white",
    fontWeight: '700',
    letterSpacing: 0.5
  },
  image: {
    height: '80%',
    width: '100%',
    paddingTop: '43%',
  }, 
  backButtonStyle: {
    paddingHorizontal: 10
  }
});