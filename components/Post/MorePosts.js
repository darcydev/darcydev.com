import styled from 'styled-components';

import Date from '../Date';
import LinkComponent from '../Link';

export default function MorePosts({ posts }) {
	return (
		<StyledContainer>
			<h3>More Posts</h3>
			<div className='posts-wrp'>
				{posts.map((post) => (
					<div key={post.id} className='post-wrp'>
						<div className='img-wrp'>
							<img src={post.coverImage.url} alt={post.title} />
						</div>
						<div className='txt-wrp'>
							<LinkComponent href={`/blog/${post.slug}`}>
								<h4>{post.title}</h4>
							</LinkComponent>
							<Date datetime={post.createdAt} />
							<p>{post.description}</p>
						</div>
					</div>
				))}
			</div>
		</StyledContainer>
	);
}

const StyledContainer = styled.div`
	h3 {
		font-size: 25px;
	}

	.posts-wrp {
		display: flex;
		justify-content: space-between;

		.post-wrp {
			flex: 0 0 30%;

			.img-wrp {
				img {
					width: 100%;
					height: auto;
					border-radius: 20px;
				}
			}

			.txt-wrp {
				h4 {
					font-size: 22px;
					margin: 20px 0;
				}

				time {
					font-size: 14px;
				}

				p {
					font-size: 16px;
				}
			}
		}
	}
`;
