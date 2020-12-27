import styled from "styled-components";

export const Pre = styled.pre`
	position: relative;
	text-align: left;
	margin-bottom: 1.45rem;
	padding: 1rem;
	overflow: auto;
	font-size: 1.2rem;
	&::before {
		background: black;
		border-radius: 0 0 0.3rem 0.3rem;
		font-size: 0.9rem;
		letter-spacing: 0.025rem;
		padding: 0.2rem 0.7rem;
		position: absolute;
		right: 1.5rem;
		text-align: right;
		text-transform: uppercase;
		top: 0rem;
	}
	&[class~="language-jsx"]{
		&::before{
			content: "JSX";
			background: #2b7489;
			color: white;
		}
	}
	&[class~="language-js"]{
		&::before{
			content: "JS";
			background: #f1e05a;
			color: black;
		}
	}
`;

export const Line = styled.div`
	display: table-row;
`;

export const LineNo = styled.span`
	display: table-cell;
	text-align: right;
	padding-right: 1em;
	user-select: none;
	opacity: 0.5;
`;

export const LineContent = styled.span`
	display: table-cell;
	width: 100%;
	&.highlight-line{
		background-color: rgba(160, 160, 160, 0.2);
	}
`;

