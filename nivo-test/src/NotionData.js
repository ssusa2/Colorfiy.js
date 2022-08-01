/** @format */
import React from 'react';
import { useEffect } from 'react';
const { Client } = require('@notionhq/client');

const NotionData = ({ name }) => {
	const NOTION_KEY = 'secret_Z1HEcNGU0wQeYyLyhKi8Uqc9b4EQUrSm0n4n7a2EDc';
	// const NOTION_DATABASE_ID = 'b190e795d50746ed8d1c91f306ca069c';

	const notion = new Client({ auth: NOTION_KEY });

	// useEffect(() => {
	// 	fetch(
	// 		'https://api.notion.com/v1/databases/b190e795d50746ed8d1c91f306ca069c',
	// 		{
	// 			headers: {
	// 				Notion-Version: 2022-06-28',
	// 			},
	// 		}
	// 	)
	// 		.then((res) => res.json())
	// 		.then(console.log(res));
	// });

	// (async () => {
	// 	const databaseId = 'b190e795d50746ed8d1c91f306ca069c';
	// 	const response = await notion.databases.retrieve({
	// 		database_id: databaseId,
	// 	});
	// 	console.log(response);
	// })();
	// useEffect(() => {
	// 	fetch('');
	// }, []);
	// (async () => {
	//   const databaseId = 'b190e795d50746ed8d1c91f306ca069c';
	//   const response = await notion.databases.retrieve({
	//     database_id: databaseId,
	//   });
	//   console.log(response);
	// })();
	return <div>This is Notion, {name}</div>;
};

NotionData.defaultProps = {
	name: '이름없음',
};

export default NotionData;
