import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Menu from './panels/Menu';

const ROUTES = {
	HOME: 'home',
	MENU: 'menu'
}

const App = () => {
	// const [activePanel, setActivePanel] = useState('home');
	// const [fetchedUser, setUser] = useState(null);
	// const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [activePanel, setActivePanel] = useState(ROUTES.MENU);
 	const [fetchedUser, setUser] = useState(null);
 	const [popout, setPopout] = useState(null);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(<Menu></Menu>);
	};

	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel} popout={popout}>
					<Home id={ROUTES.HOME} fetchedUser={fetchedUser} go={go} />
					<Menu id={ROUTES.MENU}/>
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
