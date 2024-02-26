import classes from './Score.module.css';
import soccer_ball from '../../assets/images/soccer_ball.png';
import Sub from '../../assets/images/svgComponents/Sub.jsx';
import YellowCard from '../../assets/images/svgComponents/YellowCard.jsx';
import RedCard from '../../assets/images/svgComponents/RedCard.jsx';
import VAR from '../../assets/images/svgComponents/VAR.jsx';
import NoGoal from '../../assets/images/svgComponents/NoGoal.jsx';
import NoTimeline from '../../assets/images/svgComponents/NoTimeline.jsx';

export default function Details({ individualLiveFixture }) {
    return (
        <>
        <div className={classes.score_head}>
            <div></div>
            <h2 className={classes.score_header}>TIMELINE</h2>
            <div></div>
        </div>
        <div className={classes.score_main_wrapper}>
            {individualLiveFixture.events.length === 0 ? <div className={classes.score_no_timeline}><NoTimeline /><p>No updates, yet. Come back soon!</p></div> : individualLiveFixture.events.map((event, index) => {

                let eventDetail;

                if (event.type === 'subst') {
                eventDetail = <Sub />;
                } else if (event.type === 'Card' && event.detail === 'Yellow Card') {
                eventDetail = <YellowCard />;
                } else if (event.type === 'Card' && event.detail === 'Red Card') {
                eventDetail = <RedCard />;
                } else if (event.type === 'Var') {
                eventDetail = <VAR />;
                } else if (event.type === 'Goal' && event.detail === 'Missed Penalty') {
                    eventDetail = <NoGoal />
                }

                return (
                    <div key={index}>
                        <div className={classes.score_timeline_wrapper}>
                            {event.type === 'Goal' && event.detail !== 'Missed Penalty' ? (
                            
                            <div className={classes.score_goal_wrapper}>
                                <div className={classes.score_goal_header}>
                                    <img src={soccer_ball} alt='Soccer ball' width={25} />
                                    <p>GOOOAAALLL!!!</p>    
                                    <p>{event.time.elapsed}'</p>
                                    <p>{event.team.name}'s Goal!</p>    
                                </div>
                                <div className={classes.score_goal_body}>
                                    <div>    
                                        {!event.player.name ? null : <p>{event.player.name}</p>}
                                        <p className={classes.score_goal_body_team_detail}>{event.team.name} ・ {event.detail}</p>
                                        {!event.assist.name ? null : <p className={classes.score_goal_body_team_detail}>Asst: {event.assist.name}</p>}
                                    </div>
                                    <div>
                                        <img src={event.team.logo} width={50} alt={event.team.name} />
                                    </div>
                                        
                                </div>
                            </div>
                                
                            ) : (
                                <div className={classes.score_no_goal_wrapper}>
                                    <div className={classes.score_no_goal_header}>
                                        <div className={classes.score_no_goal_details}>
                                            {eventDetail}
                                            <p>{event.detail}</p>    
                                        </div>
                                        <p>{event.time.elapsed}'</p>  
                                    </div>

                                    {event.type === 'subst' ? (
                                        <div className={classes.score_no_goal_body}>
                                            <div>    
                                                <div className={classes.score_no_goal_body_subs}>
                                                    <p className={classes.score_no_goal_body_sub_in}>IN</p>    
                                                    {!event.player.name ? null : <p className={classes.score_no_goal_body_sub_name}>{event.player.name}</p>}
                                                    <p className={classes.score_no_goal_body_sub_team}>{event.team.name}</p>
                                                </div>
                                                    <div className={classes.score_no_goal_body_subs}>
                                                        <p className={classes.score_no_goal_body_sub_out}>OUT</p>    
                                                        {!event.player.name ? null : <p className={classes.score_no_goal_body_sub_name}>{event.assist.name}</p>}
                                                        <p className={classes.score_no_goal_body_sub_team}>{event.team.name}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <img src={event.team.logo} width={50} alt={event.team.name} />
                                                </div>
                                        </div>        
                                        ) : (
                                        <div className={classes.score_no_goal_body}>
                                            <div>      
                                                {!event.player.name ? null : <p>{event.player.name}</p>}
                                                <p className={classes.score_no_goal_body_sub_team}>{event.team.name}</p>
                                            </div>
                                            <div>
                                                <img src={event.team.logo} width={50} alt={event.team.name} />
                                            </div>        
                                        </div>  
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                )
            })}
        </div> 
        </>

    )
}