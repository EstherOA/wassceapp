import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { Button, Divider, Avatar, Icon } from 'react-native-elements';
import HeaderBar from '../components/HeaderBar';
import { Card, Paragraph } from 'react-native-paper';

const lessonList = [
  {
    value: 'Lesson 1'
  },{
    value: 'Lesson 2'
  },{
    value: 'Lesson 3'
  },{
    value: 'Lesson 4'
  },{
    value: 'Lesson 5'
  },{
    value: 'Lesson 6'
  },{
    value: 'Lesson 7'
  },{
    value: 'Lesson 8'
  },{
    value: 'Lesson 9'
  },{
    value: 'Lesson 10'
  },{
    value: 'Lesson 11'
  },{
    value: 'Lesson 12'
  }
];

const lessonImg = require('../assets/science.png');

class QuestionArchive extends Component {
  state = {  }

  navigatePreview = () => {
    const { navigate } = this.props.navigation;
    navigate('QuizPreview');
  }

  render() { 
    return ( 
      <View style={styles.container}>
        <HeaderBar title="Question Archive"/>
        <View style={styles.dropDownView}>
          <Dropdown
            data={lessonList}
            label="Select Lesson"
            containerStyle={styles.dropDown}
          />
          <Button type="clear" title="FILTER" titleStyle={{fontSize: 17}}
            containerStyle={{ height: 50, marginTop: 15}}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContainer}>
        <Card style={styles.card}>
          <Card.Title
            title="Lesson 1 Quiz 1"
            subtitle="Ongoing"
            right={(props) => <Icon {...props} type="ionicon" name="ios-arrow-forward" color="grey" size={30} onPress={this.navigatePreview} />}
            rightStyle={{marginRight: 10}}
          />
        </Card>
        
        <Card style={styles.card}>
        <Card.Title
            title="Lesson 1 Quiz 2"
            subtitle="Ongoing"
            right={(props) => <Icon {...props} type="ionicon" name="ios-arrow-forward" color="grey" size={30} onPress={this.navigatePreview} />}
            rightStyle={{marginRight: 10}}
          />
        </Card>
        
        <Card style={styles.card}>
        <Card.Title
            title="Lesson 1 Quiz 3"
            subtitle="Pending"
            right={(props) => <Icon {...props} type="ionicon" name="ios-arrow-forward" color="grey" size={30} onPress={this.navigatePreview} />}
            rightStyle={{marginRight: 10}}
          />
        </Card>
        
        <Card style={styles.card}>
          <Card.Title
            title="Lesson 1 Quiz 4"
            subtitle="Pending"
            right={(props) => <Icon {...props} type="ionicon" name="ios-arrow-forward" color="grey" size={30} />}
            rightStyle={{marginRight: 10}}
          />
        </Card>

        </ScrollView>
      </View>
     );
  }
}
 
export default QuestionArchive;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingBottom: 10
  },
  dropDownView: {
    flexDirection: 'row',
    paddingHorizontal: '5%',
    justifyContent: 'space-between'
  },
  dropDown: {
    width: '70%',
  },
  scrollViewContainer: {
    paddingHorizontal: '3%',
    paddingTop: 20
  },
  card: {
    marginBottom: 20
  }
});
