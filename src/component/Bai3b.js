import React, { useState } from "react";
import { Button,Text,TextInput,Image,View,Pressable,StyleSheet } from "react-native";
//import image from "../image/vs_blue.png"
import start from "../image/star.png"

export default function Bai3b({navigation}) {
    const [image,setImage]=useState(require("../image/vs_blue.png"));
    const [color,setColor]=useState("xanh");
return(
    <View style={styles.container}>
      
        <View style={styles.containerHeader}>
            <View>
            <Image source={image} style={styles.styleImage}></Image>
            </View>
             <View>
             <Text style={styles.styleText}>Điện Thoại Vsmart Joy 3 -{"\n"} Hàng chính hãng</Text>
         <Text>Màu: {color}</Text>
                    <View style={styles.containerHeader2}>
                    <Text style={styles.styleText4}>Cung cấp bởi</Text><Text style={styles.styleText3}>Tiki Tradding</Text>
                    </View>
                    <Text style={styles.styleTextPrice}>1.790.000 đ</Text>
             </View>
           
        </View>
        <View style={styles.containerfooter}>
                 <Pressable style={styles.styleButton1} onPress={()=>{setImage(require("../image/vs_silver.png")),setColor("bạc")}}>
                 </Pressable>
                 <Pressable style={styles.styleButton2} onPress={()=>{setImage(require("../image/vs_red.png")),setColor("đỏ")}}>
                 </Pressable>
                 <Pressable style={styles.styleButton3} onPress={()=>{setImage(require("../image/vs_black.png")),setColor("đen")}}>
                 </Pressable>
                 <Pressable style={styles.styleButton4} onPress={()=>{setImage(require("../image/vs_blue.png")),setColor("xanh")}}>
                 </Pressable>
                 <View style={styles.container2}>
            <Pressable style={styles.containerButton} onPress={()=>{navigation.navigate("xong")}}>
                <Text style={styles.styleText2}>XONG</Text>
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
        flex:3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:27,
    },
    containerHeader2:{
flexDirection:"row",
justifyContent: 'center',
alignItems: 'center',
    },
    styleImage:{
        width:112,
        height:132,
        flexShrink: 0,
        resizeMode: 'contain',
    },
    containerfooter:{
        flex:7,
       // flexShrink: 0,
        backgroundColor:"#C4C4C4",
        justifyContent:'center',
        alignItems:'center',
        height:"100%",
        width:"100%",
    },
    styleButton1:
    {
        width:85,
        height:80,
        backgroundColor:"#C5F1FB",
        flexShrink:0,
        marginTop:3,
    },
    styleButton2:
    {
        width:85,
        height:80,
        backgroundColor:"#F30D0D",
        flexShrink:0,
        marginTop:3,
    },
    styleButton3:
    {
        width:85,
        height:80,
        backgroundColor:"#000",
        flexShrink:0,
        marginTop:3,
    },
    styleButton4:
    {
        width:85,
        height:80,
        backgroundColor:"#234896",
        flexShrink:0,
        marginTop:3,
    },
styleText2:{
    color: "#F9F2F2",
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 'normal',
    fontFamily: 'Roboto',
    fontStyle:'normal'

},
containerButton:{
    width:326,
    height:44,
    flexShrink:0,
    borderRadius:10,
    backgroundColor:"rgba(25, 82, 226, 0.58)",
    justifyContent: 'center',
    alignItems: 'center',
},
container2:{
    justifyContent:'center',
    alignItems: 'center',
    marginTop:20,
},
styleText3:{
color:"#000",
fontFamily:"Roboto",
fontSize:"15px",
fontStyle:"normal",
fontWeight:"700",
lineHeight:"normal",
},
styleText4:{
    color:"#000",
    fontFamily:"Roboto",
    fontSize:"15px",
    fontStyle:"normal",
    fontWeight:"400",
    lineHeight:"normal",
    },
    styleTextPrice:{
        color: '#000',
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 'normal',
        fontFamily: 'Roboto',
    },
  });