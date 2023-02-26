import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

export default function List() {
    const data = [
        {
            name: "Max",
            text: "How to do you dispose your diaries or personal writing? for me i have aroundHow to do you dispose your diaries or personal writing? for me i have aroundHow to do you dispose your diaries or personal writing? for me i have aroundHow to do you dispose your diaries or personal writing? for me i have aroundHow to do you dispose your diaries or personal writing? for me i have around"
        },
        {
            name: "Mahesh",
            text: "How to do you dispose your diaries or personal writing? for me i have aroundHow to do you dispose your diaries or personal writing? for me i have aroundHow to do you dispose your diaries or personal writing? for me i have aroundHow to do you dispose your diaries or personal writing? for me i have aroundHow to do you dispose your diaries or personal writing? for me i have around"
        },
        {
            name: "Mahesh",
            text: "How to do you dispose your diaries or personal writing? for me i have aroundHow to do you dispose your diaries or personal writing? for me i have aroundHow to do you dispose your diaries or personal writing? for me i have aroundHow to do you dispose your diaries or personal writing? for me i have aroundHow to do you dispose your diaries or personal writing? for me i have around"
        }
    ]
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) =>
                    <TouchableOpacity style={styles.container}>
                        
                        <View style={styles.listuser}>
                        <Image source={require('../images/userimage.png')} style={styles.usericon}/>
                            <Text style={styles.name}>{item.name}</Text>
                        </View>
                        <Text style={styles.text}>{item.text}</Text>
                    </TouchableOpacity>
                } />
        </View>
    )
}

const styles = StyleSheet.create({
    name: {
        fontSize: 16,
        margin: 10
    },
    listuser: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 8,
        margin: 10
    },
    container: {
        backgroundColor: "#FCFCFC",
        marginLeft: 10,
        marginRight: 10,
        margin: 5,
        height: 200,
        borderRadius: 20,
    },
    usericon:{
        width:27,
        height:27,
        margin:10
    }

})