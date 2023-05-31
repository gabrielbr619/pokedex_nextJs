import styles from "../../styles/card_1.module.css";
import { Loading } from "./Loading";

export const Middle_Container = ({selected_pokemon_all_data, loading_pokemon}) => {

	console.log(loading_pokemon);
	return( 
		<div className={styles.middle_main_container}>
			<div className={styles.middle_outer_container
			}>
				<div className={styles.middle_inner_container}>
					{loading_pokemon? 
						<Loading/>
						:
						<img src={selected_pokemon_all_data?.sprites?.other["official-artwork"].front_default} width={200}></img>}
					
				</div>
				<div className={styles.middle_small_circle}>

				</div>
			</div>
		</div>
	);
};