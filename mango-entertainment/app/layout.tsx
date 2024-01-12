import { FC, ReactNode } from 'react'
import { outfit } from './ui/fonts'
import './globals.css'
import Navbar from './ui/components/Navbar'
import { ClerkProvider } from '@clerk/nextjs'

const meta = {
  favicon: "/icon.svg",
  title: "Mango Entertainment",
  description: "Generated by the best coders who eat mangoes",
  url: "https://mango-entertainment-alexvcs.vercel.app/",
  type: "website",
};

export const metadata = {
  title: meta.title,
  description: meta.description,
  favicon: meta.favicon,
  url: meta.url,
  openGraph: {
    url: meta.url,
    title: meta.title,
    description: meta.description,
    type: meta.type,
    site_name: meta.title,
  },
};

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${outfit.className} bg-entertainment-dark-blue grid grid-cols-1 lg:grid-cols-[160px_1fr]`}
        >
          <Navbar />
          <div className="overflow-x-hidden">{children}</div>
        </body>
      </html>
    </ClerkProvider>
  )
}

export default RootLayout