import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderButton } from '@vkontakte/vkui';
import { platform, IOS } from '@vkontakte/vkui';
import { Icon28ChevronBack, Icon24Back } from '@vkontakte/icons';

import '../styles/Menu.css';

const osName = platform();

const Csgo = ({ id, go}) => (
	<Panel id={id}>
		<PanelHeader left={<PanelHeaderButton onClick={go} data-to="menu">
            {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
        </PanelHeaderButton>}>Counter-Strike: Global Offensive</PanelHeader>
	</Panel>
);

Csgo.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Csgo;