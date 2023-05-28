import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

import tw from "tailwind-styled-components"
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

// Icons
import btn_back from "../../assets/icons/btn_back.svg"
import btn_edit from "../../assets/icons/btn_edit.svg"
import average from "../../assets/icons/average.svg"
import classCount from "../../assets/icons/classCount.svg"
import check from "../../assets/icons/check.svg"

// Components
import Button from '../../components/Button';

// Structure
function Statistics() {
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
    const { id, title, prefix, percent, amount, act_done, act_alert,
        act_todo, act_finished, act_total, avg_moodle, avg_tests, avg_total }: any = res;

    return (
        <Wrapper>
            <nav className="flex justify-between pb-8 px-3">
                <Button id="btn_back" backgroundImage={btn_back} href={"/Mobile_Table/" + sub_id} />
                <Button id="btn_edit" backgroundImage={btn_edit} href={"/#/"} />
            </nav>
            <main className="flex flex-col flex-grow bg-white1 border-t border-transparent rounded-t-4xl">
                <section className="pt-5 pb-9 px-6">
                    <h2 className="text-xl text-black4 font-medium pb-3">{title}</h2>
                    <h3 className="font-normal text-black4">({prefix})</h3>
                </section>
                <section className="flex justify-around py-8 mx-6 mb-1 bg-grey2 rounded-md">
                    <div className='w-12 flex gap-2 items-center'>
                        <img src={average} />
                        <p className='font-normal'>{Number.isInteger(avg_total) ? avg_total.toFixed(1) : avg_total}</p>
                    </div>
                    <div className='w-12 flex gap-2 items-center'>
                        <img src={classCount} />
                        <p>{amount}</p>
                    </div>
                    <div className='w-12 flex gap-2 items-center'>
                        <img src={check} />
                        <p>{percent}%</p>
                    </div>
                </section>
                <section className='py-5 px-6 grid grid-cols-2 gap-1'>
                    <p className="text-base text-black4 font-normal">Todo Tasks</p>
                    <p className="text-base text-black4 font-normal text-right">{act_todo}</p>
                    <p className="text-base text-black4 font-normal">Done Tasks</p>
                    <p className="text-base text-black4 font-normal text-right">{act_done}</p>
                    <p className="text-base text-black4 font-normal">Alert Tasks</p>
                    <p className="text-base text-black4 font-normal text-right">{act_alert}</p>
                    <p className="text-base text-black4 font-normal">Finished Tasks</p>
                    <p className="text-base text-black4 font-normal text-right">{act_finished}</p>
                    <p className="text-base text-black4 font-normal">Total Tasks</p>
                    <p className="text-base text-black4 font-normal text-right">{act_total}</p>
                </section>
                <section className="py-5 px-6">
                    <h3 className='pb-7 text-black4 text-center'>Averanges</h3>
                    <div className='flex gap-3 justify-around'>
                        <section>
                            <div className='flex flex-col w-20'>
                                <div className='flex gap-2 justify-center'>
                                    <p className='text-black4 text-sm'>{avg_moodle}</p>
                                    <p className='text-black4 text-sm'>/ 4.0</p>
                                </div>
                                <p className='flex text-normal text-black4 text-base justify-center'>Moodle</p>
                            </div>
                        </section>
                        <section>
                            <div className='flex flex-col w-20'>
                                <div className='flex gap-2 justify-center'>
                                    <p className='text-black4 text-sm'>{Number.isInteger(avg_tests) ? avg_tests.toFixed(1) : avg_tests}</p>
                                    <p className='text-black4 text-sm'>/ 6.0</p>
                                </div>
                                <p className='flex text-normal text-black4 text-base justify-center'>Tests</p>
                            </div>
                        </section>
                        <section>
                            <div className='flex flex-col w-20'>
                                <div className='flex gap-2 justify-center'>
                                    <p className='text-black4 text-sm'>{Number.isInteger(avg_total) ? avg_total.toFixed(1) : avg_total}</p>
                                    <p className='text-black4 text-sm'>/ 10.0</p>
                                </div>
                                <p className='flex text-normal text-black4 text-base justify-center'>Total</p>
                            </div>
                        </section>
                    </div>
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

export default Statistics;