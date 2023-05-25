import tw from "tailwind-styled-components"

// Icons
import btn_menu from "../../assets/icons/btn_menu.svg"
import btn_statistics from "../../assets/icons/btn_statistics.svg"

// Structure
function Mobile_Table() {
    return (
        <Wrapper>
            <nav className="flex justify-between pb-8 px-3">
                <img src={btn_menu} />
                <img src={btn_statistics} />
            </nav>
            <main className="flex flex-col flex-grow">
                <section className="pb-7 px-3">
                    <h2 className="text-xl text-white1 font-bold pb-1">Subject Name</h2>
                    <h3 className="text-base text-purple1 font-bold">(PREF)</h3>
                </section>
                <section className="flex-grow bg-black2 border-t border-transparent rounded-t-4xl">
                    <div className="grid grid-cols-2 gap-1 py-5 px-6 border-b border-black3">
                        <p className="text-lg text-white1 font-medium">Sub_Title</p>
                        <div className="flex items-center gap-3 justify-end">
                            <p className=" w-2.5 h-2.5 bg-green1 text-transparent rounded-full"></p>
                            <p className="text-base text-green1 font-normal">Sub_Status</p>
                        </div>
                        <p className="text-base text-white1 font-normal">Sub_Point</p>
                        <p className="text-base text-white1 font-normal text-right ">Sub_EndDate</p>
                    </div>
                    <div className="grid grid-cols-2 gap-1 py-5 px-6 border-b border-black3">
                        <p className="text-lg text-white1 font-medium">Sub_Title</p>
                        <div className="flex items-center gap-3 justify-end">
                            <p className=" w-2.5 h-2.5 bg-green1 text-transparent rounded-full"></p>
                            <p className="text-base text-green1 font-normal">Sub_Status</p>
                        </div>
                        <p className="text-base text-white1 font-normal">Sub_Point</p>
                        <p className="text-base text-white1 font-normal text-right ">Sub_EndDate</p>
                    </div>
                    <div className="grid grid-cols-2 gap-1 py-5 px-6 border-b border-black3">
                        <p className="text-lg text-white1 font-medium">Sub_Title</p>
                        <div className="flex items-center gap-3 justify-end">
                            <p className=" w-2.5 h-2.5 bg-green1 text-transparent rounded-full"></p>
                            <p className="text-base text-green1 font-normal">Sub_Status</p>
                        </div>
                        <p className="text-base text-white1 font-normal">Sub_Point</p>
                        <p className="text-base text-white1 font-normal text-right ">Sub_EndDate</p>
                    </div>
                    <div className="grid grid-cols-2 gap-1 py-5 px-6 border-b border-black3">
                        <p className="text-lg text-white1 font-medium">Sub_Title</p>
                        <div className="flex items-center gap-3 justify-end">
                            <p className=" w-2.5 h-2.5 bg-green1 text-transparent rounded-full"></p>
                            <p className="text-base text-green1 font-normal">Sub_Status</p>
                        </div>
                        <p className="text-base text-white1 font-normal">Sub_Point</p>
                        <p className="text-base text-white1 font-normal text-right ">Sub_EndDate</p>
                    </div>
                    <div className="grid grid-cols-2 gap-1 py-5 px-6 border-b border-black3">
                        <p className="text-lg text-white1 font-medium">Sub_Title</p>
                        <div className="flex items-center gap-3 justify-end">
                            <p className=" w-2.5 h-2.5 bg-green1 text-transparent rounded-full"></p>
                            <p className="text-base text-green1 font-normal">Sub_Status</p>
                        </div>
                        <p className="text-base text-white1 font-normal">Sub_Point</p>
                        <p className="text-base text-white1 font-normal text-right ">Sub_EndDate</p>
                    </div>
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