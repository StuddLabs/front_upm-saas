import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';

import styled from "styled-components";
import tw from "tailwind-styled-components"
import { useEffect, useState } from "react";

// Icons
import user from "../../assets/icons/user.svg"
import settings from "../../assets/icons/settings.svg"
import info from "../../assets/icons/info.svg"
import { useParams } from 'react-router-dom';

// Components

// Structure
function Menu() {
    let { sub_id }: any = useParams();
    const [res, setRes] = useState([])
    useEffect(() => {
        axios.get('/menu')
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
    const { username, avatar, subs_info }: any = res;

    return (
        <Wrapper>
            <section className="py-4 px-2 mb-9 flex gap-4 items-center bg-white1 drop-shadow-md rounded-lg">
                <div className="p-4 bg-grey3 rounded-full">
                    <img src={user} />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-xl font-semibold text-black5">Hi {username}!</h1>
                    <p className="text-lg font-medium text-grey1">Account</p>
                </div>
            </section>
            <section className='pb-5 flex flex-col gap-1 border-b border-grey2'>
                {
                    subs_info.map((el: any) => {
                        let bg_sty = el.id === sub_id || sub_id === undefined ?
                            "py-2 px-2 text-lg text-white1 font-medium bg-purple1 rounded-md" :
                            "py-2 px-2 text-lg text-black5 font-medium rounded-md"
                        return (
                            <a className={bg_sty}
                                href={'/Mobile_Table/' + el.id}>
                                {el.title}
                            </a>
                        )
                    })
                }
            </section>
            <a className="flex gap-3 items-center py-5 border-b border-grey2" href='#'>
                <img src={settings} />
                <p className='text-lg font-regular text-black5'>Settings</p>
            </a>
            <a className="flex gap-3 items-center py-5" href='#'>
                <img src={info} />
                <p className='text-lg font-regular text-black5'>About</p>
            </a>
            <section className='flex flex-grow justify-center items-end'>
                <a className="py-2.5 w-24 h-12 text-center text-base font-regular text-black5 border-2 border-grey1 rounded-xl" href="#">
                    V.1.0
                </a>
            </section>
        </Wrapper >
    )
}

// Styles
const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    padding: 18px;
    background-color: #fff;
    position: absolute;
    height: 100%;
    top: 0px;
    left: 0px;
    width: 80%;
    animation: showSidebar .4s;

    @keyframes showSidebar {
    from {
        opacity: 0;
        width: 0;
    }
    to {
        opacity: 1;
        width: 80%;
    }
    }
`
const Version = tw.a`
  flex
  h-16
  p-4
  justify-center
  items-center
  fixed 
  inset-x-0 
  bottom-0
`

export default Menu;