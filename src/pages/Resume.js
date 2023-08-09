import {ReactComponent as Hyperlink} from "../assets/hyperlink.svg"
import {useEffect, useRef, useState} from "react";

const viewLink = "https://docs.google.com/document/d/1TtnDU9crwX3AiuTCReODRw1FxRns1HYLzXrxarBPH94/edit?usp=sharing"
const downloadLink = "https://docs.google.com/document/d/1TtnDU9crwX3AiuTCReODRw1FxRns1HYLzXrxarBPH94/export?format=pdf"

export default function Resume() {
    const [contactPosition, setContactPosition] = useState({top: 0, left: 0});
    const [arrowVisible, setArrowVisible] = useState(false);

    useEffect(() => {
        const socialsButton = document.getElementById("socialsbutton");
        if (socialsButton) {
            const socialsButtonRect = socialsButton.getBoundingClientRect();
            setContactPosition({top: socialsButtonRect.top, left: socialsButtonRect.left});
        }
    }, []);


    return (
        <>
            <h1>CV Tănăsescu Ștefan</h1>
            <p>
                <b>&gt;&gt;&gt;&nbsp;</b> I do my best to keep the CV updated, and I've found that the most convenient
                way to do so is by using Google Docs. Rest assured, this page will always link to the latest
                version available.
            </p>
            <div className={"button-row"}>
                <a className={"button highlighted-button"} href={viewLink} target="_blank"
                   rel="noopener noreferrer" onClick={()=>setArrowVisible(true)}>
                    View <Hyperlink/>
                </a>
                <a className={"button"} href={downloadLink} onClick={()=>setArrowVisible(true)}>
                    Download PDF
                </a>
            </div>
            {arrowVisible ?
                <div className="dynamic-arrow" style={{top: contactPosition.top}}>
                    <span className="arrow">←</span>
                    <span className="arrow-text"> let's talk</span>
                </div> : null}
        </>
    );
}