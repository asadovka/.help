import React, { Component } from 'react';
import {Link} from "react-router";

import styles from './create.less';

class Favourites extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>/ How to switch between ethereum networks</h1>
                <ol>
                  <li>
                    <p>Go to setting. Write in address bar ".settings" or click on "gear" at top-right side</p>
                    <img className={styles.img-50} src={require("../img/settings_switch.png")} />
                  </li>
                  <li>
                    <p>Chose necessary ETH network with buttons "Main", "Rikenby" and "Kovan"</p>
                  </li>
                  <li>
                    <p>You can also change network addresses for your custom by following <Link to='/eth' >guide</Link></p>
                  </li>
                </ol>
            </div>
        );
    }
}

export default Favourites;
