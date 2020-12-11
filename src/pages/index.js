import React from 'react';

import Layout from '../components/layout/layout';

// Sections
import Home from '../sections/home';
import About from '../sections/about';

const IndexPage = () => (
	<Layout>
		<Home />
		<About />
	</Layout>
);

export default IndexPage;
