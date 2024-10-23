import { Pressable, Text, View } from 'react-native'

export const CardSlide = () => {
  return (
    <Pressable className='w-[200] h-24 flex-grow-0 flex-row gap-6 rounded-2xl bg-white items-center justify-center p-4'>
      <View className='w-16 h-16 flex justify-center items-center bg-[#f2f2f2] rounded-2xl'>
        <Text className='text-4xl'>👟</Text>
      </View>
      <Text className='text-negro text-xl w-max'>Sneakers</Text>
    </Pressable>
  )
}
