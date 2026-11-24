import { ReactElement } from "react";
import { SmartInfoCardPreviewProps } from "../typings/SmartInfoCardProps";

export function preview(props: SmartInfoCardPreviewProps): ReactElement {
    return (
        <div style={{ padding: "10px", border: "1px solid #ccc" }}>
            <h3>{props.title ?? "Title"}</h3>
            <div>{props.value ?? "Value"}</div>

            {props.description && <div>{props.description}</div>}

            {props.buttonText && <button>{props.buttonText}</button>}
        </div>
    );
}

export function getPreviewCss(): string {
    return require("./ui/SmartInfoCard.css");
}
