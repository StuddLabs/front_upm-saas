import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

import tw from "tailwind-styled-components"
import { useEffect, useState } from 'react';

// Icons
import btn_menu from "../../assets/icons/btn_menu.svg"
import btn_statistics from "../../assets/icons/btn_statistics.svg"

// Structure
function Mobile_Table() {
    const [res, setRes] = useState([])
    useEffect(() => {
        axios.get('/subjectTable')
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
                <img src={btn_menu} />
                <img src={btn_statistics} />
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
                            let status_circle = ""
                            let status_style = ""
                            switch (status) {
                                case "Done":
                                    status_circle = "w-2.5 h-2.5 bg-green1 text-transparent rounded-full"
                                    status_style = "text-base text-green1 font-normal"
                                    break;
                                case "Alert":
                                    status_circle = "w-2.5 h-2.5 bg-yellow1 text-transparent rounded-full"
                                    status_style = "text-base text-yellow1 font-normal"
                                    break;
                                case "Finished":
                                    status_circle = "w-2.5 h-2.5 bg-red1 text-transparent rounded-full"
                                    status_style = "text-base text-red1 font-normal"
                                    break;
                                default:
                                    status_circle = "w-2.5 h-2.5 bg-blue1 text-transparent rounded-full"
                                    status_style = "text-base text-blue1 font-normal"
                                    break;
                            }
                            return (
                                <a className="grid grid-cols-2 gap-1 py-5 px-6 border-b border-black3" href={'/Activity/' + id}>
                                    <p className="text-lg text-white1 font-medium">{title}</p>
                                    <div className="flex items-center gap-3 justify-end">
                                        <p className={status_circle}></p>
                                        <p className={status_style}>{status}</p>
                                    </div>
                                    <p className="text-base text-white1 font-normal">{
                                        Number.isInteger(point) ? point.toFixed(1) : point
                                    } / 1.0</p>
                                    <div className="justify-end flex gap-1">
                                        <span className='text-base text-white1 font-normal'>{
                                            (endDate.split('T')[0].substring(5)).replace(":", "/")
                                        }</span>
                                        <span className='text-base text-white1 font-normal'>{endDate.split('T')[1]}</span>
                                    </div>
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