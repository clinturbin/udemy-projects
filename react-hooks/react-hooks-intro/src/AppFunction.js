import React, { useState, useEffect } from 'react';

const App = () => {
    const [count, setCount] = useState(0);
    const [isOn, setIsOn] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    useEffect(() => {
        document.title = `You have clicked ${count} times`;
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [count]);

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    const toggleLight = () => {
        setIsOn(prevIsOn => !prevIsOn)
    };

    const handleMouseMove = event => {
        setMousePosition({
            x: event.pageX,
            y:event.pageY
        });
    };

    return (
        <>
            <h2>Counter</h2>
            <button onClick={incrementCount}>I was clicked {count} times</button>

            <h2>Toggle Light</h2>
            <img
                src={
                    isOn ? 'https://icon.now.sh/highlight/fd0' : 'https://icon.now.sh/highlight/aaa'
                }
                style={{
                    height: '50px',
                    width: '50px',
                    // backgroundColor: isOn ? 'yellow' : 'grey'
                }}
                onClick={toggleLight}
                alt="Flashlight"
            />

            <h2>Mouse Position</h2>
            {JSON.stringify(mousePosition, null, 2)}
            <br/>
        </>
    );
};

export default App;