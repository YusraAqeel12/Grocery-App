import React from "react"
import { SafeAreaView, View, FlatList, Text, TouchableOpacity } from "react-native"
import { allCategories } from "../Data/DummyData"
const HomeScreen = (props) => {
    return (
        <SafeAreaView style={{ width: "100%", height: "100%", backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
            <View style={{ width: "100%", height: "90%", backgroundColor: "white", marginTop: 10 }}>

                <FlatList
                    numColumns={1}
                    key={(item) => item.id}
                    keyExtractor={(item, index) => index.toString()}
                    data={allCategories}
                    renderItem={(itemData) => {

                        return (

                            <TouchableOpacity
                                onPress={() => props.navigation.navigate("ItemScreen", {
                                    id: itemData.item.id
                                })}

                                style={{ height: 50, width: "100%", backgroundColor: "green", marginBottom: 20, borderRadius: 50, textAlign: "center" }} >

                                <Text style={{ color: "white", fontWeight: "bold", textAlign: "center", fontSize: 30 }}>
                                    {itemData.item.title}
                                </Text>

                            </ TouchableOpacity>

                        )
                    }}


                />





            </View>




        </SafeAreaView>
    )
}
export default HomeScreen






/*pehlay data ko extract karo 
  data ko uniquely identify karta hai key extractor , will identify id
  render item ,pehlay view likho and then text , text ko style do , phir on press daina  
  navigate honay kai saath id bhee bhaij do */



