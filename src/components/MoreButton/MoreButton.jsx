export default function MoreButton({ fixturesDisplayed, dataType, displayedFixturesSet }) {

    return (
        <>
            {fixturesDisplayed < dataType.response.length && (
                <div className='load-more-wrapper'>
                    <button className='button-secondary' onClick={displayedFixturesSet}>View More</button>
                </div>
            )}
        </>
    )
}