import React,{ useState, useRef } from "react";
import { ImageBackground, StyleSheet, View, Image, Text, TextInput,Pressable,TouchableOpacity } from "react-native";
import logo from '../image/logo/logo.png'
import covn from '../image/logo/covn.png'
import fb from '../image/logo/fb.png'
import apple from '../image/logo/apple.png'
import google from '../image/logo/google.png'
import MainApp from "./MainApp";
import Home from "./Home";
import PhoneInput from "react-native-phone-number-input";
import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal'
import { sendSmsVerification } from "../api/verify";
// import {sendSmsVerification} from "../api/verifysms"
const Login = ({ navigation }) => {
  const [value, setValue] = useState("");
 const [formattedValue, setFormattedValue] = useState("");
 const phoneInput = useRef(null);
 const onPressFlag = () => {
  phoneInput.current.selectCountry();
};
  return (
    <View style={styles.container}>
       <View>
        <Image source={logo} style={styles.logo}></Image>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.styleText}>Bắt đầu cuộc hành trình của bạn</Text>
        </View>
        <PhoneInput
           ref={phoneInput}
           defaultValue={value}
           defaultCode="VN"
           layout="first"
           onChangeText={(text) => {
             setValue(text);
           }}
           onChangeFormattedText={(text) => {
             setFormattedValue(text);
           }}
           countryPickerProps={{ withAlphaFilter: true }}
           withShadow
           autoFocus
           onPressFlag={onPressFlag}
           
         />
       <View style={styles.buttonTiepTuc}>
       <TouchableOpacity
           style={styles.button}
           onPress={() => {
            sendSmsVerification(formattedValue).then((sent) => {
              navigation.navigate("MainApp", { phoneNumber: formattedValue });
              console.log(formattedValue);
              });              
            }}
         >
           <Text style={styles.buttonText}>Tiếp tục</Text>
         </TouchableOpacity>
       </View>
       <View style={styles.containerFotter}>
        <Image source={apple} style={styles.imageFooter}></Image>
        <View style={styles.fb} >
        <Image source={fb} style={styles.imageFooter}></Image>
        </View>
        <View style={styles.google}>
        <Image source={google} style={styles.imageFooter}></Image>
        </View>
       </View>
       <View style={styles.footer}>
        <TouchableOpacity onPress={()=>navigation.navigate("MainApp")}> 
           <Text style={styles.textFooter}>TIẾP TỤC NHƯ KHÁCH</Text>
           </TouchableOpacity>
       </View>
       <View style={styles.footer2}>
        <Text>Bạn đã có tài khoản?</Text>
        <Text style={{color:"#AA0000",fontWeight:700}}> Đăng nhập</Text>
       </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0e2b1",
    width: "100%",
    height: "100%"
  },
  styleText:{
    color:"#4c2f16",
    fontSize:30,
    fontFamily:"Roboto",
    fontStyle:'normal',
    fontWeight:'700',
  },
  logo:{
    width: 200,
    height: 200,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  covnImage: {
    width: 40,
    height: 40,
  },
  plus84Text: {
    color: "#4c2f16",
    fontSize: 20,
    fontFamily: "Roboto",
    fontStyle: 'normal',
    fontWeight: '700',
    marginRight: 10,
  },
  leftSection: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    justifyContent: 'center',
    borderRadius: 5,
  },
  rightSection: {
    flex: 7,
    backgroundColor: "#FFFFFF",
    width: 250,
    height: 60,
    borderRadius: 5,
  },
  phoneNumberInput: {
    flex: 1,
  },
  containerText:{
    marginTop:10,
    marginBottom:50,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  textTiepTuc:{

  },
  buttonTiepTuc:{
    backgroundColor:"#DDDDDD",
    width:350,
    height:50,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  imageFooter:{
    width: 50,
    height: 50,
  },
  containerFotter:{
    flexDirection: 'row',
    marginTop: 10,
  },
  google:{
    marginTop: 5,
  },
  fb:{
    marginLeft:10
  },
  textFooter:{
    fontFamily:"Roboto",
    fontSize:15,
    fontWeight:"700",
    color:"#AA0000"
  },
  footer:{
    marginTop: 20,
  },
  footer2:{
    flexDirection: 'row',
    marginTop: 150,
  }
});

export default Login;
