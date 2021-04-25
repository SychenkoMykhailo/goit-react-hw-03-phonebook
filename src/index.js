import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
//==================================================================

// Компоненты Components
// Компоненты после создания можно использовать много раз
// Дерево похожее как в html
// В Components смотреть структуру

// ReactDom.render(<Product />, document.querySelector("#root"));
ReactDom.render(<App />, document.querySelector("#root"));
