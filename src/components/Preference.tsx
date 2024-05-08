import { useState } from "react";
import { View } from "react-native";
import { Title } from "@/components/Title";
import { Option } from "@/components/Option";
import { Switch } from "@/components/Switch";
import { Checkbox } from "@/components/Checkbox";

export function Preference() {
  const [isEnable, setIsEnable] = useState<boolean>(false)
  
  return (
    <View className="w-full">
      <Title>
        Preference
      </Title>

      <Option.Root>
        <Option.Icon icon="dark-mode"/>
        <Option.Title>Dark Mode</Option.Title>
        <Switch value={isEnable} onValueChange={setIsEnable} />
      </Option.Root>
      
      <Option.Root>
        <Option.Icon icon="email"/>
        <Option.Title>Public e-mail</Option.Title>
        <Checkbox />
      </Option.Root>
    </View>
  )
}