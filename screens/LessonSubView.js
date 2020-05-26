import React, { Component } from 'react';
import { Icon, Divider, Button } from 'react-native-elements';
import { Card, Paragraph } from 'react-native-paper';
import { View, ScrollView, StyleSheet, Text, NativeModules, Platform, ProgressBarAndroid, TouchableOpacity } from 'react-native';

const { StatusBarManager } = NativeModules;
const lessonImg = require('../assets/science.png');
const lessonContent = [
  {
    title: "Video 1",
    icon: "ios-play-circle"
  },{
    title: "Video 2",
    icon: "ios-play-circle"
  },{
    title: "Text 1",
    icon: "ios-paper"
  },{
    title: "Text 1",
    icon: "ios-paper"
  }
];


class LessonSubView extends Component {
  state = {  }

  navigateBack = () => {
    const { navigate } = this.props.navigation;
    navigate('LessonView');
  }

  render() { 
    return ( 
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Icon name="md-arrow-back" type="ionicon" size={26} color="white"
            containerStyle={{alignSelf: "flex-start"}} onPress={this.navigateBack}
          />
          <View>
            <Text style={styles.headerTitle}>Lesson 1</Text>
            <Text style={styles.headerSubTitle}>Lesson 1 Subtopic</Text>
          </View>
        </View>
        <View>
        </View>
        <View style={styles.masteryView}>
          <Text style={styles.masteryText}>Level 1 </Text>
          <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.2}
          color="blue"
        />
        </View>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContainer}>
        <Card style={styles.card}>
          <Card.Title
            title="Lesson 1 Subtopic"
            right={(props) => <Icon {...props} type="ionicon" name="ios-bookmark" color="grey" size={24} onPress={this.navigateLessonSubView} />}
            rightStyle={{marginRight: 10}}
          />
          <Card.Content>
            <Divider style={{height: 0.5}} />
            {
              lessonContent.map( (l, i) => (
                <TouchableOpacity key={i} style={styles.lessonContentView}>
                  <Icon type="ionicon" name={l.icon} color="blue" size={20} containerStyle={{marginRight: 10}} />
                  <Text>{l.title}</Text>
                </TouchableOpacity> 
              )
            )}
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Title
            title="Lesson 1 Subtopic"
            right={(props) => <Icon {...props} type="ionicon" name="ios-bookmark" color="grey" size={24} onPress={this.navigateLessonSubView} />}
            rightStyle={{marginRight: 10}}
          />
          <Card.Content>
          <Divider style={{height: 0.5}} />
          {
              lessonContent.map( (l, i) => (
                <TouchableOpacity key={i} style={styles.lessonContentView}>
                  <Icon type="ionicon" name={l.icon} color="blue" size={20} containerStyle={{marginRight: 10}} />
                  <Text>{l.title}</Text>
                </TouchableOpacity> 
              )
            )}
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Title
            title="Lesson 1 Subtopic"
            right={(props) => <Icon {...props} type="ionicon" name="ios-bookmark" color="grey" size={24} onPress={this.navigateLessonSubView} />}
            rightStyle={{marginRight: 10}}
          />
          <Card.Content>
          <Divider style={{height: 0.5}} />
          {
            lessonContent.map( (l, i) => (
              <TouchableOpacity key={i} style={styles.lessonContentView}>
                <Icon type="ionicon" name={l.icon} color="blue" size={20} containerStyle={{marginRight: 10}} />
                <Text>{l.title}</Text>
              </TouchableOpacity> 
            )
          )}            
          </Card.Content>
        </Card>
        
        <Card style={styles.card}>
          <Card.Title
            title="Test Lesson Mastery"
          />
          <Card.Content>
          <Divider style={{height: 0.5}} />
          <Paragraph>Answer selected questions to see how well you've mastered the topic</Paragraph>        
          <Button
              title="Start"
              type="solid"
              raised
            />
          </Card.Content>
        </Card>
        
        <Card style={styles.card}>
          <Card.Title
            title="Take Additional Quizzes"
          />
          <Card.Content>
          <Divider style={{height: 0.5}} />
          <Paragraph>Browse through the list of Quizzes for this lesson</Paragraph>        
          <Button
              title="View More"
              type="solid"
              raised
            />
          </Card.Content>
        </Card>
        </ScrollView>
      </View>
     );
  }
}
 
export default LessonSubView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    marginTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 20
  },
  headerView: {
    height: 150,
    paddingLeft: 20,
    backgroundColor: 'darkblue',
    paddingBottom: 15,
    paddingTop: 25,
    justifyContent: 'space-between'
  },
  headerTitle: {
    fontSize: 17,
    color: 'grey',
    fontWeight: '500'
  },
  headerSubTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: "white"
  },
  masteryView: {
    height: 70,
    paddingHorizontal: '5%',
    paddingVertical: 10,
    backgroundColor: 'white',
    elevation:2,
    marginBottom: 20
  },
  masteryText: {
    fontSize: 17
  },
  scrollViewContainer: {
  },
  card: {
    marginBottom: 20
  },
  lessonContentView:{
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 10,
  }
});