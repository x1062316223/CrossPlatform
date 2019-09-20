//This is an example code for Bottom Navigation//
import React from 'react';
import Firebase from '../config/Firebase';

//import react in our code.
import {Text, View, Button} from 'react-native';

export default class Dashboard extends React.Component {
  handleSignout = () => {
    Firebase.auth().signOut();
    this.props.navigation.navigate('Auth');
  };

  //Detail Screen to show from any Open detail button
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Details!</Text>
        <Button
          title="Logout"
          onPress={this.props.navigation.navigate('Auth')}
        />
      </View>
    );
  }
}
