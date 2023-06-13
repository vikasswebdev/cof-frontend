import Footer from "./footer";
import Nav from "./nav";

const Layout = ({ children }) => (
  <>
    <Nav />
    {children}
    <Footer />
  </>
);

export default Layout;
