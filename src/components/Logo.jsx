function Logo({ width = "100px" }) {
	return (
		<svg
			width={width}
			height={width}
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			stroke="currentColor"
		>
			<circle cx="12" cy="12" r="10" fill="#3b5998" />
			<path d="M12 19l7-7 2 2-7 7-2-2z" fill="white" />
			<path
				d="M18 13l-1.5-1.5-7 7-2.5.5.5-2.5 7-7L13 6 4 15v3h3l9-9z"
				fill="white"
			/>
			<path
				d="M7 2h8v4h4v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
				stroke="white"
			/>
			<line x1="7" y1="7" x2="17" y2="7" stroke="white" />
			<line x1="7" y1="11" x2="17" y2="11" stroke="white" />
			<line x1="7" y1="15" x2="14" y2="15" stroke="white" />
		</svg>
	);
}

export default Logo;
