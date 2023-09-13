import React from "react";

import './ExpandButton.css'

export default function ExpandButton({ updateVisibleTickets }) {
    return(
        <>
            <button className="expand-button" type="button" onClick={updateVisibleTickets}>Показать еще</button>
        </>
    )
}