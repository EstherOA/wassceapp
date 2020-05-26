import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Icon, Button, Divider, ListItem } from 'react-native-elements';
import { Card } from 'react-native-paper';
import HeaderBar from '../components/HeaderBar';

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

class Home extends Component {

  navigateSearch = () => {
    const { navigate } = this.props.navigation;
    navigate('SearchScreen');
  }

  render() { 
    return ( 
    <View style={styles.container}>
      <HeaderBar title="Home"/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cardView}>
          <Card style={styles.cardContainer}>
            <Card.Title 
            title="Daily Questions"
            subtitle="Answer a question from each subject daily"/>
            <Card.Content style={styles.questionCardContent}>
              <Button title="Start!" type="outline" containerStyle={styles.buttonContainerStyle}/>
            </Card.Content>
          </Card>
          
          <Card style={styles.cardContainer}>
            <Card.Title 
            title="Recent Lessons"
            subtitle=""/>
            <Card.Content style={styles.questionCardContent}>
              <Text>No Recent Lessons</Text>
              <Button title="Start!" type="outline" containerStyle={styles.buttonContainerStyle} />
            </Card.Content>
          </Card>
          
          <Card style={styles.cardContainer}>
            <Card.Title 
              left={(props) => 
              <TouchableOpacity {...props} onPress={this.navigateSearch} style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>Browse Subjects</Text> 
                <Icon name="md-search" type="ionicon" size={24} />
              </TouchableOpacity>}
              leftStyle={{width: '100%', paddingRight: 25}}
            
            />
            <Card.Content>
            <Divider style={{height: 1}}/>
            <View>
              {
                subjectList.map((l, i) => (
                  <ListItem
                    key={i}
                    leftAvatar={{source: subjectImg}}
                    title={l.title}
                    topDivider
                  />
                ))
              }
            </View>
            </Card.Content>
          </Card>
          
          <Card style={styles.cardContainer}>
            <Card.Title 
            title="Track Progress"
            subtitle="View your statistics for each subject"/>
            <Card.Content style={styles.questionCardContent}>
              <Button title="View" type="outline" containerStyle={styles.buttonContainerStyle}/>
            </Card.Content>
          </Card>
        </View>     
      </ScrollView>
    </View>
    );
  }
}
 
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingBottom: 10
  },
  cardView: {
    marginTop: 20,
    paddingHorizontal: '5%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
  },
  cardContainer: {
    marginBottom: 20
  },
  questionCardContent: {
    paddingVertical: 20,
    flexDirection: 'row',
    flexWrap: "wrap",
    paddingHorizontal: '25%',
    justifyContent: 'center' 
  },
  buttonContainerStyle: {
    width: '45%'
  }
})