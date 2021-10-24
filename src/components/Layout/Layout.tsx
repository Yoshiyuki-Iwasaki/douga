import Header from '../Header/Header';

const Layout = ({children}:any) => {
  return (
    <div>
      <Header />
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout;