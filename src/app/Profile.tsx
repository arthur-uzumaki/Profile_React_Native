import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Preference } from "@/components/Preference"
import { Skills } from "@/components/Skills"
import { User } from "@/components/User"
import { Image, ScrollView, View } from "react-native"


export function Profile() {
  return (
    <View className="flex-1 bg-gray-700 ">
      <ScrollView>
        <Image source={require('@/assets/banner.png')}
        className="w-full h-52 -mb-16"
      />
      <View className="flex-1 px-4 pb-4">
        <User />
        <Skills />
        <Preference />

        <View className="w-full mt-6 flex-1 ">
          <Input
            placeholder="Company"
            className="mb-6 "
            label="Company"
          />
          <Button
            label="Salve"
            className="text-lg"
            labelClasses="bg-green-500 py-3 h-14 text-lg px-4 text-base rounded font-bold"
          />
        </View>
      </View>
      </ScrollView>
    </View>
  )
}
