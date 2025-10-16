import { NextResponse } from 'next/server'
 
export async function GET() {
  const response = await fetch('https://www.visualizando.ar/cuantasbancas/favicon.ico')
  const blob = await response.blob()
  return new NextResponse(blob, {
    headers: { 'Content-Type': 'image/x-icon' },
  })
}