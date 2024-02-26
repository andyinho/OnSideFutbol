import Refresh from '../../assets/images/svgComponents/Refresh';

export default function RefreshButton({ onRefresh }) {

    return (
        <button onClick={onRefresh} className='refresh' aria-label="Refresh" title="Refresh">
            <Refresh />
        </button>   
    )
}