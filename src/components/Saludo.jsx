import React from 'react';

const Saludo = ({saludo}) => {
    return (
        <section className='text-center mt-3'>
                <h1 className='text-light'>{saludo}</h1>
        </section>
    );
};

export default Saludo;