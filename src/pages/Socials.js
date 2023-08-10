import {ReactComponent as Hyperlink} from "../assets/hyperlink.svg"

export default function Socials() {
    return (<>
            <h1>Getting in touch</h1>
            <div className={"button-row"}>
                <a href={"javascript:location='mailto:\u0074\u0061\u006e\u0061\u0073\u0065\u0073\u0063\u0075\u0040\u0070\u006d\u002e\u006d\u0065';void 0"}
                   className={"button highlighted-button"}>Send me an email</a>
            </div>
            <div className={"button-row"}>
                <a href={"https://www.linkedin.com/in/stefan-tanasescu/"} className={"button"} target="_blank"
                   rel="noopener noreferrer">LinkedIn <Hyperlink/> </a>
                <a href={"https://www.github.com/1chappie"} className={"button"} target="_blank"
                   rel="noopener noreferrer">GitHub <Hyperlink/> </a>
            </div>
        </>);
}