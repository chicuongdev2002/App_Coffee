import React from "react";
import { View, ScrollView, Image, Text, } from "react-native";
import account from '../image/av.png';
import search from '../image/iconsearch.png'
export default function HoatDong(){
    return (
        <View
			style = {{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style = {{
					flex: 1,
					backgroundColor: "#ffffff",
					paddingTop: 1,
					paddingBottom: 16,
				}}>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#ffffff",
						paddingVertical: 16,
						paddingHorizontal: 21,
						marginBottom: 14,
						marginHorizontal: 2,
					}}>
					<Image
						source = {{account}} 
						resizeMode = {"stretch"}
						style = {{
							width: 53,
							height: 34,
						}}
					/>
					<View 
						style = {{
							flex: 1,
							alignSelf: "stretch",
						}}>
					</View>
					<Image
						source = {{search}} 
						resizeMode = {"stretch"}
						style = {{
							width: 39,
							height: 39,
						}}
					/>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 2,
						marginHorizontal: 21,
					}}>
					<Text 
						style = {{
							color: "#000000",
							fontSize: 15,
							marginRight: 4,
							flex: 1,
						}}>
						{"Đang diễn ra"}
					</Text>
					<Text 
						style = {{
							color: "#dddddd",
							fontSize: 15,
						}}>
						{"Lịch sử đặt hàng"}
					</Text>
				</View>
				<View 
					style = {{
						width: 164,
						height: 1,
						backgroundColor: "#aa0000",
						marginBottom: 1,
					}}>
				</View>
				<View 
					style = {{
						marginBottom: 1,
					}}>
					<View 
						style = {{
							position: "absolute",
							top: 0,
							left: 0,
							width: "100%",
							height: "100%",
							backgroundColor: "#eeeeee",
						}}>
						<Text 
							style = {{
								color: "#000000",
								fontSize: 15,
								marginTop: 359,
								marginLeft: 152,
							}}>
							{"Không có dữ liệu"}
						</Text>
					</View>
				</View>
			</ScrollView>
        </View>
		
    )
}