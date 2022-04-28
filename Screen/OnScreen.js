import react from "react"
import { View, SafeAreaView, Image } from "react-native"
import MyButton from "../Component/MyButton"
import MyInput from "../Component/MyInput"
const OnScreen = (props) => {
    return (
        <SafeAreaView
            style={{ width: "100%", height: "100%", backgroundColor: "#f78f1e" }}>
            <View style={{ width: "100%", height: "35%", justifyContent: "center", alignItems: "center", backgroundColor: "#ffecb2", borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                <Image style={{ height: 150, width: 400, resizeMode: "contain", borderColor: "white" }}
                    source={require('../assets/images/logo2.png')} />
            </View>

            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <MyInput
                    placeholder="Enter Your Email Address"
                />

                <MyInput
                    secure
                    placeholder="Enter Password"
                />

                < MyButton
                    onPress={() => props.navigation.navigate("Home")}
                    btnTitle="LOG IN"
                />

                < MyButton
                    onPress={() => props.navigation.navigate("SIGN IN")}
                    btnTitle="SIGN UP"
                />



            </View>





        </SafeAreaView>
    )
}


export default OnScreen