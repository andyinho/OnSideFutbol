import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import './index.css'
import Header from './components/Header';
import Table from './components/MainPage/Table';
import Fixture from './components/FixtureHead/Fixture';
import UpcomingMatches from './components/UpcomingMatchesPage/UpcomingMatches';
import NoFixtures from './components/NoFixtures/NoFixtures';
import Loading from './components/Loading/Loading';
import RefreshButton from './components/RefreshButton/RefreshButton';


import { fetchLiveFixtures } from './lib/fetch-live-games';
import { fetchUpcomingGames } from './lib/fetch-upcoming-games';

function App() {

  const [liveFixtures, setLiveFixtures] = useState([]);
  const [liveUpcomingFixtures, setLiveUpcomingFixtures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchLiveFixtures();
      setLiveFixtures(result);
    };

    fetchData();
  }, []); // Empty dependency array for mounting effect

  useEffect(() => {
    const fetchUpcoming = async () => {
      const upcomingFixtures = await fetchUpcomingGames();
      setLiveUpcomingFixtures(upcomingFixtures);
    };

    fetchUpcoming();
  }, []); // Empty dependency array for mounting effect

  console.log(liveFixtures);

  const handleRefresh = () => {
    window.location.reload(true);
  };

  console.log('HALA MADRID!');

  return (
    <>
      <HashRouter>
        <Header />
        <RefreshButton onRefresh={() => handleRefresh()} />
        {liveFixtures.length == 0 ? (
          <Loading />          
        ) : (
          <Routes>
          <Route
            path='/'
            element={
              liveFixtures ? (
                <Table liveFixtureData={liveFixtures} nextFixtureData={liveUpcomingFixtures} />
              ) : (
                <NoFixtures />
              )
            }
          />
          <Route path='/live-matches/:matchID' element={<Fixture liveFixtureData={liveFixtures} />} />
          <Route path='/upcoming-matches/' element={<UpcomingMatches nextFixtureData={liveUpcomingFixtures} />} />
        </Routes>            
        )}
      </HashRouter>
    </>
  );
}

export default App

// import React, { useEffect, useState } from 'react';

// import './index.css'
// import Header from './components/Header';
// import Table from './components/MainPage/Table';
// import Fixture from './components/FixtureHead/Fixture';
// import UpcomingMatches from './components/UpcomingMatchesPage/UpcomingMatches';
// import NoFixtures from './components/NoFixtures/NoFixtures';
// import Loading from './components/Loading/Loading';
// import RefreshButton from './components/RefreshButton/RefreshButton';

// import { liveFixtureData } from './lib/dummy-data';
// import { nextFixtureData } from './lib/dummy-data-2';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// function App() {

//   console.log('HALA MADRID!')

//   const handleRefresh = () => {
//     window.location.reload(true);
//   };

//   return (
//     <>
//     <BrowserRouter>
//       <Header />
//       <RefreshButton onRefresh={() => handleRefresh()} />
//       {liveFixtureData.length == 0 ? (
//           <Loading />
//         ) : (
//           <Routes>
//           <Route path='/' element={liveFixtureData ? <Table liveFixtureData={liveFixtureData} nextFixtureData={nextFixtureData} /> : <NoFixtures />} />
//           <Route path='/live-matches/:matchID' element={<Fixture liveFixtureData={liveFixtureData} />} />
//           <Route path='/upcoming-matches/' element={<UpcomingMatches nextFixtureData={nextFixtureData} />} />
//         </Routes>    
//       )}
//     </BrowserRouter>
//     </>
//   )
// }

// export default App