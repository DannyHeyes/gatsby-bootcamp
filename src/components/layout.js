import React from 'react';
import Header from './header';
import Footer from './footer';

import '../styles/index.scss';
import {container, content} from '../styles/layout.module.scss';

const PageLayout = (props) => {
    return ( 
        <div className={container}>
            <div className={content}>
                <Header/>
                {props.children}
            </div>
            <Footer/>
        </div>
     );
}
 
export default PageLayout;