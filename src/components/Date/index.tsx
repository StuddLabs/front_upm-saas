import tw from "tailwind-styled-components"

// Logic

// Structure
function Date(prop: any) {
    const date = prop.prop;
    return (
        <Wrapper>
            <span className='text-sm text-white1 font-normal'>
                {(date.split('T')[0].substring(5)).replace(":", "/")}
            </span>
            <span className='text-sm text-white1 font-normal'>{date.split('T')[1]}</span>
        </Wrapper>
    )
}

// Styles
const Wrapper = tw.section`
    flex 
    gap-1
    justify-end
`


export default Date;