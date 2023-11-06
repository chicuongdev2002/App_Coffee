import React, { useState } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, TextInput, Button,Picker } from "react-native";

export default function ProductDetail({ route }) {
  const { item } = route.params;
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("S"); // Mặc định là size "S"
  const [totalPrice, setTotalPrice] = useState(item.priceS *quantity); // Sử dụng state để lưu tổng giá tiền
 
  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateTotalPrice(selectedSize, newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateTotalPrice(selectedSize, newQuantity);
    }
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    updateTotalPrice(size, quantity);
  };

  const updateTotalPrice = (size, quantity) => {
    let newPrice = 0;
    if (size === "S") {
      newPrice = item.priceS;
    } else if (size === "M") {
      newPrice = item.priceM;
    } else if (size === "L") {
      newPrice = item.priceL;
    }
    const newTotalPrice = newPrice * quantity;
    setTotalPrice(newTotalPrice);
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={item.image} style={styles.productImage} />
      <View style={{backgroundColor:"#EEEEEE",borderRadius:20}}>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.productName}>{item.name}</Text>
        <View style={{width:200}}></View>
        <Text style={styles.productPrice}> {selectedSize === "S"
          ? item.priceS
          : selectedSize === "M"
          ? item.priceM
          : item.priceL}
        đ</Text>
        </View>
      <Text style={styles.productNote}>{item.note}</Text>
      <View style={styles.sizeButtonsContainer}>
        <TouchableOpacity
          style={[
            styles.sizeButton,
            {
              backgroundColor: selectedSize === "S" ? "#AA0000" : "#FFFFFF",
            },
          ]}
          onPress={() => handleSizeChange("S")}
        >
          <Text
            style={{
              color: selectedSize === "S" ? "#FFFFFF" : "#000000",
            }}
          >
         S
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.sizeButton,
            {
              backgroundColor: selectedSize === "M" ? "#AA0000" : "#FFFFFF",
            },
          ]}
          onPress={() => handleSizeChange("M")}
        >
          <Text
            style={{
              color: selectedSize === "M" ? "#FFFFFF" : "#000000",
            }}
          >
            M
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.sizeButton,
            {
              backgroundColor: selectedSize === "L" ? "#AA0000" : "#FFFFFF",
            },
          ]}
          onPress={() => handleSizeChange("L")}
        >
          <Text
            style={{
              color: selectedSize === "L" ? "#FFFFFF" : "#000000",
            }}
          >
            L
          </Text>
        </TouchableOpacity>
      </View>

      </View>
      
      {/* <Text style={styles.productSize}>Size: {item.size}</Text> */}
<View style={{flexDirection:'row',marginTop:100,flex:1}}>
<View style={styles.quantityContainer}>
    <View>
    <TouchableOpacity onPress={handleDecrement} style={{height:30,width:30,borderWidth:1,justifyContent:'center',alignItems:'center',alignContent:'center'}}>
          <Text style={styles.quantityButton}>-</Text>
        </TouchableOpacity>
    </View>
    <View>
    <TextInput style={styles.quantityInput} value={quantity.toString()} editable={false} />
    </View>
     <View>
     <TouchableOpacity onPress={handleIncrement} style={{height:30,width:30,borderWidth:1,justifyContent:'center',alignItems:'center',alignContent:'center'}}>
          <Text style={styles.quantityButton}>+</Text>
        </TouchableOpacity>
     </View>
      
      </View>
      <View style={{flex:7}}>
      <TouchableOpacity style={{backgroundColor:"#AA0000",alignContent:'center',alignItems:'center',justifyContent:'center',width:200,height:50}} >
      <Text style={{ color: '#FFFFFF', textAlign: 'center' }}>{`Thêm${totalPrice}đ`}</Text>
      </TouchableOpacity>
      </View>
   
</View>
   
    </ScrollView>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  sizePickerContainer: {
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  sizePicker: {
    height: 40,
  },
  productImage: {
    width: 200,
    height: 400,
    alignSelf: "center",
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    textAlign: "center",
  },
  productNote: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
  },
  productPrice: {
    fontSize: 18,
    color: "#AA0000",
    fontWeight: "bold",
    textAlign: "center",
  },
  productSize: {
    fontSize: 16,
    margin: 10,
    textAlign: "center",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 3,
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityInput: {
    fontSize: 20,
    textAlign: "center",
  },
  sizeButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
    marginTop:20
  },
  sizeButton: {
    width: 80,
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  quantityButton: {
    fontSize: 24,
  },
  quantityInput: {
    fontSize: 20,
    marginHorizontal: 20,
  },
};
