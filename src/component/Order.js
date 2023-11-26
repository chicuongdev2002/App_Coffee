import React, { useState,useEffect } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, FlatList, TextInput } from "react-native";
import search from '../image/iconsearch.png';
import axios from 'axios'; // Import thư viện axios
import { categories } from '../data'; // Import danh sách danh mục
import { products } from '../data/product'; // Import danh sách sản phẩm
import ProductDetail  from "./ProductDetail";
export default function DatHang({navigation,route}) {
  const[apiData,setApiData]=useState([]);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null); // Thêm biến trạng thái selectedProduct
  const [flatListKey, setFlatListKey] = useState(Date.now().toString()); // Key cho FlatList
  useEffect(() => {
    filteredProducts;
    // Gọi API ở đây sau khi component đã được mount
    fetchDataFromApi();

    if (route.params && route.params.categoryId) {
         // Sử dụng setTimeout để đảm bảo giá trị selectedCategory được cập nhật sau khi setState hoàn thành
    setTimeout(() => {
      setSelectedCategory(route.params.categoryId);
      setFlatListKey(Date.now().toString());
    }, 0);
    }
  }, [route.params]);

//   Lọc danh sách sản phẩm dựa trên danh mục và tìm kiếm
  const filteredProducts = products.filter((product) => {
    // Lọc theo danh mục (selectedCategory) và tìm kiếm (searchText)
    return (
      (selectedCategory === null || product.categorie === selectedCategory) &&
      (searchText === "" ||
        product.name.toLowerCase().includes(searchText.toLowerCase()))
    );
  });
  const fetchDataFromApi = async () => {
    try {
      const response = await axios.get('https://6562df38ee04015769a69d38.mockapi.io/categories'); // Thay URL_API bằng URL thực tế của API
      setApiData(response.data); // Lưu dữ liệu từ API vào state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (

      <View style={styles.scrollContainer}>
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              placeholder="Tìm kiếm tên món ăn"
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
            />
            <Image source={search} resizeMode="stretch" style={styles.searchIcon} />
          </View>
        </View>
        <View style={styles.categoryListContainer}>
          <FlatList
           key={flatListKey} // Thêm key vào FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              const isActive = item.id === selectedCategory;
              return (
                <TouchableOpacity
                  onPress={() => setSelectedCategory(item.id)}
                  style={[
                    styles.categoryItem,
                    {
                        shadowColor: selectedCategory === item.id ? "#AA0000" : "#000000",
                    },
                  ]}
                >
                  <Image source={item.image} style={styles.categoryImage} />
     
                  <Text style={{textAlign:'center', color: selectedCategory === item.id ? "#AA0000" : "#000000"}}>{item.title}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
          {/* Sử dụng FlatList để hiển thị danh sách sản phẩm */}
<ScrollView style={styles.container}>
<View style={styles.product}>
     <FlatList
           key={selectedCategory} // Thêm key vào FlatList
        horizontal={false}
        showsHorizontalScrollIndicator={false}
          data={filteredProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            //Khi sản phẩm được chọn
            <TouchableOpacity  onPress={() =>navigation.navigate("ProductDetail",{item}) }>
  <View key={item.id} style={styles.productContainer}>
                <View style={{flex:3}}>
                <Image source={item.image} style={styles.productImage} />
                </View>
           <View style={{flex:5}} >
           <Text style={styles.productName}>{item.name}</Text>
           <Text style={styles.productNote}>{item.note}</Text>
           </View>
          <View style={{flex:2}}>
          <Text style={styles.productPrice}>{item.priceS}đ</Text>
          </View>
            </View>
            </TouchableOpacity>
          )}
        />
</View>
</ScrollView>
      </View>
  );
}
const styles = {
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
    },
    container2: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
      },
    scrollContainer: {
      flex: 1,
      backgroundColor: "#ffffff",
    },
    searchContainer: {
      backgroundColor: "#ffffff",
      paddingTop: 20,
      paddingHorizontal: 18,
    },
    searchBar: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#f8f8ff",
      borderRadius: 10,
    //   paddingVertical: 5,
    //   paddingHorizontal: 8,
    height: 40,
      marginBottom: 15,
    },
    searchInput: {
      color: "#dddddd",
      fontSize: 15,
      marginRight: 4,
      flex: 1,
      height: 40,
    },
    searchIcon: {
      width: 19,
      height: 20,
    },
    categoryListContainer: {
      paddingHorizontal: 18,
    },
    categoryItem: {
      backgroundColor: '#FFFFFF',
      shadowColor: 'transparent',
      marginRight: 5,
    //   padding: 10,
      borderRadius: 10,
      alignItems: 'center',
    },
    categoryImage: {
      width: 80,
      height: 80,
      marginBottom: 5,
    },
    categoryText: {
      textAlign: 'center',
    },
    // Styles for products
    productImage: {
      width: 100,
      height: 100,
    },
    productName: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 8,
    },
    productPrice: {
      fontSize: 14,
      color: '#AA0000',
      fontWeight:700
    },
    productNote: {
      fontSize: 12,
      color: '#888',
    },
    productContainer:{
        flexDirection: 'row',
        flex:1,
        borderWidth: 1,  // Độ dày của viền
        borderColor: "#ddd",  // Màu viền
        padding: 10,  // Khoảng cách giữa viền và nội dung sản phẩm
        // marginBottom: 10,  // Khoảng cách giữa các sản phẩm
        
    },
    product:{
        marginTop:0
    }
  };
