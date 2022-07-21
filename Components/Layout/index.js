import FooterLinks from "../Footer";
import HeaderMiddle from "../Header";

export default function Layout({ children }) {
    return (
      <>
      <HeaderMiddle/>
        <main >{children}</main>
        <FooterLinks/>
   
      </>
    )
  }