import React, { useEffect, useState, createRef, useRef } from "react";

import styles from "./styles.module.css";


const trade: React.FC = () => {
    return (
        <div>
            <div style={{ margin: "10px" }}>
                <a href="/marketdiff">market-diff</a>
            </div>
            <div style={{ margin: "10px" }}>
                <a href='/chart'>chart</a>
            </div>
            <div style={{ margin: "10px" }}>
                <a href='/trade'>trade</a>
            </div>

        </div>
      
    );
}

export default trade