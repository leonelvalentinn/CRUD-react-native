import { Image, View } from 'react-native'
import '../global.css'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import Logo from '../assets/images/logo.png'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

export default function Layout() {
  const client = new ApolloClient({
    uri: 'https://api.escuelajs.co/graphql',
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View className='flex-1'>
          <StatusBar style='auto' />
          <Stack
            screenOptions={{
              headerStyle: { backgroundColor: '#f5f5f5' },
              headerTintColor: 'white',
              headerTitle: () => <Image source={Logo} width={35} height={60} style={{ resizeMode: 'contain', width: 30 }} />,
              headerTitleAlign: 'center',
              headerShadowVisible: false
            }}
          />
        </View>
      </GestureHandlerRootView>
    </ApolloProvider>
  ) 
}
