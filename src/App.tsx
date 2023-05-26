import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import Page_name from './pages/default';
import Mobile_Table from './pages/Mobile_Table';
import Activity from './pages/Mobile_Activity';
import Activity_Edit from './pages/Mobile_Activity_Edit';


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
        <Route path="/" element={<Mobile_Table />} />
        <Route path="/Mobile_Table" element={<Mobile_Table />} >
          <Route path=":sub_id" element={<Mobile_Table />} />
        </Route>
        <Route path="/Activity">
          <Route path=":id" element={<Activity />} />
        </Route>
        <Route path="/Activity_Edit">
          <Route path=":id" element={<Activity_Edit />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App;

