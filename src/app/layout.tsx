import './globals.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

export const metadata: Metadata = {
  title: 'Guia da Riqueza - Transforme sua Vida Financeira',
  description: 'Aprenda estratégias comprovadas para construir riqueza e alcançar a liberdade financeira',
  keywords: 'finanças, investimentos, riqueza, dinheiro, liberdade financeira',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
