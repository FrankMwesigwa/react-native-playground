
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

class LoginScreen extends Component {

    static navigationOptions = {
        header: null
    }

    render(){
        return(
            <View>
                <Button title="Login"
                    onPress={()=> this.props.navigation.navigate('Home')}
                />
            </View>
        )
    }
}

export default LoginScreen;