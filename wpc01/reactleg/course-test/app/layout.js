import { Open_Sans } from 'next/font/google'
import './globals.css'

//components
import Nav from './components/nav/page'

const open_sans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <Nav />
        {children}</body>
    </html>
  )
}
