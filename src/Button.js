import React from "react";
import ThemeContext from "./themeContext";

export default class Button extends React.Component {
    render() {
        const theme = this.context
        return (
            <button className={`${theme}-theme`}>Switch Theme</button>
        )
    }
}

Button.contextType = ThemeContext