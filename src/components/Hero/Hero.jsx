export default function Hero() {

    const scrollToFixtureTable = () => {
        const fixtureTable = document.querySelector('.fixture-table');
        fixtureTable.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id='hero-section'>
            <div className="hero min-h-screen">
                <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">The Beautiful Game</h1>
                        <p className="mb-5 text-2xl"><em>at your fingertips</em></p>
                        <button onClick={scrollToFixtureTable} className="button">Live Fixtures</button>
                    </div>
                </div>
            </div>
        </section>
    )
}