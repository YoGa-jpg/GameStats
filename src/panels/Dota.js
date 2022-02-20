import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderButton } from '@vkontakte/vkui';
import { Tabbar, TabbarItem} from '@vkontakte/vkui'
import { platform, IOS } from '@vkontakte/vkui';
import { Icon28ChevronBack, Icon24Back} from '@vkontakte/icons';
import { Icon28Profile } from '@vkontakte/icons';
import { Icon28Newsfeed } from '@vkontakte/icons';
import { Icon28CupOutline } from '@vkontakte/icons';

import '../styles/Menu.css';

const osName = platform();

const Dota = ({ id, go }) => (
	<Panel id={id}>
		<PanelHeader left={<PanelHeaderButton onClick={go} data-to="menu">
			{osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
		</PanelHeaderButton>}>DotA 2</PanelHeader>
		<Tabbar>
			<TabbarItem text="Новости">
				<Icon28Newsfeed />
			</TabbarItem>
			<TabbarItem
				text="Турниры"
			>
				<Icon28CupOutline />
			</TabbarItem>
			<TabbarItem
				text="Профиль"
			>
				<Icon28Profile/>
			</TabbarItem>
		</Tabbar>
	</Panel>
);

Dota.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Dota;