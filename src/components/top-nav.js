import React from 'react';

import './top-nav.css';

export default function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a className="what" href="#" onClick={e => props.showInfo(true)}>
                        What?
                    </a>
                </li>
                <li>
                    <a className="new" href="#" onClick={e => props.newGame()}>
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}
