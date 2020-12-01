import React from 'react';

import Page from '../../components/Page';
import Menu from '../../components/Menu';
import Main from '../../components/Main';
import Header from '../../components/Header';
import Button from '../../components/Button';


import './style.css';

function Process() {
	return (
		<>
			<Header />
			<Page>
				<Menu />
				<Main className="main">
					<div className="seach">
						<input type="text"/>
						<Button
							w="135px"
							h="45px"
							fontSize="24px"
						>
							Buscar
						</Button>
					</div>
					<div className="result">
						<div>
								
						</div>
						<div>

						</div>
					</div>
				</Main>
			</Page>
		</>
	)
}

export default Process;