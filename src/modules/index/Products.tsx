import { ActivityIndicator, Text } from 'react-native'
import { View } from 'react-native'
import { CardProduct } from '../../components/CardProduct'
import { gql, useQuery } from '@apollo/client'
import { Product } from '@/types/product'

export const Products = () => {
  const PRODUCTS_QUERY = gql`
    query {
      products(limit: 10, offset: 0) {
        id
        title
        price
        description
        images
        category {
          id
          name
          image
        }
      }
    }
  `

  const { data, loading } = useQuery(PRODUCTS_QUERY)

  return (
    <View className='px-2 gap-8'>
      <Text className='text-negro text-4xl font-semibold'>Top ventas</Text>
      <View className='flex-1 flex-row flex-wrap items-start gap-4 justify-center'>
        {
          loading ? <ActivityIndicator size={'large'} color={'#222324'} />
          : (
            data.products.map((product: Product) => (
              <CardProduct key={product.id} id={product.id} title={product.title} price={product.price} img={product.images[0]} />
            ))
          )
        }
      </View>
    </View>
  )
}