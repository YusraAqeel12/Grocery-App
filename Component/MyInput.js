import React from "react"
import { View, TextInput } from "react-native"
const MyInput = (props) => {
    return (
        <View style={{ width: "70%", height: 50, backgroundColor: "#FFFFFF", marginTop: 10 }}>
            <TextInput
                style={{ height: 50, marginLeft: 10 }}
                placeholder={props.placeholder}
                placeholderTextColor="black"
                secureTextEntry={props.secure ? true : false}
            />
        </View>

    )
}
export default MyInput
