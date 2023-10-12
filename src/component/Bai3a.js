import React from "react";
import { Button,Text,TextInput,Image,View,Pressable,StyleSheet } from "react-native";
import image from "../image/vs_blue.png"
import start from "../image/star.png"
export default function Bai3a({navigation}) {
return(
    <View style={styles.container}>
        <Image source={image} style={styles.styleImage}></Image>
        <View>
           <View style={styles.containerHeader}>
           <Text style={styles.styleText}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
            </View>
             <View style={styles.containerStart}>

                <Image source={start} style={styles.styleStart}></Image>
                <Image source={start} style={styles.styleStart}></Image>
                <Image source={start} style={styles.styleStart}></Image>
                <Image source={start} style={styles.styleStart}></Image>
                <Image source={start} style={styles.styleStart}></Image>
                <Text style={styles.styleText}>(Xem 829 đánh giá)</Text>
             </View>
             <View style={styles.containerPrice}>
                <Text style={styles.styleTextPrice}>1.790.000 đ</Text>
                <Text style={styles.styleTextPrice2}>1.790.000 đ</Text>
             </View>
             <View>
                <Text style={styles.styleText2}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
             </View>
             <View>
             <Pressable style={styles.buttonColor} onPress={()=>navigation.navigate("chonmau")}>
                <Text style={styles.styleText3}>4 MÀU, CHỌN MÀU</Text>
             </Pressable>
             </View>
             <View style={styles.containerFooter}>
                <Pressable style={styles.containerButton}>
                    <Text style={styles.styleTextButton}>CHỌN MUA</Text>
                </Pressable>
             </View>
             
        </View>
    </View>
    
   

);

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    containerHeader:{
  justifyContent: 'center',
  alignItems: 'center',
    },
    containerButton:{
        width:326,
        height:44,
        flexShrink:0,
        borderRadius:10,
        backgroundColor:"#EE0A0A",
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.25)', // Màu của shadow
        shadowOffset: { width: 0, height: 4 }, // Độ dịch chuyển của shadow
        shadowOpacity: 1, // Độ mờ của shadow
        shadowRadius: 4, // Bán kính của shadow
        borderRadius: 10, // Độ cong của viền
    borderWidth: 1, // Độ dày của viền
    borderColor: '#CA1536', // Màu viền
    },
    containerFooter:{
marginTop:10,
alignContent: 'center',
justifyContent:"center",
alignItems: 'center',
    },
    styleText:{
        color: '#000',
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 'normal',
        fontFamily: 'Roboto',
    },
    styleImage:{
        width:301,
        height:361,
        flexShrink: 0,
        resizeMode: 'contain',
    },
    styleStart:{
        width:23,
        height:25,
        flexShrink: 0,
    
    },
    containerStart:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:27,
    },
    styleTextPrice:{
        color: '#000',
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 'normal',
        fontFamily: 'Roboto',
    },
    styleText3:{
        color: '#000',
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 'normal',
        fontFamily: 'Roboto',
    },
    styleTextPrice2:{
        color: "#A9A9A9",
        fontSize: 15,
        fontWeight: '700',
        lineHeight: 'normal',
        fontFamily: 'Roboto',
        textDecorationLine: 'line-through',
    },
    containerPrice:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    styleText2:{
        color: "#FA0000",
        fontSize: 12,
        fontWeight: '700',
        lineHeight: 'normal',
        fontFamily: 'Roboto',
    },
    buttonColor:{
        width: 332,
        height: 34,
        backgroundColor: 'rgba(196, 196, 196, 0.00)',
        flexShrink: 0,
        borderRadius: 10,
        border: "1px solid rgba(0, 0, 0, 0.46)",
        //box: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        justifyContent: 'center',
        alignItems: 'center',
    },
    styleTextButton:{
color: "#F9F2F2",
fontWeight: "700",
fontFamily: "Roboto",
fontStyle:"normal",
lineHeight:"normal",
    }
  });