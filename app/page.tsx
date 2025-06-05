import dynamic from 'next/dynamic'

const ClientHomePage = dynamic(() => import('./components/ClientHomePage'), {
  ssr: false
})

export default function Page() {
  return <ClientHomePage />
}