import React from 'react'
import '../styles/footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export class Footer extends React.Component {
  state = {
    theme: localStorage.getItem('theme') || "light"
  }

  render() {
    return (
        <footer>
          <div style={{textAlign: "center"}}>
            <p>Code with <FontAwesomeIcon className='icon-style' icon= {solid('heart')} beat /> by Mousa Aboubaker </p>
            <h4>Mousa Copyrights <FontAwesomeIcon icon={solid('copyright')}/></h4>
          </div>
        </footer>
    )
  }
}

export default Footer
