import { useState } from 'react';
import { Link } from 'react-router-dom';

const getDate = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const today = new Date();
    const monthIndex = today.getMonth();
    const day = today.getDate()
    const year = today.getFullYear();

    const month = months[monthIndex];

    return `${month} ${day}, ${year}`
}

export default function Stats( {liveFixtureData, nextFixtureData} ) {

    // Get unique leagues
    const getUniqueLeague = () => {
        const uniqueLeagues = new Set();

        {liveFixtureData.response.map((league) => {
            if (!uniqueLeagues.has(league.league.name)) {
                uniqueLeagues.add(league.league.name);
            } else {
                return null;
            }})
        } 
        return uniqueLeagues.size;
    }

        // Get unique countries
        const getUniqueCountris = () => {
            const uniqueCountries = new Set();
    
            {liveFixtureData.response.map((country) => {
                if (!uniqueCountries.has(country.league.country)) {
                    uniqueCountries.add(country.league.country)
                } else {
                    return null;
                }})
            }
            return uniqueCountries.size;
        }

    const [currentDate, SetCurrentDate] = useState(getDate());
    const [currentLeagues, setCurrentLeagues] = useState(getUniqueLeague());
    const [currentCountries, setCurrentCountries] = useState(getUniqueCountris());
    

    return (
        <>
            <div className="stats stats-vertical lg:stats-horizontal shadow">
                
                <div className="stat">
                    <div className="stat-title">Leagues in Play</div>
                    <div className="stat-value">{currentLeagues}</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Live Matches</div>
                    <div className="stat-value">{liveFixtureData.results}</div>
                    <div className="stat-desc">{currentDate}</div>
                </div>
                
                <Link to={`/upcoming-matches/`} className='stat_upcoming_matches'>
                    <div>
                        <div className="stat-title">Upcoming Matches</div>
                        <div className="stat-value">{nextFixtureData.results}</div>
                    </div>
                </Link>
            
            </div>
        </>
    )
}