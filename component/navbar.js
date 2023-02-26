import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
    TextInput,
    Image
} from 'react-native';

function Navbar() {
    return (
        <View style={style.bar}>
            <TouchableOpacity style={style.Image}>
                <Image source={require('../images/Mindcafelogo.png')} style={style.Image} />
            </TouchableOpacity>
            <View style={style.search}>
                <TextInput
                    style={style.searchtext}
                    // onChangeText={onChangeText}
                    // value={text}
                    placeholder="search"
                />
                <TouchableOpacity >
                <Image source={require('../images/search.png')} style={style.icon} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
            <Image source={require('../images/bell.png')} style={style.bell} />
            </TouchableOpacity>
        </View>
    )
}
const style = StyleSheet.create({
    bar: {
        height: 60,
        margin: 6,
        flexDirection: 'row'
    },
    Image: {
        width: 50,
        height: 50,
        margin: 2,

    },
    searchtext:{
        left:8,
        flex:0.8,
        fontSize:20,
        color:'##FCFCFC',
        backgroundColor:'##FCFCFC',

    },
    search:{
        flexDirection:'row',
        color:'##FCFCFC',
        backgroundColor:'##FCFCFC',
        marginLeft:10,
        margin:5,
        width:230,
        borderRadius:20
    },
    icon:{
        width:22,
        height:22,
        right:10,
        margin:10,
        left:25
    },
    bell:{
        width:23,
        height:30,
        margin:15
    }
})

export default Navbar