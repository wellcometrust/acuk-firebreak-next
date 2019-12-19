import '../assets/styles/app.scss'

import Header from '../components/Header'

type LayoutProps = {
  children?: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <main>
    <Header />
    {children}
  </main>
)

export default Layout
