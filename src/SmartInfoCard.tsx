import { ReactElement } from "react";
import { SmartInfoCardContainerProps } from "../typings/SmartInfoCardProps";
import { SmartInfoCardView } from "./components/SmartInfoCardView";
import "./ui/SmartInfoCard.css";

export function SmartInfoCard(props: SmartInfoCardContainerProps): ReactElement {
    const title = props.title?.value ?? "";
    const value = props.value?.value ?? "";
    const previousValue = props.previousValue?.value ?? "";
    const description = props.description?.value ?? "";
    const buttonText = props.buttonText?.value ?? "";

    const handleClick = () => {
        if (props.onClickAction?.canExecute) {
            props.onClickAction.execute();
        }
    };

    return (
        <SmartInfoCardView
            title={title}
            value={value}
            previousValue={previousValue}
            description={description}
            buttonText={buttonText}
            onClick={handleClick}
        />
    );
}
