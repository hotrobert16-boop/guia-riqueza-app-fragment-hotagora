import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}