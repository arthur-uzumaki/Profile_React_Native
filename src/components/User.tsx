import { Text, View } from "react-native";
import { Avatar, AvatarImage } from "./Avatar";

export function User(){
  return(
    <View className="items-center">
      <Avatar className="h-32 w-32 border-gray-600 border-4">
        <AvatarImage source={{uri:'https://github.com/Arttanjeiro.png'}}/>
      </Avatar>
      <Text className="text-white font-bold text-2xl mt-4">Arthur Sousa</Text>
      <Text className="text-gray-400 text-lg">@arthur</Text>
    </View>
  )
}