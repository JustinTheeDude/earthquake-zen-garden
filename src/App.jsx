import React, {useEffect} from 'react'
import Header from './components/header';
import data from './earthquake_data/earthquakedata.json';

const App = () => {

    useEffect(() => {
        console.log(data)
        getData()
    },[])

    const getData = () => {
        fetch("earthquake_data/earthquakedata.json")
            .then(res => res.json())
            .then(data => console.log(data));
    }

    return (
        <>
            <Header />
        </>
    );
}

export default App
