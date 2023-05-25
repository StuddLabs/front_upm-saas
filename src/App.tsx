import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import Page_name from './pages/default';


type AppProps = {
  isStart?: boolean
}

function App(props: AppProps) {
  return (
    // <>
    //   {/* {props.isStart ? <Wellcome /> : true} */}
    //   <Wellcome />
    // </>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page_name />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App;

