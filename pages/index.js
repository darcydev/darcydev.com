import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Home() {
	return (
		<div>
			<Header />
			<main>
				<section className='hero'>
					<h1>Darcy Price</h1>
					<h2>is getting things done at Impress Design</h2>
				</section>
				<section className='list-section'>
					<div className='list-wrp'>
						<h3>Currently</h3>
						<ul>
							<li>Full Stack Developer at Impress Design</li>
							<li>XXX at YYY</li>
							<li>AAA at BBB</li>
						</ul>
					</div>
					<div className='list-wrp'>
						<h3>Previously</h3>
						<ul>
							<li>Full Stack Developer at Impress Design</li>
							<li>XXX at YYY</li>
							<li>AAA at BBB</li>
						</ul>
					</div>
					<div className='list-wrp'>
						<h3>Interested In</h3>
						<ul>
							<li>Full Stack Developer at Impress Design</li>
							<li>XXX at YYY</li>
							<li>AAA at BBB</li>
						</ul>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
