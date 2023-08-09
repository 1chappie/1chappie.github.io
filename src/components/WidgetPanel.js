import "../components/WidgetPanel.css"
import React from "react";

export default function WidgetPanel({children}) {
    return (
        <div className={"widget-panel"}>
            {children.map((child, index) =>
                <React.Fragment key={index}>{child}</React.Fragment>
            )}
        </div>
    );
}