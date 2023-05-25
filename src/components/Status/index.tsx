import tw from "tailwind-styled-components"

function Status(prop: any) {
    const status = prop.prop;
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
        <Wrapper>
            <p className={status_circle}></p>
            <p className={status_style}>{status}</p>
        </Wrapper>
    )
}

// Styles
const Wrapper = tw.section`
  flex
  items-center 
  gap-3 
  justify-end
`


export default Status;