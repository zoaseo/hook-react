import React, { useEffect, useState, useMemo } from 'react';

const App3 = () => {
    const [ number, setNumber ] = useState(0);
    const [ isKorea, setIsKorea ] = useState(true);
    // const location = {
    //     country: isKorea ? "한국" : "외국"
    // }
    const location = useMemo(()=>{
        return {
            country: isKorea ? "한국" : "외국",
        }
    },[isKorea])
    useEffect(()=>{
        console.log("useEffect 호출");
    },[location])
    return (
        <div>
            <h1>어떤 숫자를 좋아하세요?</h1>
            <input
            type="number"
            value={number}
            onChange={(e)=> setNumber(e.target.value)}
            />
            <h1>어느 나라에 있어요?</h1>
            <p>나라 : {location.country}</p>
            <button onClick={()=>setIsKorea(!isKorea)}>여행가자</button>
        </div>
    );
};

export default App3;