import { foodCategories } from '@/components/carte'
import Navbar from '@/components/navbar'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale } from 'react-native-size-matters'

const index = () => {
  return (
    <SafeAreaView>
      <View>
        <Navbar />
      </View>
      {/* start main container */}
      <View style={{ paddingHorizontal: moderateScale(10) }}>

        <View>
          <Text style={{ fontWeight: 600, fontSize: moderateScale(22), marginVertical: moderateScale(7)}}>
            Category
          </Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: moderateScale(10) }}>
            {foodCategories.map((data, index) => {
              return (
                <View key={index} style={{ width: '48%', height:'auto',backgroundColor:'white' ,borderRadius:moderateScale(10)}}>
                  <View style={{ width: '100%', height:moderateScale(150)}}>
                    <Image source={{ uri: data.image }} style={{ width: '100%', height: '100%', resizeMode: 'cover' ,borderTopRightRadius:10 ,borderTopLeftRadius:10 }} />
                  </View>
                  <View style={{paddingHorizontal:moderateScale(15) ,paddingVertical:moderateScale(7) }}>
                    <Text style={{fontSize:moderateScale(17),fontWeight:500}}>{data.category}</Text>
                  </View>
                </View>
              )
            })}
          </View>
        </View>

        <Text>try</Text>
        {/* end main container */}
      </View>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})