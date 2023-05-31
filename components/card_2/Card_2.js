import { useState, useEffect } from "react";
import styles from "../../styles/card_2.module.css";
import Dropdown from "./Dropdown";




export const Card_2 = ({ 
	pokemon_names, 
	set_selected_pokemon_all_data, 
	set_loading_pokemon,
	loading_pokemon }) => {

	const [input_selected_pokemon, set_input_selected_pokemon] = useState("");
	
	const [selected_pokemon, set_selected_pokemon] = useState(false);

	const pokemon_type_colors= {
		normal:"A8A77A",
		Fire: "EE8130",
		water: "6390F0",
		electric: "F7D02C",
		grass: "7AC74C",
		ice : "96D9D6",
		fighting : "C22E28",
		poison : "A33EA1",
		ground : "E2BF65",
		flying : "A98FF3",
		psychic : "F95587",
		bug : "A6B91A",
		rock : "B6A136",
		ghost : "735797",
		dragon : "6F35FC",
		dark : "705746",
		steel : "B7B7CE",
		fairy : "D685AD",
	};

	const fix_pokemon_data = ({pokemon_description,pokemon_data}) => {
		const pokemon_description_english = pokemon_description?.flavor_text_entries.filter(
			flavor_text => flavor_text.language.name === "en"
		);

		pokemon_data.converted_weight = (pokemon_data?.weight/10).toFixed(1);
		pokemon_data.converted_height = (pokemon_data?.height/10).toFixed(1);

		return {
			description:pokemon_description_english[0].flavor_text,
			...pokemon_data
		};
	};

	useEffect(() => {
		const fetch_selected_pokemon = async() => {
			if(input_selected_pokemon=== "") return;
			set_loading_pokemon(true);
			
			await setTimeout(async() => {

				const response_pokemon_data = await fetch(input_selected_pokemon.url);
				const pokemon_data = await response_pokemon_data.json();

				const response_pokemon_description = await fetch(pokemon_data.species.url);
				const pokemon_description = await response_pokemon_description.json();


				set_selected_pokemon_all_data(fix_pokemon_data({pokemon_description,pokemon_data}));
				set_selected_pokemon(fix_pokemon_data({pokemon_description,pokemon_data}));
				console.log(loading_pokemon);
				set_loading_pokemon(false);
			}, 500);

			

			
		};
		fetch_selected_pokemon();
		
		console.log(selected_pokemon);
	}, [input_selected_pokemon]);
	


	return (

		<div className={styles.card_2}>
			<Dropdown 
				pokemon_names={pokemon_names} 
				set_input_selected_pokemon={set_input_selected_pokemon}
				loading_pokemon={loading_pokemon}
			/>

			{/* className={[styles.pokemon_type, styles.type1].join("")} */}

			<div className={styles.pokemon_description}>{loading_pokemon ? "" : selected_pokemon.description}</div>
			<div data-type='teste' className={styles.container_pokemon_type}>
				{selected_pokemon?.types?.map((pokemon_type,index) => {
					console.log([
						styles.pokemon_type, 
						styles.pokemon_type[index]]);
					return(
						<div 
							key={index} 
							datatype={index} 
							className={styles.pokemon_type + " " + styles.pokemon_type + index} 
							style={{background:`#${pokemon_type_colors[pokemon_type.type.name]}`}}
						>
							{pokemon_type.type.name}
						</div>
					);
				})}
				
		
			</div>
			<div className={styles.pokemon_characteristics}>
				<div>
					<h1>Altura</h1>
					{selected_pokemon?
						(<p>{selected_pokemon.converted_height}m</p>)
						:
						(<p>‎</p>)}
					
				</div>
				<div>
					<h1>Peso</h1>
					{selected_pokemon?
						(<p>{selected_pokemon.converted_weight}kg</p>)
						:
						(<p>‎</p>)}
				</div>
			</div>
		</div>

	);

};
