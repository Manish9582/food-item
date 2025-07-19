import { foodCategories, popularItems } from '@/components/carte'
import foodList from '@/components/foodList.json'
import Navbar from '@/components/navbar'
import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
const { width } = Dimensions.get('window')
const index = () => {
  console.log(foodList)

  return (
    <SafeAreaView>
      <View>
        <Navbar />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* start main container */}
        <View style={{ paddingHorizontal: moderateScale(10) }}>

          <View>
            <Text style={{ fontWeight: 600, fontSize: moderateScale(22), marginVertical: moderateScale(7) }}>
              Categories
            </Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: moderateScale(10) }}>
              {foodCategories.map((data, index) => {
                return (
                  <View key={index} style={{ width: '48%', height: 'auto', backgroundColor: 'white', borderRadius: moderateScale(10) }}>
                    <View style={{ width: '100%', height: moderateScale(150) }}>
                      <Image source={{ uri: data.image }} style={{ width: '100%', height: '100%', resizeMode: 'cover', borderTopRightRadius: 10, borderTopLeftRadius: 10 }} />
                    </View>
                    <View style={{ paddingHorizontal: moderateScale(15), paddingVertical: moderateScale(7) }}>
                      <Text style={{ fontSize: moderateScale(17), fontWeight: 500 }}>{data.category}</Text>
                    </View>
                  </View>
                )
              })}
            </View>
          </View>
          {/* popular item list start*/}
          <View>
            <Text style={{ fontWeight: 600, fontSize: moderateScale(22), marginVertical: moderateScale(7) }}>
              Popular Items
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {popularItems.flatMap((cate) =>
                cate.topItems.map((data: any, index) => (
                  <View style={{ width: scale(80), height: verticalScale(70), marginLeft: moderateScale(data.ml) }} key={`${cate.id}-${index}`}>
                    <Image source={{ uri: data.image }} style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: moderateScale(50) }} />
                  </View>
                ))
              )}
            </ScrollView>
          </View>
          {/* popular item list end*/}

          {/* print whole json data start */}

          <View>
            <Text style={{ fontWeight: 600, fontSize: moderateScale(22), marginVertical: moderateScale(7) }}>
              Categories
            </Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: moderateScale(10) }}>
              {foodList.map((data, index) => {
                return (
                  <View key={index} style={{ width: '48%', height: 'auto', backgroundColor: 'white', borderRadius: moderateScale(10) }}>
                    <View style={{ width: '100%', height: moderateScale(150) }}>
                      <Image source={{ uri: data.image }} style={{ width: '100%', height: '100%', resizeMode: 'cover', borderTopRightRadius: 10, borderTopLeftRadius: 10 }} />
                    </View>
                    <View style={{ paddingHorizontal: moderateScale(15), paddingVertical: moderateScale(7) }}>
                      <Text style={{ fontSize: moderateScale(17), fontWeight: 500 }}>{data.category}</Text>
                    </View>
                  </View>
                )
              })}
            </View>
          </View>
          {/* print whole json data start */}


        </View>
        {/* end main container */}
      </ScrollView>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})