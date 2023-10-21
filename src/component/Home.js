import React, { useState,useEffect } from "react";
import { ScrollView, Button, Text, Image, View, StyleSheet, ImageBackground, Platform } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, TouchableOpacity } from "react-native";
import avatar from "../image/av.png";
import search from "../image/iconsearch.png";
import banner from "../image/banner.jpg";
import cb1 from "../image/combokm/cb1.jpg"
import cb2 from "../image/combokm/cb2.jpg"
import { categories,banners } from '../data';
const bannerChangeInterval = 5000; // 5 giây
const ios = Platform.OS === 'ios';
export default function Home({ navigation }) {
  const [activeCategory, setActiveCategory] = useState(1);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const bannerInterval = setInterval(() => {
      setCurrentBannerIndex((currentBannerIndex + 1) % banners.length);
    }, bannerChangeInterval);

    return () => {
      clearInterval(bannerInterval);
    };
  }, [currentBannerIndex]);
  return (
    <SafeAreaView style={ios ? {} : {}}>
     <View style={styles.container}>
             <View style={styles.containerHeader} >
              <Image source={avatar}style={styles.styleAvatar}></Image>
              <Image source={search}style={styles.styleSearch} ></Image>
              </View> 
              <View style={styles.account}>
                   <ImageBackground source={banner} style={styles.styleBanner}>
                         <Text style={styles.styleText1}>Nguyễn Chí Cường</Text>
                         <Text style={styles.styleText1}>THÀNH VIÊN</Text>
                   </ImageBackground>
                   <View style={styles.containerViandDrips}>
                          <View style={styles.containerVi}>
                               <Text style={styles.styleText2}>Trả trước</Text>
                               <Text styles={styles.styleText3}>0 đ</Text>
                          </View>
                          <View style={{width:50}}></View>
                          <View style={styles.containerDrips}>
                               <Text style={styles.styleText2}>Drips</Text>
                               <Text styles={styles.styleText3}>0 đ</Text>
                          </View>
                         </View>
              </View>
     </View>
     <View>
          <ScrollView>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={true}
            data={categories}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.flatListContainer}
            renderItem={({ item }) => {
              const isActive = item.id === activeCategory;
              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(item.id)}
                  style={[
                    styles.itemContainer,
                    {
                       backgroundColor:'#FFFFFF',
                      shadowColor: isActive ? '#000' : 'transparent',
                    },
                  ]}
                >
                  <View style={styles.imageContainer}>
                    <Image source={item.image} style={styles.itemImage} />
                  </View>
                   <View style={styles.textContainer}>
                 <Text style={styles.styleTextMenuItem}>{item.title}</Text>
                 </View>
                </TouchableOpacity>
                
              );
            }}
          />
          </ScrollView>
        </View> 
        <View>
          <ImageBackground source={banners[currentBannerIndex]} style={styles.bannerImage}></ImageBackground>
        </View>
        <View style={styles.containerKm}>
          <View>
              <Image source={cb1} style={styles.styleCombo}></Image>
              <Text>TẶNG HỘI CHỊ EM</Text>
              <Text>Từ 13/10-20/10</Text>
          </View>
          <View>
              <Image source={cb2} style={styles.styleCombo}></Image>
              <Text>BÁNH NGON 25K</Text>
              <Text>Từ 16/10-18/10</Text>
          </View>
          
        </View>
    </SafeAreaView>
  );
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:"100%",
  },
  containerHeader: {
    flexDirection: 'row',
  },
  styleAvatar: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  styleSearch: {
    width: 40,
    height: 40,
    marginLeft: 290,
    // marginTop:5
  },
  account: {
    width: 428,
    height: 250,
    backgroundColor: '#f0e2b1',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleBanner: {
    width: 380,
    height: 150,
    borderRadius: 10,
  },
  styleText1: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 10,
    marginTop: 10,
    fontFamily: 'Arial',
  },
  styleText2: {
    color: '#666666',
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 10,
    marginTop: 10,
    fontFamily: 'Arial',
  },
  styleText3: {
    color: '#440000',
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 10,
    marginTop: 10,
    fontFamily: 'Arial',
  },
  containerViandDrips: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between', // Đảm bảo khoảng cách đều nhau
    paddingHorizontal: 10, // Khoảng cách giữa Drips và Vi

  },
  containerVi: {
    width:150,
    height: 50,
    flexDirection: 'column',
    backgroundColor:"#99CCFF",
    borderRadius: 10,
    // shadowRadius: 5,
    marginLeft: 10,
  },
  containerDrips: {
    width:150,
    height: 50,
    flexDirection: 'column',
    backgroundColor:"#CC99CC",
    borderRadius: 10,
    // shadowRadius: 5,
    marginRight: 10,
  },
  styleIcon: {
    width: 20,
    height: 20,
  },
  iconWhite: {
    tintColor: '#FFFFFF',
  },
  flatListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    // padding: 4,
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 25,
  },
  textContainer: {
    padding: 4,
  },
  imageContainer: {
    width: 90,
    height: 90,
    borderRadius: 50,
    overflow: 'hidden',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 4,
    backgroundColor: '#FFFAF0',
  },
  styleTextMenuItem:{
    color: '#8B4513',
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 10,
    marginTop: 10,
    fontFamily: 'Arial',
  },
  bannerImage: {
    width: 400,
    height: 100, 
marginBottom:10,
marginTop:10,
borderRadius:10,
  },
  styleCombo:{
    height:100,
    width:100
  },
  containerKm:{
    flexDirection:"row",
    // marginTop:10,
    marginLeft:10,
   
  },
  combo:{
    flexDirection:"column",
    alignContent:"center",
    justifyContent:"center"
  }
});
