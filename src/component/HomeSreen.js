import React, { useEffect } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import image from "../image/background.jpg"

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    // Chờ vài giây trước khi chuyển đến màn hình Home
    const delay = 2000; 

    const timeoutId = setTimeout(() => {
      // Điều hướng đến màn hình Home sau khi kết thúc đợi
      navigation.replace("Login");
    }, delay);

    // Hủy timeout nếu component bị hủy trước khi đợi kết thúc
    return () => clearTimeout(timeoutId);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default HomeScreen;
