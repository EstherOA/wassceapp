import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import HeaderBar from '../components/HeaderBar';
import { Card } from 'react-native-paper';

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
    title: 'Chemistry and More'
  }
];

const subjectImg = require('../assets/science.png');

export default class Subjects extends Component {

  state = {  }

  navigateLessons = () => {
    const { navigate } = this.props.navigation;
    navigate('Lessons');
  }

  render() { 
    return (
    <View style={styles.container}>
      <HeaderBar title="My Subjects" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cardView}>
          <Card>
            <Card.Content>
            {
              subjectList.map((l, i) => (
                <ListItem
                  key={i}
                  leftAvatar={{source: subjectImg}}
                  title={l.title}
                  onPress={this.navigateLessons}
                  bottomDivider
                />
              ))
            }
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingBottom: 10
  }, 
  cardView: {
    marginTop: 20,
    flexDirection: 'column',
    // justifyContent: 'space-between',
    // height: '100%'
  },
})
 
