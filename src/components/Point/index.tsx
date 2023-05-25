import tw from "tailwind-styled-components"

function Point(prop: any) {
    const point = prop.prop

    return (
        <Wrapper>
            {Number.isInteger(point) ? point.toFixed(1) : point} / 1.0
        </Wrapper>
    )
}

// Styles
const Wrapper = tw.section`
    text-sm 
    text-white1
    font-medium
    text-right
`


export default Point;