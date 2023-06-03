import { Link } from 'react-router-dom'

const NotFound = (): JSX.Element => {
  return (
    <main>
      <h1>Not found</h1>
      <p>It seems there was an error and the page/profile does not exist.</p>
      <Link to="/">Go to homepage</Link>
    </main>
  )
}

export default NotFound
