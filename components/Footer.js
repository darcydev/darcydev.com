import styled from 'styled-components';
import {
	FaGithub as GitHub,
	FaLinkedin as LinkedIn,
	FaTwitterSquare as Twitter,
	FaFilePdf as PDF,
} from 'react-icons/fa';
import { MdEmail as Mail } from 'react-icons/md';

import LinkComponent from './Link';

export default function Footer() {
	return (
		<StyledFooter>
			<div className='icons-wrp'>
				<ul>
					<LinkComponent href='https://github.com'>
						<GitHub size={40} color='#fff' />
					</LinkComponent>
					<LinkComponent href='https://github.com'>
						<LinkedIn size={40} color='#fff' />
					</LinkComponent>
					<LinkComponent href='https://github.com'>
						<Twitter size={40} color='#fff' />
					</LinkComponent>
					<LinkComponent href='https://github.com'>
						<PDF size={40} color='#fff' />
					</LinkComponent>
					<LinkComponent href='https://github.com'>
						<Mail size={40} color='#fff' />
					</LinkComponent>
				</ul>
			</div>
		</StyledFooter>
	);
}

const StyledFooter = styled.footer`
	background: #2a2f4a;
	padding: 80px 20px;
	border-top: 1px solid #fff;

	.icons-wrp {
		ul {
			display: flex;

			a {
				margin: 0 7px;

				:first-child {
					margin-left: 0;
				}

				:last-child {
					margin-right: 0;
				}
			}
		}
	}
`;
