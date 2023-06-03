import { Outlet } from 'react-router-dom'
import NativeLink from '../components/NativeLink'
import { Footer } from './Footer'
import { Header } from './Header'

const PageWrapper = (): JSX.Element => {
  return (
    <>
      <NativeLink
        className="skip-link screen-reader-text"
        url="#content"
        label="Skip to content"
      />
      <Header />
      <div id="content" className="content">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default PageWrapper
