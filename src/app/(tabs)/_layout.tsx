import { IconHanger, IconHome } from '@tabler/icons-react-native'
import { Tabs } from 'expo-router'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#222324de', marginHorizontal: 20, marginBottom: 16, padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 20, height: 60 },
        tabBarActiveTintColor: '#3b82f6',
        tabBarItemStyle: { padding: 20 },
        tabBarLabel: ''
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconHome color={color} />
        }}
      />
      <Tabs.Screen
        name='products'
        options={{
          title: 'Products',
          tabBarIcon: ({ color }) => <IconHanger color={color} />
        }}
      />
    </Tabs>
  )
}
