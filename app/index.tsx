import { Link, Redirect } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, verticalScale } from 'react-native-size-matters';
const index = () => {
  if (4 == 4) {
    return <Redirect href={'/(tabs)'} />
  }
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'space-between' }}>
      <View></View>

      <View style={{ paddingHorizontal: moderateScale(30) }}>
        <View style={{ width: '100%', height: verticalScale(270), margin: 'auto' }}>
          <Image source={require('../assets/images/logo.png')} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
        </View>
        <View style={{ marginBottom: moderateScale(30) }}>
          <Text style={{ fontSize: moderateScale(20), fontWeight: 600, width: '100%', textAlign: 'center' }}>
            “Food is not just fuel it’s joy on a plate.
            Every bite tells a story of love and flavor.”
          </Text>
        </View>
      </View>
      <View style={styles.sectionsButton}>
        <TouchableOpacity style={styles.bttonSign}>
          <Link href='/sign'>
            <Text style={{ fontSize: moderateScale(20), fontWeight: 600 }}>Let's get started</Text>
          </Link>
        </TouchableOpacity >
        <TouchableOpacity>
          <Text style={{ fontSize: moderateScale(16), fontWeight: 500, color: 'white', textDecorationLine: 'underline' }}>
            <Link href='/login'>
              I alredy have a account
            </Link>
          </Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView >
  )
}

export default index

const styles = StyleSheet.create({
  sectionsButton: {
    flex: 0.6,
    backgroundColor: 'orange',
    borderTopEndRadius: moderateScale(40),
    borderTopStartRadius: moderateScale(40),
    padding: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    gap: moderateScale(20)
  },
  bttonSign: {
    backgroundColor: 'white',
    paddingHorizontal: moderateScale(60),
    paddingVertical: moderateScale(10),
    borderRadius: moderateScale(15)
  }
})