import './Navigation.css'
import { ReactComponent as About } from '@fortawesome/fontawesome-free/svgs/solid/brain.svg'
import { ReactComponent as Search } from '@fortawesome/fontawesome-free/svgs/solid/bullseye.svg'
import { ReactComponent as Liked } from '@fortawesome/fontawesome-free/svgs/solid/heart.svg'
import { ReactComponent as Characters } from '@fortawesome/fontawesome-free/svgs/solid/bolt.svg'

export default function Navigation({ onNavigate }) {
  const about = <About />
  const characters = <Characters />
  const search = <Search />
  const liked = <Liked />

  return (
    <nav className="Navigation">
      <button
        className="Navigation__button"
        title="AboutPage"
        onClick={() => onNavigate('AboutPage')}
      >
        {about}
      </button>
      <button
        className="Navigation__button"
        title="CharactersPage"
        onClick={() => onNavigate('CharactersPage')}
      >
        {characters}
      </button>
      <button
        className="Navigation__button"
        title="SearchPage"
        onClick={() => onNavigate('SearchPage')}
      >
        {search}
      </button>
      <button
        className="Navigation__button"
        title="LikedPage"
        onClick={() => onNavigate('LikedPage')}
      >
        {liked}
      </button>
    </nav>
  )
}
