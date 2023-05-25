import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

import tw from "tailwind-styled-components"
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

// Icons
import btn_back from "../../assets/icons/btn_back.svg"
import btn_date from "../../assets/icons/btn_date.svg"

// Components
import Button from '../../components/Button';
import Status from '../../components/Status';

// Structure
function Activity_Edit(prop: any) {
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
    let send_date = '2023-05-01'
    let end_date = '2023-05-10'

    return (
        <Wrapper>
            <nav className="flex justify-between pb-8 px-3">
                <Button id="btn_back" backgroundImage={btn_back} href={"/Mobile_Table/" + _subject_id} />
            </nav>
            <main className="flex flex-col flex-grow bg-white1 border-t border-transparent rounded-t-4xl">
                <section className='py-5 px-6  flex flex-col gap-2'>
                    <p className='text-lg text-black4 font-medium'>{mode}</p>
                    <p className='text-sm text-black4 font-normal'>{title}</p>
                </section>
                <section className='py-5 px-6 flex flex-col gap-8'>
                    <div>
                        <P>Point</P>
                        <div className='flex gap-6 items-center'>
                            <Input type="number" placeholder={point} step={0.1} min={0.0} max={1} />
                            <p className='text-black4'>/</p>
                            <p className='text-black4'>1.0</p>
                        </div>
                    </div>
                    <div>
                        <P>Date</P>
                        <div className='pl-3 flex gap-3 bg-grey2 rounded-lg h-11 w-full items-center'>
                            <img src={btn_date} className='h-6' />
                            <input type="date" placeholder={sendDate} max="2023-05-10" className='bg-transparent w-full h-11 pl-3 text-black4' />
                        </div>
                    </div>
                    <div>
                        <P>Status</P>
                        <div className='pl-3 pr-3 flex gap-3 bg-grey2 rounded-lg h-11 w-full items-center'>
                            <Status prop={status} />
                            <select className='text-right w-full' placeholder={status}>
                                <option value="To do">To do</option>
                                <option value="Alert">Alert</option>
                                <option value="Done">Done</option>
                                <option value="Finished">Finished</option>
                            </select>
                        </div>
                    </div>
                </section>
                <section className='py-5 px-6 w-full flex justify-center'>
                    <button className='bg-purple1 w-32 h-12 rounded-lg text-white1'>Save</button>
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
const Input = tw.input`
    bg-grey2
    w-full
    h-11
    rounded-lg
    pl-3
    text-grey1
    text-black4
`
const P = tw.p`
    text-black4
    pb-6
`


export default Activity_Edit;