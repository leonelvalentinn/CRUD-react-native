import { Link } from 'expo-router'
import { Image, Pressable, Text } from 'react-native'

export const CardSlide = ({ id, title, image } : { id: number, title: string, image: string }) => {
  return (
    <Link asChild href={`/category/${id}`}>
      <Pressable className='w-[200] h-24 flex-grow-0 flex-row gap-6 rounded-2xl bg-white items-center justify-center p-4'>
        <Image source={{ uri: image }} width={60} height={60} className='flex justify-center items-center bg-[#f2f2f2] rounded-2xl' />
        <Text className='text-negro text-xl w-max'>{title}</Text>
      </Pressable>
    </Link>
  )
}
