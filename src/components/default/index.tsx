import tw from "tailwind-styled-components"

// Logic

// Structure
function Component() {
    return (
        <Wrapper>
            <h1>Compoment</h1>
        </Wrapper>
    )
}

// Styles
const Wrapper = tw.section`
  flex
  flex-col 
  flex-grow
  bg-white1
`


export default Component;