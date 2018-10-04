import React, {Component} from 'react';

import styles from './create.less';
import {Link} from "react-router";

class Home extends Component {
    render() {
        return (
            <div className={styles.container}>
                Links:
                <Link to='/deploy' >Deploy </Link>
                <Link to='/create' >Create </Link>
            </div>
        );
    }
}

export default Home;
