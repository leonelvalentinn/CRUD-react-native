import { Pressable, Text, TextInput, View } from 'react-native'
import { Formik } from 'formik'

export const UploadProduct = () => {
  return (
    <Formik
      initialValues={{ NIV: '', brand: '', color: '' }}
      onSubmit={values => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View className='gap-4 items-center'>
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
          <Pressable onPress={() => handleSubmit()} className='w-36 py-4 items-center rounded-xl bg-blue-500'>
            <Text className='text-xl text-white'>
              Enviar
            </Text>
          </Pressable>
        </View>
      )}
    </Formik>
  )
}
