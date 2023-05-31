import { useEffect, useState } from "react";
import styles from "../../styles/card_2.module.css";

export default function Dropdown({ pokemon_names, set_input_selected_pokemon, loading_pokemon }) {
	const [search_input, set_search_input] = useState("");
	const [pokemon_names_filtered, set_pokemon_names_filtered] = useState([]);
	const [open_dropdown, set_open_dropdown] = useState(false);

	useEffect(() => {
		const pokemon_names_filtered = pokemon_names?.filter(pokemon => pokemon.name?.includes(search_input));

		set_pokemon_names_filtered(pokemon_names_filtered);
	}, [search_input]);

	const select_pokemon = (pokemon) =>{
		set_search_input(pokemon.name);
		set_open_dropdown(false);
		set_input_selected_pokemon(pokemon);
		console.log(pokemon);

	};

	return (
		<div>
			<input disabled={loading_pokemon} className={styles.search_input} value={search_input} onChange={e => set_search_input(e.target.value)} onClick={(e) => set_open_dropdown(true)} />

			{open_dropdown === true 
				?(<div>
					<div className={styles.dropdown_container}>
						{pokemon_names_filtered.map((pokemon_names,index) => <li key={index} onClick={(e) => select_pokemon(pokemon_names)}>{pokemon_names.name}</li>)}
					</div>
					<div className={styles.close_dropdown} onClick={(e) => { set_open_dropdown(false); set_search_input("");}} />
				</div>)

				: (<div></div>)}
			<div />
		</div>
	);
}

