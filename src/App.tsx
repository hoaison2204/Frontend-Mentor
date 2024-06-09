import QRCodeComponent from "./components/QR-code"
function App() {
	const heading: string = "Improve your front-end skills by building projects";
	const description: string = "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level";
	return (
		<>
			<QRCodeComponent 
			heading={heading}
			description={description}
			/>
		</>
	)
}

export default App
