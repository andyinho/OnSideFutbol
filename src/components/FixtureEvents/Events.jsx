import classes from './Events.module.css';
import soccer_ball from '../../assets/images/soccer_ball.png';

export default function Events({ individualLiveFixture }) {

    const homeTeam = individualLiveFixture.teams.home.name;
    const awayTeam = individualLiveFixture.teams.away.name;
    
    return (
        <>
        <div className={classes.home_goals}>
            {individualLiveFixture.events.length === 0 ? null : individualLiveFixture.events.map((event, index) => {

                return (
                    <div key={index}>
                        {event.type === 'Goal' && event.team.name === homeTeam && event.detail !== 'Missed Penalty' ? (
                            <p className={classes.ev_name}>{event.player.name} {event.time.elapsed}'</p>  
                        ) : (
                            null
                        )}
                    </div>
                )
            })}
        </div>
            
        <div className='Goals'><img src={soccer_ball} width={12} alt='Goal' /></div>
            
        <div className={classes.away_goals}>
            {individualLiveFixture.events.length === 0 ? null : individualLiveFixture.events.map((event, index) => (
                
                <div key={index}>
                    {event.type === 'Goal' && event.team.name === awayTeam && event.detail !== 'Missed Penalty' ? (
                        <p className={classes.ev_name}>{event.player.name} {event.time.elapsed}'</p>  
                    ) : (
                        null
                    )}
                </div>
                
            ))}
        </div>    

        </>
    )
}
