import { useState } from 'react';

import MoreButton from '../MoreButton/MoreButton';

export default function UpcomingMatches({ nextFixtureData }) {

    const [displayedUpcoming, setDisplayedUpcoming] = useState(10);

    const loadMoreUpcoming = () => {
        setDisplayedUpcoming(displayedUpcoming + 10);
    }
    
    return (
        <>
            <div className='upcoming-games-wrapper'>
                {nextFixtureData.response.slice(0, displayedUpcoming).map((upcomingGame) => {

                    const fomattedDate = () => {
                        const dateString = upcomingGame.fixture.date;

                        const date = new Date(dateString);

                        const months = [
                        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                        ];
                        
                        const year = date.getFullYear();
                        const month = months[date.getMonth()];
                        const day = date.getDate();
                        
                        const dateFormatted = `${month} ${day}, ${year}`;

                        return dateFormatted;
                    }

                    const formattedTime = () => {
                        const timestamp = upcomingGame.fixture.timestamp;

                        // Create a new Date object using the timestamp (multiply by 1000 to convert from seconds to milliseconds)
                        const date = new Date(timestamp * 1000);
                        const longDate = date.toString();

                        const timeString = longDate;
                        const dateString = new Date(timeString);

                        let hours = dateString.getHours();
                        const minutes = dateString.getMinutes();
                        const period = hours >= 12 ? 'PM' : 'AM';

                        // Convert hours to 12-hour format
                        if (hours > 12) {
                            hours -= 12;
                        } else if (hours === 0) {
                            hours = 12;
                        }

                        const timeFormatted = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${period}`;
                        return timeFormatted;

                    }
                    
                    return (
                        <div className='table-main' key={upcomingGame.fixture.id}>
                            <div className='upcoming-matches-league'>
                                <img src={upcomingGame.league.logo} height={35} width={35} alt={upcomingGame.league.name} />
                                <p>{upcomingGame.league.name}</p>
                            </div>
                            <div className='table-wrapper'>
                                <div className='team-wrapper'>
                                    <div>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={upcomingGame.teams.home.logo} alt={upcomingGame.teams.home.name} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{upcomingGame.teams.home.name}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='vs'>
                                    <p><strong>vs</strong></p>
                                    <p className="badge-sm">{upcomingGame.fixture.venue.name}</p>
                                    <p className="badge-sm">{fomattedDate()} at {formattedTime()}</p>
                                </div>
                                <div className='team-wrapper'>
                                    <div>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={upcomingGame.teams.away.logo} alt={upcomingGame.teams.away.name} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{upcomingGame.teams.away.name}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )    
                })}

                <MoreButton fixturesDisplayed={displayedUpcoming} dataType={nextFixtureData} displayedFixturesSet={() => loadMoreUpcoming()} />
                
            </div>
        </>
    )

}