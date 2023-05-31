import { useState } from "react";
import { Card_1 } from "../components/card_1/Card_1";
import { Card_2 } from "../components/card_2/Card_2";
import styles from "../styles/Home.module.css";
useState;

export async function getStaticProps() {
	const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");

	const data = await response.json();

	const pokemon_names_without_hyphen = data.results.map(pokemon => {
		return {name:pokemon.name.replaceAll("-"," "),url:pokemon.url};
	});

	return {
		props: {pokemon_names:pokemon_names_without_hyphen},
	};
}

export default function Home({pokemon_names}) {

	const [selected_pokemon_all_data, set_selected_pokemon_all_data] = useState({});
	const [loading_pokemon, set_loading_pokemon] = useState(false);

	return (
		<div className={styles.main_container}>
			<Card_1 
				selected_pokemon_all_data={selected_pokemon_all_data}
				loading_pokemon={loading_pokemon}
			/>
			<Card_2 
				pokemon_names={pokemon_names} 
				set_selected_pokemon_all_data={set_selected_pokemon_all_data} 
				set_loading_pokemon={set_loading_pokemon}
				loading_pokemon={loading_pokemon}
			/>
		</div>
	);
}
