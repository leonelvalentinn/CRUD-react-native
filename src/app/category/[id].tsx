import { CardProduct } from '@/components/CardProduct'
import { ScreenLayout } from '@/components/ScreenLayout'
import { gql, useQuery } from '@apollo/client'
import { Stack, useLocalSearchParams } from 'expo-router'
import { ActivityIndicator, FlatList, View } from 'react-native'

export default function ProductsCategory() {
  const { id } = useLocalSearchParams()

  const CATEGORY_QUERY = gql`
    query {
      products(categoryId: ${id}) {
        id
        title
        price
        description
        images
      }
    }
  `

  const { data, loading } = useQuery(CATEGORY_QUERY)

  return (
    <ScreenLayout>
      <Stack.Screen
        options={{
          headerTintColor: '#242424',
          headerLeft: () => '',
        }}
      />
      <View className='flex-1 flex-row flex-wrap items-start gap-4 justify-center'>
        {
          loading ? <ActivityIndicator size={'large'} color={'#222324'} />
          : (
            <FlatList
              data={data.products}
              renderItem={({ item }) => <CardProduct key={item.id} id={item.id} title={item.title} price={item.price} img={item.images[0]} />}
              getItemLayout={(data, index) => ({
                length: 80,
                offset: 80 * index,
                index
              })}
              numColumns={2}
              columnWrapperStyle={{ gap: 10 }}
              contentContainerStyle={{ gap: 10 }}
            />
          )
        }
      </View>
    </ScreenLayout>
  )
}
