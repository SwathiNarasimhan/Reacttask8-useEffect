import React, { useEffect, useState } from "react";

export const SelectUseEffectComp = () => {

    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [cities, setCities] = useState('');
    const [stateList, setStateList] = useState([]);
    const [citiesList, setCitiesList] = useState([]);

    useEffect(() =>{
        const fetchStates = async() => {
            if(country === 'India'){
                setStateList(['Tamilnadu', 'Kerala', 'Karnataka'])
            } else if (country === 'Pakistan') {
                setStateList(['Karachi']);
            } else if (country === 'Sri Lanka') {
                setStateList(['Northern Sri Lanka']);
            } else {
                setStateList([]);
            }
        };
        fetchStates();
    }, [country]);

    useEffect(() =>{
        const fetchStates = async() => {
            if (state === 'Tamilnadu') {
                setCitiesList(['Chennai', 'Madurai', 'Coimbatore']);
            } else if (state === 'Kerala') {
                setCitiesList(['Kochi', 'Thiruvananthapuram']);
            } else if (state === 'Karnataka') {
                setCitiesList(['Bangalore', 'Mangalore']);
            } else {
                setCitiesList([]);
            }
        };
        fetchStates();
    }, [state]);

    const handleCountryEvent = (e) => {
        setCountry(e.target.value);
        setState('');
        setCities('');
    }
    const handleStateEvent = (e) => {
        setState(e.target.value);
        setCities('');
    }
    const handleCityEvent = (e) => {
        setCities(e.target.value);
    }

    return(
        <div>
            <label htmlFor="country">Country:</label>
            <select id="country" value={country} onChange={handleCountryEvent}>
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Sri Lanka">Sri Lanka</option>
            </select>
            {country && (
                <>
                    <label htmlFor="state">State:</label>
                    <select id="state" value={state} onChange={handleStateEvent}>
                        <option value="">Select State</option>
                        {stateList.map((state) =>(
                            <option key={state} value={state}>{state}</option>
                        ))}
                    </select>
                </>
            )}
            {state && (
                <>
                    <label htmlFor="city">City:</label>
                    <select value={cities} id="city" onChange={handleCityEvent}>
                        <option value="">Select City</option>
                        {citiesList.map((cities) =>(
                            <option key={cities} value={cities}>{cities}</option>
                        ))}
                    </select>
                </>
            )}
        </div>
    );
}