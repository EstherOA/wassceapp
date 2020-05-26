import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import { Card } from 'react-native-paper';
import { ListItem } from 'react-native-elements';

const subjectList = [
  {
    title: 'English'
  },{
    title: 'Core Maths'
  },{
    title: 'Social Studies'
  },{
    title: 'Integrated Science'
  },{
    title: 'Chemistry'
  }
];

const subjectImg = require('../assets/science.png');

class Quizzes extends Component {
  state = {  }

  navigateArchive = () => {
    const { navigate } = this.props.navigation;
    navigate('QuizArchive');
  }

  render() { 
    return ( 
      <View style={styles.container}>
        <HeaderBar title="Question Archive"/>
        <Card style={styles.card}>
          <Card.Content>
            <ScrollView>
            {
              subjectList.map((l, i) => (
                <ListItem
                  key={i}
                  leftAvatar={{source: subjectImg}}
                  title={l.title}
                  rightIcon={{name: 'ios-arrow-forward', type: 'ionicon', color: 'grey', size: 30}}
                  onPress={this.navigateArchive}
                  bottomDivider
                />
              ))
            }
            </ScrollView>
          </Card.Content>
        </Card>
      </View>
     );
  }
}
 
export default Quizzes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingBottom: 10
  },
  card: {
    marginTop: 20
  }
});