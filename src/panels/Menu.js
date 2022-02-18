import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Text, Group, Div, Cell, Header, CardScroll, Card, List } from '@vkontakte/vkui';
import { Icon24DataSaverCircleFillGreen } from '@vkontakte/icons';

import dota from '../img/dota.png';
import poe from '../img/poe.png'
import cs from '../img/cs.png';

import dota_icon from '../img/dota-icon.jpg';
import cs_icon from '../img/cs-icon.jpeg'

import '../styles/Menu.css';

const Menu = ({ id, go}) => (
	<Panel id={id}>
		<PanelHeader>Разделы</PanelHeader>
		<Group
			header={
				<Header>Выберите игру</Header>
			}
		>
			<CardScroll size="m">
				<Card className="clickable" mode="secondary" onClick={go} data-to='dota'>
					<div>
						<img src={dota} className="Persik" alt="..."></img>
					</div>
				</Card>
				<Card className="clickable" mode="secondary" onClick={go} data-to='csgo'>
					<div>
						<img src={cs} className="Persik" alt="..."></img>
					</div>
				</Card>
				<Card mode="secondary">
					<div>
						<img src={poe} className="Persik" alt="..."></img>
					</div>
				</Card>
			</CardScroll>
		</Group>
		<Group
			header={<Header>Недавние новости</Header>}>
			<List>
				<Cell expandable before={<img src={dota_icon} className="icon"></img>}>
					Team Spirit и Virtus.pro выступят на LAN‑турнире по Dota 2 в Дубае
				</Cell>
				<Cell expandable before={<img src={cs_icon} className="icon"></img>}>
					Авторы Persona и Shin Megami Tensei запустили загадочный тизер‑сайт
				</Cell>
				<Cell expandable before={<img src={dota_icon} className="icon"></img>}>
					Smile: «Поезд NAVI ушел пять‑шесть лет назад»
				</Cell>
				<Cell expandable before={<img src={cs_icon} className="icon"></img>}>
					Nix: «Мне Dota 2 никогда не нравилась как игра. Мне просто нравилась соревновательная сцена»
				</Cell>
				<Cell expandable before={<img src={dota_icon} className="icon"></img>}>
					СМИ назвали возможного нового офлейнера Natus Vincere
				</Cell>
				<Cell expandable before={<img src={cs_icon} className="icon"></img>}>
					Аналитики: у MOUZ мало шансов победить Team Vitality на IEM Katowice 2022
				</Cell>
			</List>
		</Group>
		<Group
			header={<Header>Онлайн</Header>}>
			<Cell expandable before={<img src={cs_icon} className="icon"></img>} after={
				<Cell after={<Icon24DataSaverCircleFillGreen />}>
					153152 человек
				</Cell>}>
				Counter-Strike: Global Offensive
			</Cell>
			<Cell expandable before={<img src={dota_icon} className="icon"></img>} after={
				<Cell after={<Icon24DataSaverCircleFillGreen />}>
					513521 человек
				</Cell>}>
				DOTA 2
			</Cell>
			<Cell expandable before={<img src={poe} className="icon"></img>} after={
				<Cell after={<Icon24DataSaverCircleFillGreen />}>
					74224 человек
				</Cell>}>
				Path of Exile
			</Cell>
		</Group>
	</Panel>
);

Menu.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Menu;
