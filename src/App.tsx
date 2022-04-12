import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './styles/transition.scss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main'
import About from './pages/About';

const App = () => {
    const location = useLocation()
    return (
        <TransitionGroup component={null} >
            <CSSTransition key={location.key} classNames="fade" timeout={350} >
                <Routes location={location}>
                    <Route path="/EngsCompany/" element={<Main />} />
                    <Route path='/EngsCompany/about' element={<About />} />
                    <Route path='*' element={<Header />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    )
}

const Root = () => <BrowserRouter><App/></BrowserRouter>

export default Root