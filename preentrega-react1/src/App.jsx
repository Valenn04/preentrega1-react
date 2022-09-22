import React from 'react';
import '../src/App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
    return (
        <>
            <Navbar/>
            <ItemListContainer/>
        </>
    );
}

export default App;