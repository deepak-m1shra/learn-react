import { useState } from "react"


// Creating a basic accordion (easy)
// Creating a collapsible accordion (challenging) => Example of lifting up the state
// Basically (in my own words): We override the method used in the child by parent
// & we do the prop manipulation in parent
// configure the property in parent as per the state used in here
function Section({ heading, description, isVisible, setIsVisible }) {

    // const [isVisible, setIsVisible] = useState(true)

    return (
        <>
            <h1 className="font-bold text-3xl m-2">{heading}</h1>
            {!isVisible ? (<button className="m-2 -my-4 underline"
                onClick={() => {
                    setIsVisible(true)
                }}>show
            </button>) :
                (<button className="m-2 -my-4 underline"
                    onClick={() => {
                        setIsVisible(false)
                    }}>
                    hide
                </button>)}
            {isVisible && <p className="border-2 border-orange-300 m-4 p-4">{description} </p>}
        </>
    )
}

export default function Electronics() {

    const [visibleSection, setVisibleSection] = useState("")

    return (
        <>
            <Section heading="About Us"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quas impedit, quia quos maxime totam. Aliquam molestias et perspiciatis delectus magnam, maiores non, obcaecati libero at hic repudiandae numquam cum!
                Nulla, sint vitae! Ad esse quasi nam exercitationem voluptas, eaque cum excepturi inventore dolorum culpa facere maxime ipsum? Aspernatur inventore rem ipsam ducimus vel sequi eos deserunt ut maxime. Culpa!
                Provident rerum ullam, consequuntur explicabo voluptatem at suscipit cum fuga. Enim nam iusto a, accusantium omnis eligendi praesentium vero aspernatur obcaecati sed, cupiditate labore! Nesciunt est facilis quia nihil nobis."
                isVisible={visibleSection === "about"}
                setIsVisible={() => {
                    setVisibleSection("about")
                }}
            />

            <Section heading="Our Team"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quas impedit, quia quos maxime totam. Aliquam molestias et perspiciatis delectus magnam, maiores non, obcaecati libero at hic repudiandae numquam cum!
                Nulla, sint vitae! Ad esse quasi nam exercitationem voluptas, eaque cum excepturi inventore dolorum culpa facere maxime ipsum? Aspernatur inventore rem ipsam ducimus vel sequi eos deserunt ut maxime. Culpa!
                Provident rerum ullam, consequuntur explicabo voluptatem at suscipit cum fuga. Enim nam iusto a, accusantium omnis eligendi praesentium vero aspernatur obcaecati sed, cupiditate labore! Nesciunt est facilis quia nihil nobis."
                isVisible={visibleSection === "team"}
                setIsVisible={() => {
                    setVisibleSection("team")
                }}
            />

            <Section heading="Mission Statement"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quas impedit, quia quos maxime totam. Aliquam molestias et perspiciatis delectus magnam, maiores non, obcaecati libero at hic repudiandae numquam cum!
                Nulla, sint vitae! Ad esse quasi nam exercitationem voluptas, eaque cum excepturi inventore dolorum culpa facere maxime ipsum? Aspernatur inventore rem ipsam ducimus vel sequi eos deserunt ut maxime. Culpa!
                Provident rerum ullam, consequuntur explicabo voluptatem at suscipit cum fuga. Enim nam iusto a, accusantium omnis eligendi praesentium vero aspernatur obcaecati sed, cupiditate labore! Nesciunt est facilis quia nihil nobis."
                isVisible={visibleSection === "mission"}
                setIsVisible={() => {
                    setVisibleSection("mission")
                }}
            />
        </>
    )
}