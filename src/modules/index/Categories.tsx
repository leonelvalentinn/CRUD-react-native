import { useRef } from 'react'
import { Dimensions, Text, View } from 'react-native'
import { useSharedValue } from 'react-native-reanimated'
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel'
import { CardSlide } from './CardSlide'

const data = [...new Array(6).keys()]
const width = Dimensions.get('window').width

export const Categories = () => {
  const ref = useRef<ICarouselInstance>(null)
  const progress = useSharedValue<number>(0)

  return (
    <View className='my-8 px-2'>
      <Text className='text-negro text-4xl font-semibold'>Categorías</Text>
      <View className='justify-center items-center mt-4'>
        <Carousel
          ref={ref}
          width={width / 2.2}
          height={96}
          style={{
            width: width - 30,
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}
          data={data}
          onProgressChange={() => progress}
          renderItem={({ index }) => (
            <CardSlide />
          )}
        />
      </View>
    </View>
  )
}