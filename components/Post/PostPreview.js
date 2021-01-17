import styled from 'styled-components';

import Date from '../Date';
import LinkComponent from '../Link';

export default function PostPreview({ post }) {
	const { coverImage, title, description, slug, createdAt } = post;

	console.log('createdAt :>> ', createdAt);

	return (
		<StyledContainer>
			<div className='img-wrp'>
				<img src={coverImage.url} alt={title} />
			</div>
			<div className='txt-wrp'>
				<h2>{title}</h2>
				{createdAt && <Date datetime={createdAt} />}
				<p>{description}</p>
				<LinkComponent href={`/blog/${slug}`}>Read</LinkComponent>
			</div>
		</StyledContainer>
	);
}

const StyledContainer = styled.div`
	display: flex;
	margin: 40px 0;

	:first-child {
		margin-top: 0;
	}

	:last-child {
		margin-bottom: 0;
	}

	.img-wrp {
		margin-right: 20px;
	}

	.txt-wrp {
		position: relative;
		flex: 1;

		h2 {
			margin: 0 0 10px 0;
			font-size: 25px;
		}

		time {
			font-size: 14px;
			font-style: italic;
		}

		p {
			font-size: 18px;
		}

		a {
			position: absolute;
			bottom: 4px;
			border: 2px solid blue;
			padding: 20px;
			width: 150px;
		}
	}
`;
