import React from 'react'
import { Button, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Form from '../components/Form';

const NewUser = (props) => {
    //console.log(props)
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
                <Text style={styles.title}>Create new user</Text>
                <Form {...props} />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    title:{
        textAlign: 'center',
        marginTop: 8,
        fontSize: 24,
    }
})

export default NewUser;