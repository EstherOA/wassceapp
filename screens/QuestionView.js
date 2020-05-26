import React, { Component } from 'react';
import { Header, Divider, Button, ListItem } from 'react-native-elements';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';

const answerList = [
  {
    text: 'Rabbit'
  },{
    text: 'Chair'
  },{
    text: 'Shoe'
  },{
    text: 'Tomato'
  }
];

class QuestionView extends Component {
  state = { 
    value: '1'
   }

  navigateBack = () => {
    const { navigate } = this.props.navigation;
    navigate('QuizPreview');
  }

  render() { 
    return ( 
      <View style={styles.container}>
        <Header 
          leftComponent={{icon: 'md-arrow-back', type: 'ionicon', size: 24, color: 'white', onPress: this.navigateBack}}
          centerComponent={{text: "Lesson 1 - Quiz", style: { fontSize: 20, fontWeight: '400', color: "white" }}}
          backgroundColor="darkblue"
          leftContainerStyle={styles.backButtonStyle}
          placement="left"
        />
        <Divider />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.questionView}>
            <Text style={styles.questionText}>Which of these is an animal?</Text>
          </View>
          <View style={styles.questionView}>
            <Text style={styles.instructionText}>Choose 1 answer:</Text>
          </View>
          <View style={styles.answerContainer}>
            <Divider />
            <RadioButton.Group 
              onValueChange={value => this.setState({ value })}
              value={this.state.value}
            >      
            {
              answerList.map( (l, i) => (
                <View key={i}>                
                  <View style={styles.answerView}>
                    <RadioButton value={i} />
                    <Text>{l.text}</Text>
                  </View>
                  <Divider />
                </View>
              ))
            }
            </RadioButton.Group>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Text>Do 5 Problems</Text>
          <Button title="Submit" containerStyle={{width: '40%'}}/>
        </View>
      </View>
     );
  }
}
 
export default QuestionView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  footer: {
    position: 'absolute',
    paddingVertical: 10,
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    elevation: 5,
    backgroundColor: "white"
  },
  questionView: {
    marginTop: '10%',
    marginLeft: '5%'
  },
  questionText: {
    fontSize: 20,
    fontWeight: '500',
  },
  instructionText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  answerContainer: {
    paddingTop: 20
  },
  answerView: {
    paddingLeft: '5%',
    flexDirection: 'row',
    paddingVertical: '5%',
  },
  backButtonStyle: {
    paddingHorizontal: 10
  }
});