// @flow
import React from "react"
import { Link } from "react-router-dom"
// import logo from '../images/studying.png'
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used




export type Props = {
  page: string;
}

class Header extends React.Component<Props> {
  state = {
    theme: localStorage.getItem('theme') || window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  changeTheme = () => {
    if (this.state.theme === 'light') {
      document.body.classList.add('dark')
      this.setState({theme: 'dark'})
      localStorage.setItem('theme', 'dark')
    } else {
      document.body.classList.remove('dark')
      this.setState({theme: 'light'})
      localStorage.setItem('theme', 'light')
    }
    document.documentElement.style.overflow = "hidden";
    document.documentElement.setAttribute(
      "data-color-scheme",
      this.state.theme === "dark" ? "light" : "dark"
    );
    document.documentElement.style.overflow = "";
  }
  render() {
    let dark: boolean = document.body.classList.contains('dark');
    if (dark && localStorage.getItem('theme') === 'light'){
      document.body.classList.remove('dark')
    } else if (!dark && localStorage.getItem('theme') === 'dark'){
      document.body.classList.add('dark')
    } else if (dark && localStorage.getItem('theme') === undefined){
      this.setState({theme: 'dark'})
      localStorage.setItem('theme', 'dark')
    }
    return (
<Navbar style={{width: '100%'}} bg={`${this.state.theme === 'light' ? 'light' : 'dark'}`} variant={`${this.state.theme === 'light' ? 'light' : 'dark'}`} expand="lg">
     <Container fluid>
       <Link className="navbar-brand" to='/EngsCompany/'>Engs</Link>
       <div className="pe-5 pe-lg-0"><Button className="me-2" onClick={this.changeTheme} variant={`${this.state.theme === 'light' ? 'dark' : 'light'}`}><FontAwesomeIcon icon={this.state.theme === 'light' ? solid('moon') : solid('sun')} /></Button></div>
       <Navbar.Toggle aria-controls="navbarScroll" />
       <Navbar.Collapse id="navbarScroll">
         <Nav
           className="me-auto my-2 my-lg-0"
           style={{ maxHeight: '100px' }}
           navbarScroll
         >
           <Link className='nav-link' to='/EngsCompany/'>Home</Link>
           <Link className='nav-link' to="/EngsCompany/about">About</Link>
           <Link className='nav-link' to="/EngsCompany/services">Services</Link>
           <Link className='nav-link' to="/EngsCompany/prices">Prices</Link>
         </Nav>
       </Navbar.Collapse>
     </Container>
   </Navbar>
    )
  }
  static defaultProps = {
    page: 'main'

  }
}



export default Header
