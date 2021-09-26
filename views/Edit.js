import React, { useState } from 'react';
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';
import develop from '../config/env';

const Edit = ({route, navigation}) => {
    const {name, age, email, id} = route.params
    const {JSON_SERVE_DEVELOPMENT} = develop
    const [editname, seteditname]=useState('')
    const [editAge, seteditAge]=useState('')
    const [editEmail, seteditEmail]=useState('')
    const actionConfirm = ()=>{
        Alert.alert(
            "Are your sure?",
            "Are you sure you want to edit this user?",
            [
                {
                    "text": "Yes",
                    onPress:()=>submitEdition()
                },
                {
                    "text":"No"
                }
            ]
        )
    }
    const submitEdition = async()=>{
        if(editname === '' || editAge === '' || editEmail === ''){
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
        const url = `${JSON_SERVE_DEVELOPMENT}/${id}`
        const newUser = {
            name:editname,
            age:editAge,
            email:editEmail,
        }
        const headers = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify(newUser)
        }
        const request = await fetch(url,headers)
        const response = await request.json()
        navigation.reset({
            index:1,
            routes:[
                {
                    name:'Home'
                }
            ]
        })
    }
    const cancelConfirm = ()=>{
        Alert.alert(
            "Are your sure?",
            "Are you sure you want to leave?",
            [
                {
                    "text": "Yes",
                    onPress:()=>resetRouter()
                },
                {
                    "text":"No"
                }
            ]
        )
    }
    const resetRouter =()=>{
        navigation.reset({
            index:1,
            routes:[
                {
                    name:'Home'
                }
            ]
        })
    }
    return (
        <View style={styles.content}>
            <TextInput
                style={styles.input}
                placeholder="@username"
                keyboardType='default'
                onChangeText={seteditname}
            />
            <TextInput
                style={styles.input}
                placeholder="age"
                keyboardType='numeric'
                onChangeText={seteditAge}
            />
            <TextInput
                style={styles.input}
                placeholder="email"
                keyboardType='email-address'
                onChangeText={seteditEmail}
            />
            <View style={styles.btn}>
                <Button
                    title="Confirm edit"
                    color='#00c16e'
                    onPress={actionConfirm}
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

export default Edit;