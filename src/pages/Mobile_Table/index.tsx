import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

import tw from "tailwind-styled-components"
import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react';

// Icons
import btn_menu from "../../assets/icons/btn_menu.svg"
import btn_statistics from "../../assets/icons/btn_statistics.svg"
import Button from '../../components/Button';
import Status from '../../components/Status';
import Date from '../../components/Date';
import Point from '../../components/Point';

// Structure
function Mobile_Table() {
    let { sub_id } = useParams();
    const [res, setRes] = useState([])
    useEffect(() => {
        const path: any = sub_id ? "/subjectTable/" + sub_id : "/subjectTable"
        axios.get(path)
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
    const { id, title, prefix, acts }: any = res;

    return (
        <Wrapper>
            <nav className="flex justify-between pb-8 px-3">
                <Button backgroundImage={btn_menu} href="#" />
                <Button backgroundImage={btn_statistics} href="#" />
            </nav>
            <main className="flex flex-col flex-grow">
                <section className="pb-7 px-3">
                    <h2 className="text-xl text-white1 font-bold pb-1">{title}</h2>
                    <h3 className="text-base text-purple1 font-bold">({prefix})</h3>
                </section>
                <section className="flex-grow bg-black2 border-t border-transparent rounded-t-4xl">
                    {
                        acts.map((el: any) => {
                            const { id, title, point, status, endDate } = el;
                            return (
                                <a className="grid grid-cols-2 gap-1 py-5 px-6 border-b border-black3" href={'/Activity/' + id}>
                                    <p className="text-lg text-white1 font-medium">{title}</p>
                                    <Status prop={status} />
                                    <div className='flex justify-start'>
                                        <Point prop={point} />
                                    </div>
                                    <Date prop={endDate} />
                                </a>
                            )
                        })
                    }
                </section>
            </main>
        </Wrapper >
    )
}

// Styles
const Wrapper = tw.section`
  flex
  flex-col 
  flex-grow
  pt-5
`

export default Mobile_Table;