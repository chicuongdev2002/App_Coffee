import React, { useState }from "react";
import { useRoute } from "@react-navigation/native";
import { Button,Text,TextInput,Image,View,Pressable,StyleSheet ,ImageBackground} from "react-native";
import image from "../image/background.jpg"
export default function HomeSreen({navigation}) {

return(
    <View style={styles.container}>
    </View>

);

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        height:844,
        width:390,
      },
  });