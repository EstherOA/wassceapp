import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Header, ListItem } from 'react-native-elements';

const lessonList = [
  {
    title: 'Lesson 1'
  },{
    title: 'Lesson 2'
  },{
    title: 'Lesson 3'
  },{
    title: 'Lesson 4'
  },{
    title: 'Lesson 5'
  },{
    title: 'Lesson 6'
  },{
    title: 'Lesson 7'
  },{
    title: 'Lesson 8'
  },{
    title: 'Lesson 9'
  },{
    title: 'Lesson 10'
  },{
    title: 'Lesson 11'
  },{
    title: 'Lesson 12'
  }
];

const lessonImg = require('../assets/science.png');

class LessonList extends Component {
  state = {  }

  navigateBack = () => {
    const { navigate } = this.props.navigation;
    navigate('Subjects');
  }
  
  navigateLessonView = () => {
    const { navigate } = this.props.navigation;
    navigate('LessonView');
  }

  render() { 
    return ( 
      <View style={styles.container}>
        <Header 
          leftComponent={{icon: 'md-arrow-back', type: 'ionicon', size: 24, color: 'grey', onPress: this.navigateBack}}
          centerComponent={{text: "Core Maths", style: { fontSize: 20, fontWeight: '400'}}}
          backgroundColor="white"
          placement="left"
          containerStyle={{elevation: 3}}
          leftContainerStyle={styles.backButtonStyle}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          { 
            lessonList.map( (l,i) => (
              <ListItem
                key={i}
                title={l.title}
                leftAvatar={{source: lessonImg}}
                onPress={this.navigateLessonView}
                bottomDivider
              />
            ))
          }
        </ScrollView>
      </View>
     );
  }
}
 
export default LessonList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingBottom: 10
  },
  backButtonStyle: {
    paddingHorizontal: 10 
  }
});