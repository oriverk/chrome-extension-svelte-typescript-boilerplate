import App from './Launcher.svelte'
import './index.css'

const target = document.getElementById('app')

const app = new App({ target })
export default app
