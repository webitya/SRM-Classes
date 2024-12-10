import FooterEl from "../Footer"
import NavbarEl from "../Navbar"


const LayoutEl=(data)=>{
    const display=(
        <>
          <NavbarEl/>
          {data.children}
          <FooterEl/>
        </>
    )
    return display
}
export default LayoutEl