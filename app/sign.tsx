import { Link } from 'expo-router'
import React from 'react'
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const sign = () => {
  let instents = useSafeAreaInsets();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView   behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: instents.bottom + 30 }}>
          <View style={{ width: '100%', height: verticalScale(200) }}>
            <Image source={require('@/assets/images/logo.png')} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
          </View>
          <View style={{ paddingHorizontal: moderateScale(20) }}>
            <Text style={{ fontSize: moderateScale(30), fontWeight: 600, marginBottom: moderateScale(20), textAlign: 'center', textDecorationLine: 'underline' }}>
              Create Account
            </Text>

            <View>
              <Text style={styles.labelName}>Name</Text>
              <TextInput placeholder='Enter the name' style={styles.inputField} />
            </View>
            <View>
              <Text style={styles.labelName}>Age</Text>
              <TextInput placeholder='Enter the age' keyboardType='numeric' style={styles.inputField} />
            </View>
            <View>
              <Text style={styles.labelName}>Phone</Text>
              <TextInput placeholder='Enter the phone' keyboardType='phone-pad' style={styles.inputField} />
            </View>
            <View>
              <Text style={styles.labelName}>BIO</Text>
              <TextInput placeholder='Enter the bio' multiline style={styles.inputField} />
            </View>
            <View>
              <Text style={styles.labelName}>Address</Text>
              <TextInput placeholder='Enter the address' style={styles.inputField} />
            </View>
            <View>
              <Text style={styles.labelName}>Email</Text>
              <TextInput placeholder='Enter the email' keyboardType='email-address' style={styles.inputField} />
            </View>
            <View>
              <Text style={styles.labelName}>Password</Text>
              <TextInput placeholder='Enter the password' secureTextEntry style={styles.inputField} />
            </View>
            <TouchableOpacity style={{ marginTop: moderateScale(15), backgroundColor: 'orange', paddingVertical: moderateScale(10),borderRadius:moderateScale(7) }}>
              <Text style={{
                textAlign: 'center', fontWeight: 500,
                fontSize: moderateScale(18), color: 'white'
              }}>
                Submit
              </Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignItems: 'center', gap: moderateScale(7), marginVertical: moderateScale(3) }}>
              <View style={{ borderWidth: 1, borderColor: 'orange', width: '45.70%' }}></View>
              <Text style={{ fontSize: moderateScale(16), fontWeight: 600 }}>or</Text>
              <View style={{ borderWidth: 1, borderColor: 'orange', width: '45.70%' }}></View>
            </View>
            <View>
              <Link href={'/login'} style={{ textAlign: 'center', fontSize: moderateScale(20), fontWeight: 600 }}>Login</Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default sign

const styles = StyleSheet.create({
  inputField: {
    borderWidth: 1,
    borderColor: '#bdbebf',
    borderRadius: moderateScale(5),
    marginBottom: moderateScale(7)
  },
  labelName: {
    fontWeight: 400,
    fontSize: moderateScale(17),
    marginBottom: moderateScale(2)
  }
})