import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView, SectionList, Pressable } from 'react-native';
import React from 'react';
import { Button, Icon } from 'react-native-paper';

const Other = () => {
  return (
    <View style={styles.container}>
      <Button
        mode="outlined"
        icon="chevron-down"
        textColor="#fff"
        style={{ borderColor: '#fff', width: 145, alignSelf: 'flex-end', marginTop: 26, marginRight: 20 }}
        contentStyle={{ flexDirection: 'row-reverse', width: 126, height: 34 }}
        labelStyle={{ fontSize: 13 }}
      >
        Tiếng Việt
      </Button>
      <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', paddingHorizontal: 20 }}>
        <Image source={require('../image/av.png')} style={{ width: 90, height: 90 }} />
        <View>
          <Text style={{ fontSize: 16, color: '#fff' }}>Đặng Thị Quyền Cơ | THÀNH VIÊN</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}>
            <Image source={require('../image/medal.png')} style={{ width: 25, height: 25 }} />
            <Text style={{ color: '#fff', fontSize: 16, marginLeft: 4 }}>DRIPS: 0</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('../image/wallet.png')} style={{ width: 25, height: 25 }} />
              <Text style={{ color: '#fff', fontSize: 16, marginLeft: 4 }}>Trả trước: 0 đ</Text>
            </View>
            <Button
              mode="contained"
              textColor="#B3282D"
              style={{ backgroundColor: '#E0D7BF' }}
              contentStyle={{ width: 90, height: 25 }}
              labelStyle={{ fontSize: 13, margin: 0 }}
            >
              KÍCH HOẠT
            </Button>
          </View>
        </View>
      </View>
      <View style={styles.body}>
          <ScrollView>
            <View>
              <View style={{ marginTop: 24 }}>
                <Text style={styles.sectionHeader}>Tài Khoản</Text>
                <View style={{ paddingHorizontal: 15, paddingVertical: 8 }}>
                  <Pressable
                    style={[
                      styles.sectionItemContainer,
                      {
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        borderBottomWidth: 1,
                        borderColor: '#E0D7BF',
                      },
                    ]}
                  >
                    <Image
                      source={require('../image/otherpage/user.png')}
                      style={{ width: 24, height: 24, marginLeft: 10, marginRight: 18 }}
                    />
                    <Text style={{ marginRight: 'auto' }}>Hồ Sơ</Text>
                    <Icon source="chevron-right" size={20} color="#000" />
                  </Pressable>
                  <Pressable
                    style={[styles.sectionItemContainer, { borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }]}
                  >
                    <Image
                      source={require('../image/otherpage/setting.png')}
                      style={{ width: 24, height: 24, marginLeft: 10, marginRight: 18 }}
                    />
                    <Text style={{ marginRight: 'auto' }}>Cài Đặt</Text>
                    <Icon source="chevron-right" size={20} color="#000" />
                  </Pressable>
                </View>
              </View>
              <View style={{ marginTop: 24 }}>
                <Text style={styles.sectionHeader}>Tương Tác</Text>
                <View style={{ paddingHorizontal: 15, paddingVertical: 8 }}>
                  <Pressable
                    style={[
                      styles.sectionItemContainer,
                      {
                        borderRadius: 10,
                      },
                    ]}
                  >
                    <Image
                      source={require('../image/otherpage/time.png')}
                      style={{ width: 24, height: 24, marginLeft: 10, marginRight: 18 }}
                    />
                    <Text style={{ marginRight: 'auto' }}>Hoạt Động</Text>
                    <Icon source="chevron-right" size={20} color="#000" />
                  </Pressable>
                </View>
              </View>
              <View style={{ marginTop: 24 }}>
                <Text style={styles.sectionHeader}>Thông Tin Chung</Text>
                <View style={{ paddingHorizontal: 15, paddingVertical: 8 }}>
                  <Pressable
                    style={[
                      styles.sectionItemContainer,
                      {
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        borderBottomWidth: 1,
                        borderColor: '#E0D7BF',
                      },
                    ]}
                  >
                    <Image
                      source={require('../image/otherpage/file_dock.png')}
                      style={{ width: 24, height: 24, marginLeft: 10, marginRight: 18 }}
                    />
                    <Text style={{ marginRight: 'auto' }}>Chính sách/Policies</Text>
                    <Icon source="chevron-right" size={20} color="#000" />
                  </Pressable>
                  <Pressable
                    style={[
                      styles.sectionItemContainer,
                      {
                        borderBottomWidth: 1,
                        borderColor: '#E0D7BF',
                      },
                    ]}
                  >
                    <Image
                      source={require('../image/otherpage/file_dock.png')}
                      style={{ width: 24, height: 24, marginLeft: 10, marginRight: 18 }}
                    />
                    <Text style={{ marginRight: 'auto' }}>CT Thành Viên/Loalty</Text>
                    <Icon source="chevron-right" size={20} color="#000" />
                  </Pressable>
                  <Pressable
                    style={[styles.sectionItemContainer, { borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }]}
                  >
                    <Image
                      source={require('../image/otherpage/info.png')}
                      style={{ width: 24, height: 24, marginLeft: 10, marginRight: 18 }}
                    />
                    <Text style={{ marginRight: 'auto' }}>Giới Thiệu Về Phiên Bản Ứng Dụng</Text>
                    <Icon source="chevron-right" size={20} color="#000" />
                  </Pressable>
                </View>
              </View>
              <View style={{ marginTop: 24 }}>
                <Text style={styles.sectionHeader}>Trung Tâm Trợ Giúp</Text>
                <View style={{ paddingHorizontal: 15, paddingVertical: 8 }}>
                  <Pressable
                    style={[
                      styles.sectionItemContainer,
                      {
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        borderBottomWidth: 1,
                        borderColor: '#E0D7BF',
                      },
                    ]}
                  >
                    <Image
                      source={require('../image/otherpage/question.png')}
                      style={{ width: 24, height: 24, marginLeft: 10, marginRight: 18 }}
                    />
                    <Text style={{ marginRight: 'auto' }}>Câu Hỏi Thường Gặp</Text>
                    <Icon source="chevron-right" size={20} color="#000" />
                  </Pressable>
                  <Pressable
                    style={[styles.sectionItemContainer, { borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }]}
                  >
                    <Image
                      source={require('../image/otherpage/comment.png')}
                      style={{ width: 24, height: 24, marginLeft: 10, marginRight: 18 }}
                    />
                    <Text style={{ marginRight: 'auto' }}>Phản Hồi & Hỗ Trợ</Text>
                    <Icon source="chevron-right" size={20} color="#000" />
                  </Pressable>
                </View>
              </View>
            </View>
            <Button mode="contained" style={{ marginHorizontal: 15, marginTop: 4, marginBottom: 16, backgroundColor: '#B3282D' }}>
              Đăng xuất
            </Button>
          </ScrollView>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3282D',
  },
  body: {
    flex: 1,
    backgroundColor: 'rgb(215, 207, 207)',
    marginTop: 'auto',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingTop: 8,
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: '700',
    padding: 5,
    paddingLeft: 10,
    color: '#311111',
  },
  sectionItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 44,
    fontSize: 14,
    paddingRight: 10,
  },
});
