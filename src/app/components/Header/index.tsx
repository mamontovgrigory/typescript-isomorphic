import * as React from 'react';
import { Link } from 'react-router';

const style = require('./style.css');

export const Header = () => (
    <nav className={style.Header}>
        <div className={style.menu}>
            <Link to="/">
                <img src={require('./content/logo.svg')} width={48} height={48}/>
            </Link>
        </div>
    </nav>
);
