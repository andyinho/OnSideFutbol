import React from 'react';
import { useParams } from 'react-router-dom';

import Score from '../FixtureScore/Score';
import Details from '../FixtureDetails/Details';
import Events from '../FixtureEvents/Events';

export default function Fixture({ liveFixtureData }) {

  const params = useParams();
  
  const matchID = params.matchID;

  const results = liveFixtureData.response.filter((match) => {
    return match.fixture.id == matchID;
  })

  const individualLiveFixture = results[0];

  const fomattedDate = () => {
    const dateString = individualLiveFixture.fixture.date;

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

    return (
      <>
        <section id='fx-head' className='fx-head'>
          <div className='fx_league_name'>
              <p>{individualLiveFixture.league.name} ・ <span>{fomattedDate()}</span></p>
              <p><span className='fx_minute'>{individualLiveFixture.fixture.status.elapsed}<span>`</span></span> ・ {individualLiveFixture.fixture.status.long}</p>
            </div>
          <div className='table-wrapper' key={individualLiveFixture.fixture.id}>
            <div className='team-wrapper'>
                <div>
                    <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20">
                            <img src={individualLiveFixture.teams.home.logo} alt={individualLiveFixture.teams.home.name} />
                        </div>
                    </div>
                    <div>
                        <div className="font-normal">{individualLiveFixture.teams.home.name}</div>
                    </div>
                </div>
            </div>
            <div className='vs'>
                <p className='text-xl fx_goals'><span>{individualLiveFixture.goals.home}</span> - <span>{individualLiveFixture.goals.away}</span></p>
                <p className="fx_season_round">{individualLiveFixture.league.round}</p>
            </div>
            <div className='team-wrapper'>
                <div>
                    <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20">
                            <img src={individualLiveFixture.teams.away.logo} alt={individualLiveFixture.teams.away.name} />
                        </div>
                    </div>
                    <div>
                        <div className="font-normal">{individualLiveFixture.teams.away.name}</div>
                    </div>
                </div>
            </div>
          </div>
        </section>

        <section id='fx-events' className='fx-events'>
          <Events individualLiveFixture={individualLiveFixture} />
        </section>

        <section id='fx-timeline' className='fx-timeline'>
          <Score individualLiveFixture={individualLiveFixture} />
        </section>

        <section>
          <Details individualLiveFixture={individualLiveFixture} />
        </section>
        </>
    )
}