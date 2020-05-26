import React, {Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Header, ListItem } from 'react-native-elements';
import { Paragraph } from 'react-native-paper';

const settingsList = ['Help & Feedback', 'Excercise Settings', 'Licences'];

class Settings extends Component {
    state = {  }

    navigateBack = () => {
        const { navigate } = this.props.navigation;
        navigate('Profile');
    }

    render() { 
        return ( 
            <View>
                <Header
                    leftComponent={{ icon: 'md-arrow-back', type: 'ionicon', size: 24, color: 'grey', onPress: this.navigateBack }}
                    centerComponent={{ text: "Settings", style: { fontSize: 20, fontWeight: '400' } }}
                    backgroundColor="white"
                    placement="left"
                    containerStyle={{ elevation: 3 }}
                    leftContainerStyle={styles.backButtonStyle}
                />
                <Paragraph style={styles.listTitle}>General</Paragraph>
                {
                    settingsList.map((l, i) => (
                        <ListItem
                            key={i}
                            title={l}
                            bottomDivider
                        />
                    ))
                }
            </View>
         );
    }
}
 
export default Settings;

export const styles = StyleSheet.create({
    backButtonStyle: {
        paddingHorizontal: 10
    },
    listTitle: {
        marginLeft: 15, 
        marginTop: 20,
        color: 'grey'
    }
});