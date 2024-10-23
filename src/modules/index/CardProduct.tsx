import { IconShoppingCartPlus } from '@tabler/icons-react-native'
import { Link } from 'expo-router'
import { Image, Pressable, Text, View } from 'react-native'

export const CardProduct = ({ title, price, img } : { title: string, price: number, img: string }) => {
  return (
    <Link asChild href='/' className='relative z-0 w-[48%]'>
      <View className='w-[45%] p-4 bg-white rounded-2xl items-center gap-8'>
        <Image className='rounded-2xl' source={{ uri: img }} width={180} height={180} />
        <View className='px-4 flex-row gap-4'>
          <View className='items-start'>
            <Text className='text-xl font-medium text-wrap'>{title}</Text>
            <Text className='text-xl text-slate-500'>${price}</Text>
          </View>
          <Pressable className='z-10 relative' onPress={() => console.warn('add to cart')}>
            <IconShoppingCartPlus color={'#f26f3f'} />
          </Pressable>
        </View>
      </View>
    </Link>
  )
}
