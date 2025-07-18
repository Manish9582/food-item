import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const Navbar = () => {
    return (
        <>
            <View style={{ paddingHorizontal: moderateScale(15), marginTop: moderateScale(3) }}>
                <View style={[styles.same ,{  }]}>
                    <View style={{ width: 45, height: 45, }}>
                        <Image source={{ uri: 'https://i.pinimg.com/736x/7a/af/21/7aaf217081234e92c8a26131b44da02e.jpg' }}
                            style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 50 }}
                        />
                    </View>
                    <View>
                        <AntDesign name="setting" size={24} color="black" />
                    </View>
                </View>
                <View style={[styles.same ,{ borderWidth:1, borderColor:'#c4c4c4' ,paddingHorizontal:moderateScale(5),marginTop:moderateScale(5) ,borderRadius:moderateScale(5) }]}>
                    <TextInput placeholder='Search item ...' />
                    <Ionicons name="search" size={24} color="black" />
                </View>
            </View>
        </>
    )
}

export default Navbar

const styles = StyleSheet.create({
    same: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})