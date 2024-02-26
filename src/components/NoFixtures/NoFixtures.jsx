import { Link } from 'react-router-dom';

import classes from './NoFixtures.module.css';
import Snooze from '../../assets/images/svgComponents/Snooze.jsx';

export default function NoFixtures() {
    return (
        <div>
            <div className={classes.no_fx_main}>
                <Snooze />
                <div className={classes.no_fx_wrapper}>
                    <h1>World football is taking a break.</h1>
                    <p>Find upcoming fixtures to get back in the action!</p>
                    <Link to={'/upcoming-matches'}><button className='button'>Upcoming Fixtures</button></Link>
                </div>
            </div>
            
        </div>
    )
}