import { NextResponse } from 'next/server'

const data = [
	
	{
		id: 1,
		title: 'Habitaciones',
		href: '/habitaciones',
		image: 'room.jpg',
		alt: 'Amplia y luminosa habitacion de hotel'
	},
	{
		id: 2,
		title: 'Ubicación',
		href: '/ubicacion',
		image: 'ubication.png',
		alt: 'Mapa de la ubicación del hotel en el centro de la ciudad'

	},
	{
		id: 3,
		title: 'Sobre nosotros',
		href: '/about',
		image: 'contact.jpg',
		alt: 'Vista aerea de la ciudad de Copenhague'
	}

]
export async function GET() {

	return NextResponse.json({ data })
}
