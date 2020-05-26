import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Input } from 'react-native-elements';

class SearchScreen extends Component {
  state = {  }
  render() { 
    return ( 
      <View>
        <Header 
          centerComponent={() => <Input placeholder='Search'
          leftIcon={{ type: 'ionicon', name: 'md-search', size: 25, color: 'grey' }}
          inputContainerStyle={{borderBottomColor: 'transparent'}}
          inputStyle={{paddingLeft: 10}}
          />}
          leftContainerStyle={{flex: 0}}
          rightComponent={() => <Button type="clear" title="FILTER" /> } 
          backgroundColor="white" 
          containerStyle={{elevation: 3}}
        />
      </View>
     );
  }
}
 
export default SearchScreen;