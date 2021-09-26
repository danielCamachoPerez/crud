import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import Users from '../components/Users';

const Home = (props) => {
    return (
        <View style={styles.content}>
            <Users {...props} />
            <View style={styles.btnCreate}>
                <Button
                    title='Create new user' 
                    onPress={()=>props.navigation.push('New User')}
                />
            </View>
        </View> );
}

const styles = StyleSheet.create({
    content:{
        marginHorizontal: 5
    },
    btnCreate:{
        marginTop: 10
    }
})

export default Home;