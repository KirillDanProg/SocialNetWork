import style from "../Users/Users.module.css";
import React from "react";

export function Pagination(props) {
    return (
        <>
            <div className={style.pagesCountEl}>
                {props.pagesCountEl}
            </div>
        </>

    )
}