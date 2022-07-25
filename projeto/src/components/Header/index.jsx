import { useHistory } from 'react-router-dom'

export default function Header() {
	const history = useHistory()
	return (
		<header>
			<button onClick={() => history.push('/')}>Home</button>
			<button onClick={() => history.push('/register')}>Registro</button>
			<button onClick={() => history.push('/login')}>Login</button>
		</header>
	)
}
