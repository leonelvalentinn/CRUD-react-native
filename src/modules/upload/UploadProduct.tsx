import { Dimensions, FlatList, Image, Pressable, Text, TextInput, View } from 'react-native'
import { Formik } from 'formik'
import { useState } from 'react'
import { launchCameraAsync, requestCameraPermissionsAsync } from 'expo-image-picker'
import EnhancedImageViewing from 'react-native-image-viewing'

const width = Dimensions.get('window').width

export const UploadProduct = () => {
  const [images, setImages] = useState<string[]>([])
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const takePhotoWithCamera = async () => {
    const permissionResult = await requestCameraPermissionsAsync()

    if (!permissionResult.granted) {
      alert('Se necesitan permisos para acceder a la cámara!')
      return
    }

    const result = await launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) {
      setImages((prevImages) => [...prevImages, result.assets[0].uri])
    }
  }

  const openImageViewer = (index: number) => {
    setCurrentImageIndex(index)
    setIsVisible(true)
  }

  const renderImage = ({ item, index }: { item: string, index: number }) => (
    <Pressable onPress={() => openImageViewer(index)}>
      <Image source={{ uri: item }} width={width / 3.3} height={100} className='rounded-xl object-cover' />
    </Pressable>
  )

  return (
    <Formik
      initialValues={{ NIV: '', brand: '', color: '' }}
      onSubmit={values => console.warn({ ...values })}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View className='gap-4 items-center w-full'>
          <TextInput
            onChangeText={handleChange('NIV')}
            onBlur={handleBlur('NIV')}
            value={values.NIV}
            placeholder='Número de serie...'
            className='w-full px-8 py-5 rounded-xl bg-white text-lg'
          />
          <TextInput
            onChangeText={handleChange('brand')}
            onBlur={handleBlur('brand')}
            value={values.brand}
            placeholder='Marca...'
            className='w-full px-8 py-5 rounded-xl bg-white text-lg'
          />
          <TextInput
            onChangeText={handleChange('color')}
            onBlur={handleBlur('color')}
            value={values.color}
            placeholder='Color...'
            className='w-full px-8 py-5 rounded-xl bg-white text-lg'
          />
          <Pressable onPress={takePhotoWithCamera} className='w-full p-4 rounded-xl items-center'>
            <Text className='text-xl'>Tomar foto</Text>
          </Pressable>

            <View className='w-full justify-center items-center'>
              <FlatList
                data={images}
                renderItem={renderImage}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
                columnWrapperStyle={{ gap: 10 }}
                contentContainerStyle={{ marginTop: 10, gap: 10 }}
              />
            </View>
          <Pressable onPress={() => handleSubmit()} className='w-36 py-4 items-center rounded-xl bg-blue-500'>
            <Text className='text-xl text-white'>
              Enviar
            </Text>
          </Pressable>

          <EnhancedImageViewing
            images={images.map((uri) => ({ uri }))}
            imageIndex={currentImageIndex}
            visible={isVisible}
            onRequestClose={() => setIsVisible(false)}
          />
        </View>
      )}
    </Formik>
  )
}
