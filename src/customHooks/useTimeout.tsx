import React, { useState, useEffect, useRef } from 'react'; 

// creating the custom useTimeout hook 
const useTimeout = (callback, delay:number) => { 

	// Creating a ref 
	const funCallback = useRef(); 

	// To remember the latest callback . 
	useEffect(() => { 
		funCallback.current = callback; 
	}, [callback]); 

	// Setting and clearing up a timeout 
	useEffect(() => { 
		const func = () => { 
			funCallback.current(); 
		} 
		if (delay !== null) { 
			let id = setTimeout(func, delay); 
			return () => clearTimeout(id); 
		} 
	}, [delay]); 
}; 

export default useTimeout;
