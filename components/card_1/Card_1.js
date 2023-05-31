import styles from "../../styles/card_1.module.css";
import { Middle_Container } from "./Middle_Container";
import { Top_Container } from "./Top_Container";

export const Card_1 = ({
	selected_pokemon_all_data,
	loading_pokemon}) => {
	return (

		<div className={styles.card_1} >
			<Top_Container/>
			<Middle_Container 
				selected_pokemon_all_data={selected_pokemon_all_data} 
				loading_pokemon={loading_pokemon}
			/>
		</div>

	);
};
