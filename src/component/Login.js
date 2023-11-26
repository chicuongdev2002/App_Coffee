import React, { useState, useRef } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View ,TextInput} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import logo from '../image/logo/logo.png';
import apple from '../image/logo/apple.png';
import fb from '../image/logo/fb.png';
import google from '../image/logo/google.png';
import { sendSmsVerification } from "../api/verify";

const Login = ({ navigation }) => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [otp, setOTP] = useState('110402');
  const [otpInput, setOTPInput] = useState('');
  const [showOTPInput, setShowOTPInput] = useState(false);
  const phoneInput = useRef(null);

  const onPressFlag = () => {
    phoneInput.current.selectCountry();
  };

  const handleSendOTP = () => {
    const twilioFunctionUrl = 'https://hc-5776.twil.io/sendsms';
    fetch(twilioFunctionUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: formattedValue,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.otp);
         setOTP(data.otp);
        setShowOTPInput(true);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.styleText}>Bắt đầu cuộc hành trình của bạn</Text>
      </View>
      <PhoneInput
        ref={phoneInput}
        defaultValue={value}
        defaultCode="VN"
        layout="first"
        onChangeText={(text) => setValue(text)}
        onChangeFormattedText={(text) => setFormattedValue(text)}
        countryPickerProps={{ withAlphaFilter: true }}
        withShadow
        autoFocus
        onPressFlag={onPressFlag}
      />
      <TouchableOpacity
        style={styles.buttonTiepTuc}
        onPress={handleSendOTP}
        setShowOTPInput={true}
      >
        <Text style={styles.buttonText}>Gửi mã</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonTiepTuc}
      onPress={()=>navigation.navigate("Otp")}
      >
        <Text>Tiếp tục xác nhận OTP</Text>
      </TouchableOpacity>
      <View style={styles.containerFotter}>
        <Image source={apple} style={styles.imageFooter} />
        <View style={styles.fb}>
          <Image source={fb} style={styles.imageFooter} />
        </View>
        <View style={styles.google}>
          <Image source={google} style={styles.imageFooter} />
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("MainApp")}>
          <Text style={styles.textFooter}>TIẾP TỤC NHƯ KHÁCH</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer2}>
        <Text>Bạn đã có tài khoản?</Text>
        <Text style={{ color: "#AA0000", fontWeight: 700 }}> Đăng nhập</Text>
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
    height: "100%",
  },
  styleText: {
    color: "#4c2f16",
    fontSize: 30,
    fontFamily: "Roboto",
    fontStyle: 'normal',
    fontWeight: '700',
  },
  logo: {
    width: 200,
    height: 200,
  },
  containerText: {
    marginTop: 10,
    marginBottom: 50,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  buttonTiepTuc: {
    backgroundColor: "#DDDDDD",
    width: 350,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  imageFooter: {
    width: 50,
    height: 50,
  },
  containerFotter: {
    flexDirection: 'row',
    marginTop: 10,
  },
  google: {
    marginTop: 5,
  },
  fb: {
    marginLeft: 10
  },
  textFooter: {
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "700",
    color: "#AA0000"
  },
  footer: {
    marginTop: 20,
  },
  footer2: {
    flexDirection: 'row',
    marginTop: 150,
  },
  otpInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#DDDDDD",
    width: 350,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;
