import React, { useState } from 'react'
import { Text, TextInput, View, StyleSheet, Button, Alert } from 'react-native';
import develop from '../../config/env'

const Form = ({navigation}) => {
    //console.log(props)
    const {JSON_SERVE_DEVELOPMENT} = develop
    const [name, setName]=useState('')
    const [age, setAge]=useState('')
    const [email, setEmail]=useState('')

    const submitUser = async ()=>{
        if(name === '' || age === '' || email === ''){
            return (Alert.alert(
                "Error",
                "All fields must to be complete",
                [
                    {
                        text:"Ok"
                    }
                ]
            ))          
        }
        const user = {
            name,
            age,
            email
        }
        const headers = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify(user)
        }
        const url = JSON_SERVE_DEVELOPMENT
        const request = await fetch(url,headers)
        const response = await request.json()
        //navigation.goBack()
        navigation.reset({
            index:1,
            routes:[
                {name:'Home'}
            ]
        })
    }
    const cancelConfirm =()=>{
        Alert.alert(
            "Confirm",
            "You want to leave?",
            [
                {
                    "text": "Confirm",
                    onPress:()=>navigation.goBack()
                },
                {
                    "text": "Cancel"
                }
            ]
        )
    }
    return (
        <View style={styles.content}>
            <TextInput
                style={styles.input}
                placeholder="@username"
                keyboardType='default'
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="age"
                keyboardType='numeric'
                onChangeText={setAge}
            />
            <TextInput
                style={styles.input}
                placeholder="email"
                keyboardType='email-address'
                onChangeText={setEmail}
            />
            <View style={styles.btn}>
                <Button
                    title="Create user"
                    color='#00c16e'
                    onPress={submitUser}
                    //onPress={() => Alert.alert('Simple Button pressed')}
                />
            </View>
            <View style={styles.btn}>
                <Button
                    title='Cancel'
                    color='#ed1b2e'
                    onPress={cancelConfirm} 
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content:{
        marginHorizontal: 5
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    textField:{
        marginTop: 10
    },
    btn:{
        marginBottom: 8
    }
  });

export default Form;