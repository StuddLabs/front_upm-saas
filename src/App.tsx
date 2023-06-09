import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import Mobile_Table from './pages/Mobile_Table';
import Activity from './pages/Mobile_Activity';
import Activity_Edit from './pages/Mobile_Activity_Edit';
import Statistics from './pages/Mobile_Statistics';
import Statistics_Edit from './pages/Mobile_Statistics_Edit';
import Menu from './pages/Mobile_Menu';

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
        <Route path="/Menu" >
          <Route path=":sub_id" element={<Menu />} />
        </Route>

        <Route path="/Mobile_Table" element={<Mobile_Table />} >
          <Route path=":sub_id" element={<Mobile_Table />} />
        </Route>
        <Route path="/Activity">
          <Route path=":id" element={<Activity />} />
        </Route>
        <Route path="/Activity_Edit">
          <Route path=":id" element={<Activity_Edit />} />
        </Route>
        <Route path="/Statistics">
          <Route path=":sub_id" element={<Statistics />} />
        </Route>
        <Route path="/Statistics_Edit">
          <Route path=":sub_id" element={<Statistics_Edit />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App;

