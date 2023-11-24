import { FlatList, Image, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import React from 'react';
import { stores as DATA } from '../data/store';
import { SafeAreaView } from 'react-native-safe-area-context';
import StoreItem from './StoreItem';

const Store = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 12,
          height: 76,
          alignItems: 'center',
          backgroundColor: '#fff',
        }}
      >
        <Image style={{ width: 40, height: 40 }} source={require('../image/av.png')} />
        <Image style={{ width: 26, height: 26 }} source={require('../image/iconsearch.png')} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 12,
          paddingVertical: 20,
        }}
      >
        <View style={{ flexDirection: 'row', position: 'relative', flex: 1 }}>
          <TextInput
            placeholder="Tìm địa chỉ"
            style={{
              backgroundColor: '#fff',
              color: '#777',
              borderRadius: 50,
              width: '100%',
              paddingVertical: 6,
              paddingLeft: 12,
              outline: 'none',
            }}
          />
          <Image
            style={{ width: 16, height: 16, position: 'absolute', top: '50%', right: 8, transform: 'translateY(-50%)' }}
            source={require('../image/iconsearch.png')}
          />
        </View>
        <Image style={{ width: 22, height: 22, marginHorizontal: 12 }} source={require('../image/map.png')} />
        <Text>BẢN ĐỒ</Text>
      </View>
      <SafeAreaView style={{ paddingHorizontal: 12, flex: 1 }}>
        <ScrollView>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <StoreItem item={item} />}
            ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Store;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stateItem: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    fontSize: 14,
    color: '#fff',
    borderRadius: 50,
  },
  openState: {
    backgroundColor: '#3FB644',
  },
  closeState: {
    backgroundColor: '#999',
  },
});