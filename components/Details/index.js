import React from 'react'
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import develop from '../../config/env';

const Details = ({route, navigation}) => {
    const {name, age, email, id} = route.params
    const {JSON_SERVE_DEVELOPMENT} = develop

    const actionConfirm = ()=>{
        Alert.alert(
            "Are your sure?",
            "Are you sure you want to remove this user?",
            [
                {
                    "text": "Yes",
                    onPress:()=>deleteUser()
                },
                {
                    "text":"No"
                }
            ]
        )
    }
    const deleteUser = async()=>{
        const url = `${JSON_SERVE_DEVELOPMENT}/${id}`
        const headers = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            //body: JSON.stringify()
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
    return (
        <View style={styles.content}>
            <Text style={styles.title}>User details</Text>
            <Text>{name}</Text>
            <Text>{age}</Text>
            <Text>{email}</Text>
            <View style={styles.btnDelete}>
                <Button
                    title='Delete'
                    color= '#ed1b2e'
                    onPress={actionConfirm}
                />
            </View>
            <View style={styles.btnEdit}>
                <Button
                    title='Edit'
                    color= '#ffc20e'
                    onPress={()=>navigation.navigate('Edit', route.params)}
                />
            </View>
            <View style={styles.btnGoBack}>
                <Button
                    title='Back'
                    onPress={()=>navigation.goBack()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content:{
        marginHorizontal: 5
    },
    title:{
        marginTop: 8,
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 8
    },
    btnDelete:{
        marginTop: 5,
        
    },
    btnEdit:{
        marginTop: 8,
        
    },
    btnGoBack:{
        marginTop: 8,
        
    }
})


export default Details;