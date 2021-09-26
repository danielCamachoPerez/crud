import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import develop from '../../config/env';

const Users = ({navigation}) => {
    const {JSON_SERVE_DEVELOPMENT} = develop
    const [users, setUsers]=useState([])
    useEffect(()=>{
        const getUsers = async ()=>{
            const url = JSON_SERVE_DEVELOPMENT
            const request = await fetch(url)
            const response = await request.json()
            setUsers(response)
        }
        getUsers()
    },[])
    return (
        <View style={styles.content}>
            {
               users.length === 0 ? <Text style={styles.title}>No users register</Text> :
               users.map((user,index)=>(
                    <Text
                        key={index}
                        onPress={()=>navigation.navigate('Details',user)}
                    >
                        {user.name}
                    </Text>
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    content:{
        marginTop: 10
    },
    title:{
        textAlign:'center',
        marginTop: 10,
        fontSize: 24,
    }
})

export default Users;