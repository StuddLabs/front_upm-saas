import tw from "tailwind-styled-components"

// Structure
function page_name() {
    return (
        <Wrapper>
            <h1 className="p-5 text-6xl text-white1">Page html</h1>
        </Wrapper>
    )
}

// Styles
const Wrapper = tw.section`
  flex
  flex-col 
  flex-grow
  bg-blue1
`


export default page_name;