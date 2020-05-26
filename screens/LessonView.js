import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, NativeModules, Platform } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import { Divider, Icon, Avatar, Button } from 'react-native-elements';

const lessonImg = require('../assets/science.png');
const diagnosticImage = require('../assets/diagnosticTest.jpg');
const { StatusBarManager } = NativeModules;

class LessonView extends Component {

  state = {  }

  navigateLessonSubView = () => {
    const { navigate } = this.props.navigation;
    navigate('LessonSubView');
  }
  
  navigateBack = () => {
    const { navigate } = this.props.navigation;
    navigate('Lessons');
  }

  render() { 
    return ( 
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Icon name="md-arrow-back" type="ionicon" size={30} color="white"
            containerStyle={{alignSelf: "flex-start", paddingHorizontal: 5}} onPress={this.navigateBack}
          />
          <View>
            <Text style={styles.headerTitle}>Core Math</Text>
            <Text style={styles.headerSubTitle}>Lesson 1</Text>
          </View>
        </View>
        <View style={styles.masteryView}>
          <Text>Level 1 (Basic Mastery) - 0%</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContainer}>
        <Card style={styles.card}>
          <Divider style={{height: 4, backgroundColor: "blue"}}/>
          <Card.Title
            left={(props) => <Avatar {...props} rounded source={lessonImg}/>}
            title="Lesson 1 Subtopic"
            subtitle="Ongoing"
            right={(props) => <Icon {...props} type="ionicon" name="ios-arrow-forward" color="grey" size={30} onPress={this.navigateLessonSubView} />}
            rightStyle={{marginRight: 10}}
          />
          <Card.Content>
            <Divider style={{height: 0.5}} />
            <Paragraph>This is a text about the lesson description. It is just for trial purposes. Yaay</Paragraph>
          </Card.Content>
        </Card>
        
        <Card style={styles.card}>
          <Card.Title
            left={(props) => <Avatar {...props} rounded source={lessonImg}/>}
            title="Lesson 1 Subtopic"
            subtitle="Pending"
            right={(props) => <Icon {...props} type="ionicon" name="ios-arrow-forward" color="grey" size={30} />}
            rightStyle={{marginRight: 10}}
            />
          <Card.Content>
            <Divider style={{height: 0.5}} />
            <Paragraph>This is a text about the lesson description. It is just for trial purposes. Yaay</Paragraph>
          </Card.Content>
        </Card>
        
        <Card style={styles.card}>
          <Card.Title
            left={(props) => <Avatar {...props} rounded source={lessonImg}/>}
            title="Lesson 1 Subtopic"
            subtitle="Pending"
            right={(props) => <Icon {...props} type="ionicon" name="ios-arrow-forward" color="grey" size={30} />}
            rightStyle={{marginRight: 10}}
            />
          <Card.Content>
            <Divider style={{height: 0.5}} />
            <Paragraph>This is a text about the lesson description. It is just for trial purposes. Yaay</Paragraph>
          </Card.Content>
        </Card>
        
        <Card style={styles.card}>
          <Card.Title
            left={(props) => <Avatar {...props} rounded source={lessonImg}/>}
            title="Lesson 1 Subtopic"
            subtitle="Pending"
            right={(props) => <Icon {...props} type="ionicon" name="ios-arrow-forward" color="grey" size={30} />}
            rightStyle={{marginRight: 10}}
          />
          <Card.Content>
            <Divider style={{height: 0.5}} />
            <Paragraph>This is a text about the lesson description. It is just for trial purposes. Yaay</Paragraph>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Cover source={diagnosticImage}/>
          <Card.Title title="Diagnostic Test" subtitle="Take a test to get inital subject statistics"/>
          <Card.Content>
            <Paragraph>How prepared are you for this paper? Take a test right now and find out. This will help you plan your studies</Paragraph>
            <Button
              title="Start"
              type="solid"
              raised
              buttonStyle={styles.button}
              containerStyle={styles.buttonContainer}
            />
          </Card.Content>
        </Card>
        </ScrollView>
      </View>
     );
  }
}
 
export default LessonView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    marginTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 20
  },
  scrollViewContainer: {
    paddingHorizontal: '3%'
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
    backgroundColor: 'white', 
    height: 70,
    paddingVertical: 20,
    paddingLeft: 20,
    marginBottom: 20 
  },
  card: {
    marginBottom: 20
  }
})