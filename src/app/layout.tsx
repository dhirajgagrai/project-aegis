import './globals.css'
import type { Metadata } from 'next'
import { Cardo } from 'next/font/google'

const cardo = Cardo({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Project Aegis',
  description: 'An attempt to document a learning process',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cardo.className}>{children}</body>
    </html>
  )
}
