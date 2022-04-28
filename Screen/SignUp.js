import React from "react";
import { SafeAreaView, View, Button, Alert } from "react-native"
import MyButton from "../Component/MyButton"
import MyInput from "../Component/MyInput"

const SignUp = () => {
    return (
        <SafeAreaView style={{ width: "100%", height: "100%", backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
            <View style={{ width: "100%", height: "60%", backgroundColor: "#f78f1e", borderBottomLeftRadius: 20, borderBottomRightRadius: 20, justifyContent: "flex-end" }}>
                <View style={{
                    width: "90%", height: "40%", backgroundColor: "#808080", alignSelf: "center", borderTopRightRadius: 20, borderTopLeftRadius: 20, justifyContent: "center", alignItems: "center",
                    shadowColor: "#000", shadowOffset: {
                        width: 0,
                        height: 6,
                    }, shadowOpacity: 0.37, shadowRadius: 7.49, elevation: 12
                }}>
                    <MyInput
                        placeholder="Full Name" />

                    <MyInput
                        placeholder="Phone Number" />

                </View>



            </View>

            <View style={{
                width: "90%", height: "25%", backgroundColor: "#808080", alignSelf: "center", borderBottomRightRadius: 20, borderBottomLeftRadius: 20, justifyContent: "center", alignItems: "center",
                shadowColor: "#000", shadowOffset: {
                    width: 0,
                    height: 6,
                }, shadowOpacity: 0.37, shadowRadius: 7.49, elevation: 12
            }}>

                <MyInput
                    placeholder="Email Address" />


                <MyInput
                    placeholder="Password" />



            </View>


            <MyButton
                btnTitle="Sign Up"
            />




        </SafeAreaView>

    )
}
export default SignUp