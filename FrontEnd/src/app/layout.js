import './globals.css'
import { Providers } from '@/redux/providers'

export const metadata = {
  title: 'Club Festival',
  description: 'Club Festival 2024 es un sitio web creado para que los usuarios puedan ver los festivales que se realizan durante el año de las bandas y artistas más escuchados.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/icon.svg" />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
