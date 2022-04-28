import React from "react"
import { View, Text, TouchableOpacity, Alert } from "react-native"
const MyButton = (props) => {
    return (


        <TouchableOpacity
            onPress={props.onPress}
            style={{
                width: "60%", height: 50, backgroundColor: "#006400", alignItems: "center", justifyContent: "center", marginTop: 40, borderRadius: 20,
                shadowColor: "#000", shadowOffset: {
                    width: 0,
                    height: 6,
                }, shadowOpacity: 0.37, shadowRadius: 7.49, elevation: 12
            }}

        >


            <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
                {props.btnTitle}
            </Text>




        </TouchableOpacity>



    )
}
export default MyButton