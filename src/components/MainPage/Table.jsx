import { useState } from 'react';
import { Link } from 'react-router-dom';

import Stats from '../Stats/Stats';
import Hero from '../Hero/Hero';
import NoFixtures from '../NoFixtures/NoFixtures';
import MoreButton from '../MoreButton/MoreButton';

export default function Table({ liveFixtureData, nextFixtureData }) {

    const [displayedFixtures, setDisplayedFixtures] = useState(9);

    const loadMoreUpcoming = () => {
        setDisplayedFixtures(displayedFixtures + 9);
    }

    if (liveFixtureData.response === 0 || nextFixtureData.response === 0) {
        return <NoFixtures />
    }

    return (
        <>  
            <Stats liveFixtureData={liveFixtureData} nextFixtureData={nextFixtureData} />

            <Hero />

            <section id='fixture-table' className='fixture-table'>
                <div className='main-wrapper'>
                    {liveFixtureData.response.slice(0, displayedFixtures).map((fixtureLive) => (
    
                        <div className={`fixture_wrapper`} key={fixtureLive.fixture.id}>
                            <Link to={`/live-matches/${fixtureLive.fixture.id}`}>
                                <div className='card w-96 bg-base-100 shadow-xl'>
                                    <div className='card-body'>
                                        <img src={fixtureLive.league.logo} alt={fixtureLive.league.name} width={50} />
                                        <p>{fixtureLive.league.name}</p>
                                        <h2 className='card-title'>{fixtureLive.teams.home.name} vs {fixtureLive.teams.away.name}</h2>
                                        <div className='flex justify-between'>
                                            <p>{fixtureLive.goals.home} : {fixtureLive.goals.away}</p>
                                            <p className={`fx_minute`}>{fixtureLive.fixture.status.elapsed}<span>`</span></p>
                                        </div>
                                        <div className='card-actions justify-start'>
                                            <button className='button'>Match Details</button>
                                        </div>
                                    </div>
                                </div>
                            </Link>  
                        </div>

                    ))}
                </div>

                <MoreButton dataType={liveFixtureData} fixturesDisplayed={displayedFixtures} displayedFixturesSet={() => loadMoreUpcoming()} />

            </section>
        </>   
    );
}