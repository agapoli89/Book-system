function LastHotel(props) {
    
    return (
        <div className='card bg-light'>
            <div className="card-header">Ostatnio oglądałaś/eś ten hotel. Czy nadal zainteresowana/y?</div>
            <h5 className='card-title text-center mt-3'>{props.name}</h5>
            <div className='card-body d-flex justify-content-center'>
                <a href="#" className="btn btn-sm btn-dark mx-2">Tak</a>
                <button 
                    onClick={props.onRemove} 
                    className="btn btn-sm btn-dark mx-2">
                    Nie
                </button>
            </div>
        </div>
    );
}

export default LastHotel;