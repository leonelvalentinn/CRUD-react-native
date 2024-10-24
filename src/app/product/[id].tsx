import { ScreenLayout } from '@/components/ScreenLayout'
import { gql, useQuery } from '@apollo/client'
import { LinearGradient } from 'expo-linear-gradient'
import { Stack, useLocalSearchParams } from 'expo-router'
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native'

export default function ProductDetail() {
  const { id } = useLocalSearchParams()

  const DETAIL_QUERY = gql`
    {
      product(id: ${id}) {
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

  const { data, loading } = useQuery(DETAIL_QUERY)

  return (
    <ScreenLayout>
      <Stack.Screen
        options={{
          headerTintColor: '#242424',
          headerLeft: () => '',
        }}
      />
      {
        loading ? <ActivityIndicator size={'large'} color={'#222324'} />
        : (
          <ScrollView>
            <View className='w-full rounded-2xl items-center h-[500] relative'>
              <Image source={{ uri: data.product.images[0] }} width={200} height={500} className='object-cover w-full rounded-2xl relative z-[1]' />
              <View className='w-full items-start absolute bottom-10 gap-6 left-10 pr-10 z-[3]'>
                <Text className='text-5xl text-white font-semibold'>{data.product.title}</Text>
                <Text className='text-5xl text-white'>${data.product.price}</Text>
              </View>
              <LinearGradient
                // Button Linear Gradient
                colors={['rgba(0,0,0,0.8)', 'transparent']}
                className='absolute bottom-0 left-0 right-0 h-[500] w-full z-[2]'
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
                style={{ borderRadius: 16 }}
              >
              </LinearGradient>
            </View>
            <View className='my-10 ml-4'>
              <Text className='text-[#f26f3f] text-4xl font-semibold'>Info del producto</Text>
              <View className='flex-row items-center gap-4 ml-4 mt-5'>
                <Image className='rounded-xl' source={{ uri: data.product.category.image }} width={60} height={60} />
                <Text className='text-2xl text-negro'>{data.product.category.name}</Text>
              </View>
            </View>
            <View className='ml-4 gap-5'>
              <Text className='text-3xl text-negro'>Descripción</Text>
              <Text className='text-slate-700 text-xl'>{data.product.description}</Text>
            </View>
          </ScrollView>
        )
      }
    </ScreenLayout>
  )
}
