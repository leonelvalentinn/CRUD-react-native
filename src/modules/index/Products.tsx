import { products } from '@/mocks/products'
import { Text } from 'react-native'
import { View } from 'react-native'
import { CardProduct } from './CardProduct'

export const Products = () => {
  return (
    <View className='px-2 gap-8'>
      <Text className='text-negro text-4xl font-semibold'>Top ventas</Text>
      <View className='flex-1 flex-row flex-wrap items-start gap-4 justify-center'>
        {
          products.map((product) => (
            <CardProduct key={product.id} title={product.title} price={product.price} img={product.images[0]} />
          ))
        }
      </View>
    </View>
  )
}