import './Navigation.css'
import { ReactComponent as Home } from '@fortawesome/fontawesome-free/svgs/solid/brain.svg'
import { ReactComponent as Search } from '@fortawesome/fontawesome-free/svgs/solid/bullseye.svg'
import { ReactComponent as Like } from '@fortawesome/fontawesome-free/svgs/solid/heart.svg'
import { ReactComponent as Create } from '@fortawesome/fontawesome-free/svgs/solid/bolt.svg'

export default function Navigation({ onclick }) {
  const home = <Home />
  const search = <Search />
  const like = <Like />
  const create = <Create />

  return (
    <nav className="Navigation">
      <Home className="Navigation__button" onNavigate={onclick} />
      <Search className="Navigation__button" onNavigate={onclick} />
      <Like className="Navigation__button" onNavigate={onclick} />
      <Create className="Navigation__button" onNavigate={onclick} />
    </nav>
  )
}
