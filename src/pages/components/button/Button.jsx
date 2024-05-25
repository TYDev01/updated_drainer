import React from 'react';

export default function Button({ children, className, onClick, ...rest }) {
	return (
		<button
			className={`font-bold text-white py-2 px-4 outline-none border-2 border-transparent bg-secondary  hover:border-2 hover:bg-transparent hover:border-secondary hover:text-secondary transition-all ${className}`}
			onClick={onClick}
			{...rest}>
			{children}
		</button>
	);
}
