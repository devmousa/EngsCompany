import React from 'react';
import Header from '../components/Header'
import { Container } from 'react-bootstrap'


export type Props = {
    title: string;
}

export default class About extends React.Component<Props> {
  constructor(props: Props) {
      super(props)
      document.title = this.props.title
  }
  render() {
    return (
        <Container fluid className='mx-0 px-0'>
            <Header />
            <div>
                <h2>This is About page</h2>
            </div>
        </Container>
    )
  }
}
