import React, { Component } from 'react';
const compInfo= require( '../ compInfo.json');
class Footer_v1 extends Component {

	componentDidMount() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/main.js";

		document.body.appendChild(minscript);
	}

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return (
			<footer className="footer-area">
				<div className="footer-top">
					<div className="container">
						<div className="row">
						<p className='text-center' style={{color:'white'}}>©2023, Copy Right PubMate</p>
						</div>
					</div>
				</div>
			</footer>

		)
	}
}


export default Footer_v1