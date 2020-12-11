import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Page from '../../components/Page';
import Menu from '../../components/Menu';
import Main from '../../components/Main';
import Header from '../../components/Header';
import Button from '../../components/Button';

function Process() {
	async function processSeach() {
		const $process = document.querySelector('#process');
		const $render = document.querySelector('#render ul');
		const processValue =  $process.value;

		await axios.put(`http://localhost:3333/process/${processValue}`).then((value) => {
			const test = value.data[0];
			console.log(test);
			$render.innerHTML = `
				<li> Nome: ${ test.fullName } </li>
				<li> CEP: ${ test.CEP } </li>
				<li> Email: ${ test.email } </li>
				<li> Assunto: ${ test.subject } </li>
			`
		});		
	}

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

			ul {
				margin-top: 2px;

				li {
					padding: 3px;
				}
			}
		}
	`
 
	return (
		<>
			<Header />
			<Page>
				<Menu />
				<Main className="main">
					<Seach>
						<input type="text" id="process" autoFocus="true" />
						<Button
							w="135px"
							h="45px"
							fontSize="24px"
							onClick={ processSeach }
						>
							Buscar
						</Button>
					</Seach>
					<Result>
						<div id="render">
							<ul>

							</ul>
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