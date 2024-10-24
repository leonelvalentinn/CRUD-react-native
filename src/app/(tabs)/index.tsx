import { ScreenLayout } from '@/components/ScreenLayout'
import { Categories } from '@/modules/index/Categories'
import { Products } from '@/modules/index/Products'
import { SearchTab } from '@/modules/index/SearchTab'
import { ScrollView } from 'react-native'

export default function Page() {

  return (
    <ScreenLayout>
      <ScrollView>
        <SearchTab />
        <Categories />
        <Products />
      </ScrollView>
    </ScreenLayout>
  )
}
