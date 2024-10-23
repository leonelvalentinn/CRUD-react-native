import { IconSearch } from '@tabler/icons-react-native'
import { useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'

export const SearchTab = () => {
  const [search, setSearch] = useState('')

  return (
    <View className='items-center gap-6'>
      <Text className='text-negro text-6xl font-semibold'>
        ¿Qué es lo que estás buscando?
      </Text>
      <View className='w-full px-2 items-center relative'>
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder='Introduce una palabra clave...'
          className='w-full px-8 py-5 rounded-xl bg-white text-lg'
        />
        <Pressable className='absolute top-5 z-10 right-5' onPress={() => console.warn('hola')}>
          <IconSearch color={'#f26f3f'} />
        </Pressable>
      </View>
    </View>
  )
}