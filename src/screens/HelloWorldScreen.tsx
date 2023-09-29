import { Text, View } from "react-native"

export const HelloWorldScreen = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
        }}>
            <Text style={{
                fontSize: 30,
                fontWeight: "600",
                textAlign: 'center',
            }}>
                HelloWorldScreen
            </Text>
        </View>
    )
}
