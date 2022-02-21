import React from 'react';
import PropTypes from 'prop-types';

import { View, Panel, PanelHeader, PanelHeaderButton, PanelHeaderBack } from '@vkontakte/vkui';
import { Group, Cell, Placeholder, Badge, CardGrid, Card, ContentCard } from '@vkontakte/vkui';
import { Tabbar, TabbarItem, Epic } from '@vkontakte/vkui'
import { SplitLayout, SplitCol } from '@vkontakte/vkui'
import { platform, IOS, VKCOM, ANDROID } from '@vkontakte/vkui';
import { Icon28ChevronBack, Icon24Back } from '@vkontakte/icons';
import { Icon28Profile } from '@vkontakte/icons';
import { Icon28Newsfeed } from '@vkontakte/icons';
import { Icon28CupOutline } from '@vkontakte/icons';

import '../styles/Menu.css';

const Dota = ({ id, go }) => {
	const osName = platform();
	const [activeStory, setActiveStory] = React.useState("news");
	const onStoryChange = (e) => setActiveStory(e.currentTarget.dataset.story);
	const isDesktop = (osName != IOS && osName != ANDROID)
	const hasHeader = platform !== VKCOM;

	return (
		<SplitLayout
			header={hasHeader && <PanelHeader separator={false} />}
			style={{ justifyContent: "center" }}
		>
			<SplitCol
				animate={!isDesktop}
				spaced={isDesktop}
				width={isDesktop ? "560px" : "100%"}
				maxWidth={isDesktop ? "560px" : "100%"}
			>
				<Epic
					activeStory={activeStory}
					tabbar={
						!isDesktop && (
							<Tabbar>
								<TabbarItem
									onClick={onStoryChange}
									selected={activeStory === "news"}
									data-story="news"
									text="Новости"
								>
									<Icon28Newsfeed />
								</TabbarItem>
								<TabbarItem
									onClick={onStoryChange}
									selected={activeStory === "tournaments"}
									data-story="tournaments"
									text="Турниры"
								>
									<Icon28CupOutline />
								</TabbarItem>
								<TabbarItem
									onClick={onStoryChange}
									selected={activeStory === "profile"}
									data-story="profile"
									text="Профиль"
								>
									<Icon28Profile />
								</TabbarItem>
							</Tabbar>
						)
					}
				>
					<View id="news" activePanel="news">
						<Panel id="news">
							<PanelHeader left={<PanelHeaderBack />}>Новости</PanelHeader>
							<Group style={{ height: "1000px" }}>
								<CardGrid size="l">
									<ContentCard
										subtitle="Турниры"
										header="Gambit Esports выиграла первый матч на Winline D2CL Season 8"
										caption="18 мин. назад"
									/>
								</CardGrid>
							</Group>
						</Panel>
					</View>
					<View id="tournaments" activePanel="tournaments">
						<Panel id="tournaments">
							<PanelHeader left={<PanelHeaderBack />}>Турниры</PanelHeader>
							<Group style={{ height: "1000px" }}>
								<Placeholder
									icon={<Icon28CupOutline width={56} height={56} />}
								></Placeholder>
							</Group>
						</Panel>
					</View>
					<View id="profile" activePanel="profile">
						<Panel id="profile">
							<PanelHeader left={<PanelHeaderBack />}>Профиль</PanelHeader>
							<Group style={{ height: "1000px" }}>
								<Placeholder
									icon={<Icon28Profile width={56} height={56} />}
								></Placeholder>
							</Group>
						</Panel>
					</View>
				</Epic>
			</SplitCol>
		</SplitLayout>
		// <Panel id={id}>
		// 	<PanelHeader left={<PanelHeaderButton onClick={go} data-to="menu">
		// 		{osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
		// 	</PanelHeaderButton>}>DotA 2</PanelHeader>
		// 	<Tabbar>
		// 		<TabbarItem text="Новости">
		// 			<Icon28Newsfeed />
		// 		</TabbarItem>
		// 		<TabbarItem
		// 			text="Турниры"
		// 		>
		// 			<Icon28CupOutline />
		// 		</TabbarItem>
		// 		<TabbarItem
		// 			text="Профиль"
		// 		>
		// 			<Icon28Profile/>
		// 		</TabbarItem>
		// 	</Tabbar>
		// </Panel>
	)
};

Dota.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Dota;