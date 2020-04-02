import React from 'react';
import style from './spinner.module.css';
import cn from 'classname'
   
const NavbarLogo = ({dark}) => {

      return(
        <>
    
    <svg className={cn(style.mysvg,{[style.fillText]:dark})} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                viewBox="0 0 97 32" enableBackground="new 0 0 97 32" >
            <g>
                <path   d="M36,28.1c-0.1-0.2-0.2-0.5-0.3-0.8c-0.5,0.7-1.3,1-2.2,1c-0.9,0-1.6-0.3-2.2-0.8c-0.6-0.5-0.9-1.2-0.9-2
                    c0-1,0.4-1.8,1.1-2.3c0.7-0.5,1.8-0.8,3.2-0.8h0.9V22c0-0.8-0.4-1.3-1.1-1.3c-0.7,0-1,0.3-1,1h-2.9c0-0.9,0.4-1.6,1.1-2.2
                    c0.8-0.6,1.7-0.8,2.9-0.8c1.2,0,2.1,0.3,2.8,0.9c0.7,0.6,1,1.4,1,2.4V26c0,0.8,0.1,1.5,0.4,1.9v0.1H36z M34.2,26.2
                    c0.4,0,0.7-0.1,0.9-0.2c0.2-0.2,0.4-0.3,0.5-0.5V24h-0.8c-1,0-1.5,0.4-1.5,1.3c0,0.3,0.1,0.5,0.3,0.6S33.9,26.2,34.2,26.2z"/>
                <path   d="M43.1,28.1h-2.9V15h2.9V28.1z"/>
                <path   d="M44.8,16.5c0-0.4,0.1-0.7,0.4-1c0.3-0.3,0.7-0.4,1.1-0.4c0.5,0,0.9,0.1,1.1,0.4c0.3,0.3,0.4,0.6,0.4,1
                    s-0.1,0.7-0.4,1c-0.3,0.3-0.7,0.4-1.1,0.4c-0.5,0-0.9-0.1-1.1-0.4C45,17.2,44.8,16.9,44.8,16.5z M47.9,28.1H45v-9.2h2.9V28.1z"/>
                <path   d="M52.3,18.9l0.1,1.1c0.6-0.8,1.5-1.3,2.6-1.3c1,0,1.7,0.3,2.1,0.9c0.5,0.6,0.7,1.4,0.7,2.6v5.9H55v-5.8
                    c0-0.5-0.1-0.8-0.3-1c-0.2-0.2-0.5-0.3-1-0.3c-0.6,0-1,0.2-1.3,0.7v6.5h-2.9v-9.2H52.3z"/>
                <path   d="M59.4,16.5c0-0.4,0.1-0.7,0.4-1s0.7-0.4,1.1-0.4c0.5,0,0.9,0.1,1.1,0.4s0.4,0.6,0.4,1s-0.1,0.7-0.4,1
                    s-0.7,0.4-1.1,0.4c-0.5,0-0.9-0.1-1.1-0.4S59.4,16.9,59.4,16.5z M62.5,28.1h-2.9v-9.2h2.9V28.1z"/>
                <path   d="M71.8,23.2H73v2.2h-1.3v2.6h-2.9v-2.6h-4.8L64,23.7l5-8v0h2.9V23.2z M66.7,23.2h2.2v-3.8l-0.2,0.3
                    L66.7,23.2z"/>
            </g>
            <g id="logo">
                <path fill="#066C62" d="M17.6,30.2c-0.2-0.5-0.2-1.1,0-1.8l4.3-13.1l-7,11.1c-0.5,0.7-0.8,1.2-1,1.6c-0.2,0.3-0.6,0.6-1,0.8
                    c-0.4,0.2-0.9,0.2-1.5,0c-0.4-0.1-0.8-0.4-1-0.7c-0.2-0.3-0.4-0.6-0.5-1s-0.1-0.7-0.1-1.1c0-0.4,0-0.8,0.1-1.2l0.9-13.1L6.4,24.7
                    c-0.2,0.7-0.6,1.2-1,1.5c0,0,0,0,0,0l6.7,3.9c1.8,1,3.9,1.2,5.7,0.5C17.7,30.4,17.6,30.3,17.6,30.2L17.6,30.2z"/>
                <path fill="#00A69C" d="M26,6l-7.2-4.1c-2.1-1.2-4.6-1.2-6.7,0L4.9,6c-2.1,1.2-3.4,3.4-3.4,5.8v8.3c0,1.4,0.4,2.7,1.2,3.8
                    c0-0.1,0.1-0.2,0.1-0.4l4.9-15C8,7.7,8.4,7.2,8.9,7.1s1.2-0.1,1.9,0.1L12,7.6c0.7,0.2,1.2,0.5,1.5,0.7c0.1,0.1,0.2,0.2,0.3,0.4
                    l4.7,5.7l1-1.5c0.4-0.7,0.8-1.2,1.1-1.5c0.3-0.3,0.6-0.4,0.9-0.5c0.4,0,0.9,0.1,1.6,0.3l1.2,0.4c0.7,0.2,1.3,0.6,1.6,1l3.4,5v-5.8
                    C29.3,9.5,28.1,7.2,26,6L26,6z"/>
                <path fill="#066C62" d="M13.8,8.7C13.9,8.8,13.9,9,14,9.2c0,0.4,0,1,0,1.8l-0.6,11.3l5.2-8L13.8,8.7z"/>
                <path fill="#066C62" d="M29.3,20.1v-2.5l-3.4-5c0.3,0.4,0.4,1.1,0.1,1.9l-4.6,14.1L26,26C28.1,24.8,29.3,22.5,29.3,20.1L29.3,20.1z
                    "/>
                <path fill="#fff"  d="M26,14.5c0.2-0.7,0.2-1.3,0-1.8l-0.1-0.1c-0.3-0.4-0.9-0.8-1.6-1l-1.2-0.4c-0.7-0.2-1.3-0.3-1.6-0.3
                    c-0.4,0-0.7,0.2-0.9,0.5c-0.3,0.3-0.6,0.8-1.1,1.5l-1,1.5l-5.2,8L14,11.1c0-0.8,0-1.4,0-1.8c0-0.2-0.1-0.4-0.2-0.6
                    c-0.1-0.1-0.2-0.3-0.3-0.4c-0.3-0.2-0.8-0.5-1.5-0.7l-1.2-0.4C10.1,7,9.4,6.9,8.9,7.1C8.4,7.2,8,7.7,7.7,8.6l-4.9,15
                    c0,0.1-0.1,0.2-0.1,0.4c0.6,0.8,1.3,1.5,2.2,2l0.4,0.2c0,0,0,0,0,0c0.4-0.3,0.8-0.7,1-1.5l4.3-13.1L9.7,24.7c0,0.4,0,0.8-0.1,1.2
                    c0,0.4,0,0.8,0.1,1.1c0.1,0.4,0.2,0.7,0.5,1c0.2,0.3,0.6,0.5,1,0.7c0.6,0.2,1.1,0.2,1.5,0c0.4-0.2,0.8-0.4,1-0.8
                    c0.2-0.3,0.6-0.9,1-1.6l7-11.1l-4.3,13.1c-0.2,0.7-0.2,1.3,0,1.8c0.1,0.1,0.1,0.3,0.2,0.4c-0.5,0.2-1.1,0.3-1.6,0.4
                    c0.9-0.1,1.8-0.4,2.6-0.9l2.6-1.5L26,14.5z"/>
            </g>
            <g id="dots">
                <path  id="dot3"   d="M77,23.9c0.6,0,1.2,0.2,1.6,0.6s0.6,0.9,0.6,1.5s-0.2,1.1-0.6,1.5c-0.4,0.4-1,0.6-1.6,0.6
                    c-0.7,0-1.2-0.2-1.6-0.6c-0.4-0.4-0.6-0.9-0.6-1.5s0.2-1.1,0.6-1.5S76.3,23.9,77,23.9z"/>
                <path  id="dot2"   d="M77,23.9c0.6,0,1.2,0.2,1.6,0.6s0.6,0.9,0.6,1.5s-0.2,1.1-0.6,1.5c-0.4,0.4-1,0.6-1.6,0.6
                    c-0.7,0-1.2-0.2-1.6-0.6c-0.4-0.4-0.6-0.9-0.6-1.5s0.2-1.1,0.6-1.5S76.3,23.9,77,23.9z"/>
                <path  id="dot1"   d="M77,23.9c0.6,0,1.2,0.2,1.6,0.6s0.6,0.9,0.6,1.5s-0.2,1.1-0.6,1.5c-0.4,0.4-1,0.6-1.6,0.6
                    c-0.7,0-1.2-0.2-1.6-0.6c-0.4-0.4-0.6-0.9-0.6-1.5s0.2-1.1,0.6-1.5S76.3,23.9,77,23.9z"/>
            </g>
            </svg>
        
        </>
        
);
}

export default NavbarLogo;
