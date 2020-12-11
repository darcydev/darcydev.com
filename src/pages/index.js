import React from 'react';

import Layout from '../components/layout/layout';

// Sections
import Home from '../sections/home';
import About from '../sections/about';
import Contact from '../sections/contact';

const IndexPage = () => (
	<Layout>
		<Home />
		<About />
		<Contact />
	</Layout>
);

export default IndexPage;
