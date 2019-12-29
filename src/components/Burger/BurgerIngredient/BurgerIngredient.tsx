import React from "react";
import classes from './BurgerIngredient.module.scss'

export type EBurgerIngredient =
    | "bacon"
    | "cheese"
    | "meat"
    | "salad"
    | "tomato"

export interface BurgerIngredientProps {
    type: EBurgerIngredient,
    quantity: number
}

const BurgerIngredient: React.FC<BurgerIngredientProps> = (props) => {

    return props.quantity > 0 ? (
        <div className={classes.CardIngredient}>
            <img
                className={classes.ImageWrapper}
                src={require(`../../../assets/${props.type}.svg`)}
                alt="ingredient"
            />
            <div className={classes.CardInfo}/>
            <p>x{props.quantity}</p>
        </div>
    ) : null;
};

export default BurgerIngredient;
