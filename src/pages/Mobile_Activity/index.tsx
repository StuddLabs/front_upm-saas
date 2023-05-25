import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

import tw from "tailwind-styled-components"
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

// Icons
import btn_back from "../../assets/icons/btn_back.svg"
import btn_edit from "../../assets/icons/btn_edit.svg"
import btn_external_link from "../../assets/icons/btn_external-link.svg"

// Components
import Status from '../../components/Status';
import Button from '../../components/Button';
import Point from '../../components/Point';
import Date from '../../components/Date';

// Structure
function Activity() {
    let { id } = useParams();
    const [res, setRes] = useState([])
    useEffect(() => {
        axios.get('/subjectTable/act/' + id)
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
    const { _id, title, point, mode, type, sendDate, endDate, status, link, _subject_id }: any = res;

    return (
        <Wrapper>
            <nav className="flex justify-between pb-8 px-3">
                <Button id="btn_back" backgroundImage={btn_back} href={"/Mobile_Table/" + _subject_id} />
                <Button id="btn_edit" backgroundImage={btn_edit} href={"/Activity_Edit/" + _id} />
            </nav>
            <main className="flex flex-col flex-grow bg-black2 border-t border-transparent rounded-t-4xl">
                <section className='py-5 px-6 grid grid-cols-2 gap-2'>
                    <p className='text-lg text-white1 font-medium'>{mode}</p>
                    <Status prop={status} />
                    <p className='text-sm text-purple1 font-normal'>{title}</p>
                </section>
                <section className='py-5 px-6 grid grid-cols-2 gap-3'>
                    <p className="text-sm text-white1 font-medium">Point</p>
                    <Point prop={point} />
                    <p className="text-sm text-white1 font-medium">Type</p>
                    <p className="text-sm text-white1 font-medium text-right">{type}</p>
                    <p className="text-sm text-white1 font-medium">Send Date</p>
                    <Date prop={sendDate} />
                    <p className="text-sm text-white1 font-medium">End Date</p>
                    <Date prop={endDate} />
                </section>
                <section className='py-5 px-6'>
                    <Button width="175px" height="47px" borderRadius="10px" margin="0 auto" backgroundColor="#fff" href={link} target='_blank'>
                        <img src={btn_external_link} />
                        <p className='text-lg text-grey1 font-normal '>Go To Page</p>
                    </Button>
                </section>
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

export default Activity;