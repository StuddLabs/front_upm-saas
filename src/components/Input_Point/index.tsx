import tw from "tailwind-styled-components"

// Logic

// Structure
function Input_Point({ title, refn, placeholder, max_point }: any) {
    return (
        <Wrapper>
            <div className='flex gap-2'>
                <P>{title}</P>
                <p className='text-grey1'>({refn})</p>
            </div>
            <div className='flex gap-6 items-center'>
                <Input type="number" placeholder={placeholder} step={0.1} min={0.0} max={max_point} id={title} />
                <p className='text-black4'>/</p>
                <p className='text-black4'>{Number.isInteger(max_point) ? max_point.toFixed(1) : max_point}</p>
            </div>
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
const Input = tw.input`
    bg-grey2
    w-full
    h-11
    rounded-lg
    px-3
    text-black4
`
const P = tw.p`
    text-black4
    pb-6
`


export default Input_Point;