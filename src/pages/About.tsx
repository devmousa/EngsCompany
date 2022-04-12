import Header from '../components/Header'
import { Container } from 'react-bootstrap'

const About = () => {
    return (
        <Container fluid className='px-0 mx-0'>
        <Header page='about'/>
            <div>
                <h1>Hello about Page</h1>
            </div>
        </Container>
    )
}

export default About