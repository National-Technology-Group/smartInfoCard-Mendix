/**
 * This file was generated from SmartInfoCard.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue } from "mendix";

export interface SmartInfoCardContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    title: DynamicValue<string>;
    value: DynamicValue<string>;
    previousValue?: DynamicValue<string>;
    description?: DynamicValue<string>;
    buttonText?: DynamicValue<string>;
    onClickAction?: ActionValue;
}

export interface SmartInfoCardPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    title: string;
    value: string;
    previousValue: string;
    description: string;
    buttonText: string;
    onClickAction: {} | null;
}
