import { Image, Text, View, StyleSheet } from 'react-native';
import React from 'react';
import { IconButton } from 'react-native-paper';

const StoreItem = ({ item }) => (
  <View style={{ flexDirection: 'row', backgroundColor: '#fff', padding: 8, borderRadius: 6 }}>
    <Image style={{ width: 120, height: 120 }} source={item.image} />
    <View style={{ paddingLeft: 8 }}>
      <Text style={{ fontSize: 17, fontWeight: '700', marginBottom: 4 }}>{item.name}</Text>
      <Text style={{ fontSize: 14, color: '#777' }}>{item.address}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <IconButton icon="phone-outline" size={16} iconColor="#777" style={{ padding: 0, margin: 0 }} />
        <Text style={{ color: '#777' }}>{item.phone}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 'auto' }}>
        <Text style={[styles.stateItem, item.isOpen ? styles.openState : styles.closeState]}>
          {item.isOpen ? 'Mở' : 'Đóng'}
        </Text>
        <Text style={{ marginLeft: 4, color: '#777' }}>{item.time}</Text>
      </View>
    </View>
  </View>
);

export default StoreItem;

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