import { NextPage } from 'next'
import { Metadata } from 'next'

interface Props {}

export const metadata: Metadata = {
  title: 'About',
  description: 'About page',
  keywords: 'About page',
  openGraph: {
    title: 'About',
    description: 'About page',
    url: 'https://example.com/about',
    siteName: 'About page',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About',
    description: 'About page',
    creator: '@username',
  },
}

const Page: NextPage<Props> = ({}) => {
  console.log("Server or client")
  return <div>About page</div>
}

export default Page