import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const sign = () => {
  return (
    <SafeAreaView >
      <ScrollView showsVerticalScrollIndicator={false}>
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
            <TextInput placeholder='Enter the name' keyboardType='numeric' style={styles.inputField} />
          </View>
          <View>
            <Text style={styles.labelName}>Phone</Text>
            <TextInput placeholder='Enter the name' keyboardType='phone-pad' style={styles.inputField} />
          </View>
          <View>
            <Text style={styles.labelName}>BIO</Text>
            <TextInput placeholder='Enter the name' multiline style={styles.inputField} />
          </View>
          <View>
            <Text style={styles.labelName}>Address</Text>
            <TextInput placeholder='Enter the name' style={styles.inputField} />
          </View>
          <View>
            <Text style={styles.labelName}>Email</Text>
            <TextInput placeholder='Enter the name' keyboardType='email-address' style={styles.inputField} />
          </View>
          <View>
            <Text style={styles.labelName}>Password</Text>
            <TextInput placeholder='Enter the name' secureTextEntry style={styles.inputField} />
          </View>
          <TouchableOpacity style={{ marginVertical: moderateScale(20), backgroundColor: 'orange',paddingVertical:moderateScale(7) }}>
            <Text style={{
              textAlign: 'center', fontWeight: 500,
              fontSize: moderateScale(18),color:'white'
            }}>
              Submit
            </Text>
          </TouchableOpacity>

          <View>
              <View></View>
              <Text>or</Text>
               <View></View>
          </View>
        </View>
      </ScrollView>
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