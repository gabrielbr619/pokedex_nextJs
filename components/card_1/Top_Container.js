import styles from '../../styles/card_1.module.css'

export const Top_Container = () => {
    return( 
         <div className={styles.top_container}>
             <div className={styles.top_corner_big_outer_circle}>
                 <div className={styles.top_corner_big_inner_circle}/>         
             </div>
             <div className={styles.top_corner_small_circles_container}>
                 <Small_Circle color={"#B90202"}/>
                 <Small_Circle color={"#FDCB65"}/>
                 <Small_Circle color={"#32CB64"}/>
             </div>
         </div>
     )
 }
 
const Small_Circle = ({color}) => {
    return(
        <div style={{background: color}} className={styles.top_corner_small_circles}/>
    )
}