import logo from '../assets/webpack.svg'

export const Home = () => {
  return (
    <main>
      <h1>App working in {process.env.NODE_ENV}</h1>
      <p>Start editing this boilerplate!</p>
      <img width="240" src={logo} alt="" />
    </main>
  )
}
