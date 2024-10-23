import { View } from 'react-native'

export const ScreenLayout = ({ children }) => {
  return (
    <View className='flex-1 bg-[#f5f5f5] pt-4 px-2'>
      {children}
    </View>
  )
}