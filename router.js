import * as Header from './header.js'
import * as Footer from './footer.js'
import * as Plant from './plant.js'
import * as Home from './home.js'

Header.render();
Footer.render();

location.hash = location.hash || '#/'

const router = new Navigo('/', { hash: true });
router
	.on("/", () => {
		Home.render()
	})
	.on("/plant/:id", ({ data }) => {
		Plant.render(data.id)
	})
	.resolve();