import './App.scss'
import Layout from './components/Layout/Layout'
import Display from './components/Display/Display'
import Count from './components/Count/Count'

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
	return (
		<Layout>
			<Count></Count>
			<Display></Display>
		</Layout>
	)
}

export default App
