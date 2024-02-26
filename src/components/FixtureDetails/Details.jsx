import classes from './Details.module.css'
import Stadium from '../../assets/images/svgComponents/Stadium';
import Whistle from '../../assets/images/svgComponents/Whistle';
import Location from '../../assets/images/svgComponents/Location';
import Calendar from '../../assets/images/svgComponents/Calendar';

export default function Details({ individualLiveFixture }) {
    return (
        <>
        <div className={classes.details_head}>
            <div></div>
            <h2 className={classes.details_header}>MATCH DETAILS</h2>
            <div></div>
        </div>
        <div className={classes.details_wrapper}>
            <div className={classes.details_type}><Stadium /> {individualLiveFixture.fixture.venue.name}</div>
            <div className={classes.details_type}><Location /> {individualLiveFixture.fixture.venue.city}, {individualLiveFixture.league.country}</div>
            {!individualLiveFixture.fixture.referee ? null : (<div className={classes.details_type}><Whistle /> {individualLiveFixture.fixture.referee}</div>)}
            <div className={classes.details_type}><Calendar /> {individualLiveFixture.league.round}</div>
        </div>

            
        </>
    )
}