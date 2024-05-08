import { ReactNode } from "react";
import { Text, View, TextProps } from "react-native";
import {MaterialIcons} from '@expo/vector-icons'

interface OptionProps{
  children: ReactNode
}

interface IconProps{
  icon: keyof typeof MaterialIcons.glyphMap
}


function OptionRoot({children}:OptionProps){
  return (
    <View className="w-full items-center flex-row gap-2 border-b border-gray-500 py-3">
      {children}
    </View>
  )

}

function Icon({icon}:IconProps){
  return(
    <MaterialIcons name={icon} size={20} color='white'/>
  )
}

function Title({...rest}:TextProps){
  return(
    <Text className="flex-1 text-lg text-white" {...rest}/>
  )
}

export const Option ={
  Root:OptionRoot,
  Icon: Icon ,
  Title: Title

}