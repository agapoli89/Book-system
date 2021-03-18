const BestHotel = (props) => {
    const hotel = props.getHotel();

    if (!hotel) return null;

    return (
        <div className='card bg-success text-white'>
            <div className="card-header">Najlepsza oferta!</div>
            <div className='card-body d-flex justify-content-between'>
                <h5 className='card-title'>{hotel.name}</h5> <p>Ocena: {hotel.rating}</p>
                <a href="#" className="btn btn-sm btn-light d-flex align-items-center">Pokaż</a>
            </div>
        </div>
    )
}

export default BestHotel;