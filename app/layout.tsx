import { Archivo } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
    subsets: ['latin'],
    variable: '--font-archivo',
    display: 'swap',
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body
                className={`${archivo.variable} font-sans antialiased h-screen`}
            >
                {children}
            </body>
        </html>
    )
}
