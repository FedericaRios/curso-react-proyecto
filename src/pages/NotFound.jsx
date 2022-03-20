import React from 'react';
import '../styles/retoError.scss'
import loguito from '@logos/error404.jpg'

const NotFound = () => {
	return (
		<div class = "not-found-container">
			<h1>Not found, error 404.</h1>
			<p className="parrafo">We couldn't find the page you want, please try again!</p>
            <img src={loguito} alt="imagen" className="imagen" />
		</div>
	);
}

export default NotFound;