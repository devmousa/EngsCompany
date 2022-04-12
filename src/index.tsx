// @flow
import { createRoot } from 'react-dom/client';
import Root from './App'
import reportWebVitals from './reportWebVitals';


const root = document.getElementById('root') as HTMLElement;
const renderedRoot = createRoot(root);
renderedRoot.render(<Root />)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

