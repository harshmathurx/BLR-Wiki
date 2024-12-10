import Banner from '@/components/Banner'
import DirectoryGrid from '@/components/DirectoryGrid'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { PageTransition } from '@/components/ui/PageTransition'
import { createClient } from '@/lib/supabase/client'

export default async function Home() {
  const supabase = createClient()

  const response = await supabase
    .from('categories')
    .select('*, places!inner(*)')
    .order('id')
  
  const { data: categories } = response

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <PageTransition>
          <Banner />
          <DirectoryGrid categories={categories || []} />
          <Footer />
        </PageTransition>
      </main>
    </>
  )
}
