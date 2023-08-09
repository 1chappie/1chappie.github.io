import "../components/Widget.css"
import {ReactComponent as Hyperlink} from "../assets/hyperlink.svg"
import React from "react";

export default function Widget({name, link, desc, tags, last_comm}) {
    return (
        <div className={"widget"} key={name+"key"} onClick={() => {
            window.open(link, '_blank')
        }}>
            <div className={"widget-title-area"}>
                <div className={"widget-title"}>
                    {name}
                </div>
                <Hyperlink/>
            </div>
            <div className={"widget-tags"}>
                {tags.map((tag, index) =>
                    <div className={"widget-tag"} key={tag+index+"key"}>{tag}</div>
                )}
            </div>
            <div className={"widget-desc"}>
                {desc}
            </div>
            <div className={"widget-last-comm"}>
                Last commit: {new Date(last_comm).toDateString()}
            </div>
        </div>
    );
}