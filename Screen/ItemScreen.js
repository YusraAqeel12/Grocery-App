import React from "react"
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import { allCategories } from "../Data/DummyData"
import { allItems } from "../Data/DummyData"
const ItemScreen = (props) => {
    const catId = props.route.params.id
    const AllFilter = allCategories.filter((item) => item.CatId === catId)
    return (

        <SafeAreaView style={{ height: "100%", width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
            <View style={{ height: "90%", width: "90%" }}>
                <FlatList
                    numColumns={2}
                    key={(item) => item.id}
                    keyExtractor={(item, index) => index.toString()}
                    data={allItems}
                    renderItem={(itemData) => {
                        return (
                            <View

                                style={{ height: 100, width: "45%", marginBottom: 10, borderRadius: 10, marginHorizontal: 10 , backgroundColor:"green" }}>

                                <Text style={{ textAlign: "center", fontWeight: "bold", color: "white", fontSize: 30 }}>

                                    {itemData.item.title}
                                </Text>




                            </View>
                        )
                    }}



                />
            </View>
        </SafeAreaView>


    )
}
export default ItemScreen