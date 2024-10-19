import './App.css'

import QRCode from 'qrcode.react'
function App() {
	return (
		<div>
			<h1>QR PARA REGISTRAR INGRESO Y SALIDA DE LAPTOPS DE ESTUDIANTES</h1>
			<div className='qr-container'>
				<QRCode
					value='https://m4f6305f-3000.brs.devtunnels.ms/'
					size={400}
					fgColor='white'
					bgColor='black'
					level='H'
					renderAs='svg'
					imageSettings={{
						src: './LogoSenati.png',
						x: null,
						y: null,
						height: 100,
						width: 100,
						excavate: true,
					}}
				/>
			</div>
		</div>
	)
}
export default App
