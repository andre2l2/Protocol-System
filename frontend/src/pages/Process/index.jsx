import React from 'react';
import styled from 'styled-components';

import Page from '../../components/Page';
import Menu from '../../components/Menu';
import Main from '../../components/Main';
import Header from '../../components/Header';
import Button from '../../components/Button';

function Process() {
	const Seach = styled.div`
		display: flex;

		input {
			width: 285px;
			font-size: 20px;
			padding-left: 5px;
		}

		button {
			margin-left: 10px;
		}
	`

	const Result = styled.div`
		display: flex;
		margin-top: 15px;
		
		div {
			height: 60vh;
			width: 25vw;
			margin: 0 5px;

			border: solid 2px var(--menu-color);
		}
	`
 
	return (
		<>
			<Header />
			<Page>
				<Menu />
				<Main className="main">
					<Seach>
						<input type="text" autoFocus="true"/>
						<Button
							w="135px"
							h="45px"
							fontSize="24px"
						>
							Buscar
						</Button>
					</Seach>
					<Result>
						<div>
								
						</div>
						<div>

						</div>
					</Result>
				</Main>
			</Page>
		</>
	)
}

export default Process;