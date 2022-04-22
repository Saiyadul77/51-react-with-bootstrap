import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        { id: 1, name: 'laptop pro', price: 125000 },
        { id: 2, name: 'laptop bro', price: 130000 },
        { id: 3, name: 'laptop cro', price: 150000 },

    ]

    return (
        <div>
            <h2>This is Card Group</h2>
            <div className="card-group">

                {
                    products.map(product => <Card product={product} key={product.id}></Card>)
                }
            </div>
        </div>
    );
};

export default CardGroup;