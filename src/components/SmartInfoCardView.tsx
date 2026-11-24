import { ReactElement } from "react";

interface Props {
    title: string;
    value: string;
    description?: string;
    trend?: string;
    status?: string;
    buttonText?: string;
    previousValue?: string;
    onClick: () => void;
}

export function SmartInfoCardView(props: Props): ReactElement {
    const current = parseFloat(props.value || "0");
    const previous = parseFloat(props.previousValue || "0");

    let percent = 0;
    let direction: "up" | "down" | "neutral" = "neutral";

    if (props.previousValue) {
        const diff = current - previous;
        percent = previous !== 0 ? (diff / previous) * 100 : 0;

        if (diff > 0) {
            direction = "up";
        } else if (diff < 0) {
            direction = "down";
        }
    }

    let statusClass = "card";
    if (direction === "up") {
        statusClass += " success";
    } else if (direction === "down") {
        statusClass += " danger";
    } else {
        statusClass += " info";
    }

    return (
        <div className={statusClass} onClick={props.onClick}>
            <div className="card-header">
                <h3>{props.title}</h3>
            </div>

            <div className="card-body">
                <div className="value">{props.value}</div>

                {props.previousValue && (
                    <div className={`comparison ${direction}`}>
                        {direction === "up" && "↑ "}
                        {direction === "down" && "↓ "}
                        {percent.toFixed(1)}%
                    </div>
                )}

                {props.description && <div className="description">{props.description}</div>}
            </div>

            {props.buttonText && (
                <div className="card-footer">
                    <button
                        onClick={e => {
                            e.stopPropagation();
                            props.onClick();
                        }}
                    >
                        {props.buttonText}
                    </button>
                </div>
            )}
        </div>
    );
}
