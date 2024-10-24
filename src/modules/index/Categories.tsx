import { useRef } from 'react'
import { ActivityIndicator, Dimensions, Text, View } from 'react-native'
import { useSharedValue } from 'react-native-reanimated'
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel'
import { CardSlide } from './CardSlide'
import { gql, useQuery } from '@apollo/client'

const width = Dimensions.get('window').width

export const Categories = () => {
  const ref = useRef<ICarouselInstance>(null)
  const progress = useSharedValue<number>(0)

  const CATEGORIES_QUERY = gql`
    query {
      categories {
        id
        name
        image
      }
    }
  `

  interface Category {
    id: number,
    name: string,
    image: string
  }

  const { data, loading } = useQuery(CATEGORIES_QUERY)

  return (
    <View className='my-8 px-2'>
      <Text className='text-negro text-4xl font-semibold'>Categorías</Text>
      <View className='justify-center items-center mt-4'>
        {
          loading ? <ActivityIndicator size={'large'} color={'#222324'} />
          : (
            <Carousel
              ref={ref}
              width={width / 2.2}
              height={96}
              style={{
                width: width - 30,
                justifyContent: 'flex-start',
                alignItems: 'center'
              }}
              data={data.categories}
              onProgressChange={() => progress}
              renderItem={({ item } : { item: Category }) => (
                <CardSlide
                  id={item.id}
                  title={item.name}
                  image={item.image}
                />
              )}
            />
          )
        }
      </View>
    </View>
  )
}
