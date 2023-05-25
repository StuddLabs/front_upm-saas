import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import Page_name from './pages/default';
import Mobile_Table from './pages/Mobile_Table';
import Activity from './pages/Mobile_Activity';


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
        <Route path="/Mobile_Table" element={<Mobile_Table />} />
        <Route path="/Activity">
          <Route path=":id" element={<Activity />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App;

