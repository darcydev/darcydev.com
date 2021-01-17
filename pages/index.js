import styled from 'styled-components';

import { calculateAge } from '../utils/calculateAge';

export default function Home() {
	const age = calculateAge();

	return (
		<>
			<StyledHero>
				<div className='content'>
					<h1>Hello, I'm Darcy Price!</h1>
					<h2>Full Stack Developer</h2>
				</div>
			</StyledHero>
		</>
	);
}

const StyledHero = styled.section`
	height: 100vh;
	background: #000;

	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: auto;
		align-items: center;
		width: 1200px;
		max-width: 90%;
		height: 100%;

		h1 {
			margin: 0;
			font-size: 40px;
			width: 100%;
			color: #fff;

			:after {
				content: '';
				background-color: #fff;
				display: block;
				height: 2px;
				margin: 0.325em 0 0.5em 0;
				width: 100%;
			}
		}

		h2 {
			width: 100%;
			margin: 0;
			font-size: 25px;
			color: #fff;
		}
	}
`;
