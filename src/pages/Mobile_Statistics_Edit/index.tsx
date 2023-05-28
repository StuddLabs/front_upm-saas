import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';

import tw from "tailwind-styled-components"
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

// Icons
import btn_back from "../../assets/icons/btn_back.svg"

// Components
import Button from '../../components/Button';
import Input_Point from '../../components/Input_Point';

// Structure
function Statistics_Edit() {
    let { sub_id } = useParams();

    const [res, setRes] = useState([])
    useEffect(() => {
        axios.get('/subjectStatistics/' + sub_id)
            .then((response) => {
                setRes(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    if (res.length === 0) {
        return null; // loading state
    }
    const { id, title, prefix, percent, amount, avg_moodle, avg_tests, avg_total }: any = res;

    return (
        <Wrapper>
            <nav className="flex justify-between pb-8 px-3">
                <Button id="btn_back" backgroundImage={btn_back} href={"/Mobile_Table/" + sub_id} />
            </nav>
            <main className='flex flex-col flex-grow p-5 bg-white1 border-t border-transparent rounded-t-4xl'>
                <h2 className='text-lg text-black4 font-medium text-center pb-10'>Averanges</h2>
                <div className='flex flex-col gap-7 pb-10'>
                    <Input_Point title='Moodle' refn='N2' placeholder={avg_moodle} max_point={10} />
                    <Input_Point title='Participação' refn='Partic' placeholder={0.0} max_point={1} />
                    <Input_Point title='Test I' refn='P1' placeholder={0.0} max_point={10} />
                    <Input_Point title='Test II' refn='P2' placeholder={0.0} max_point={10} />
                </div>
                <Button width="170px" height="50px" backgroundColor="#6B5CC8" borderRadius="10px" margin="0 auto">Save</Button>
            </main>
        </Wrapper>
    )
}

// Styles
const Wrapper = tw.section`
  flex
  flex-col 
  flex-grow
  pt-5
`


export default Statistics_Edit;