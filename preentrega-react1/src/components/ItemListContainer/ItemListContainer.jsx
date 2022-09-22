import React from 'react';

const ItemListContainer = () => {
    return (
        <>
            <div className='d-flex'>
                <div className="card m-5 p-3" style={{width: '18rem' }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body m-5 p-2">
                        <h5 className="card-title">DIOR</h5>
                        <p className="card-text">J'Adore EDP</p>
                        <a href="#" className="btn btn-primary">Ver Producto</a>
                    </div>
                </div>

                <div className="card m-5 p-3" style={{width: '18rem' }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body m-5 p-2">
                        <h5 className="card-title">GIORGIO ARMANI</h5>
                        <p className="card-text">Acqua Di Gio Pour Homme EDP</p>
                        <a href="#" className="btn btn-primary">Ver Producto</a>
                    </div>
                </div>

                <div className="card m-5 p-3" style={{width: '18rem' }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body m-5 p-2">
                        <h5 className="card-title">PACO RABANNE</h5>
                        <p className="card-text">Invictus EDT</p>
                        <a href="#" className="btn btn-primary">Ver Producto</a>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ItemListContainer;
