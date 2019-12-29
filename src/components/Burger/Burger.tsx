import React from "react";
import classes from './Burger.module.scss'
import {ReactComponent as BurgerImage} from '../../assets/cheese-burger.svg'
import {default as BurgerIngredient, EBurgerIngredient} from "./BurgerIngredient/BurgerIngredient";
import {BurgerBuilderState} from "../../containers/BurgerBuilder/BurgerBuilder";

export interface BurgerProps {
    ingredients: BurgerBuilderState
}

const Burger: React.FC<BurgerProps> = (props) => {

    const prepareBurger = () => {
        return Object.keys(props.ingredients).map( key =>{
            const keyAs = key as EBurgerIngredient;
            return <BurgerIngredient
                key={key}
                type={keyAs}
                quantity={props.ingredients[keyAs]}
                />
        })
    };

    return (
        <div className={classes.burgerContainer}>
            <BurgerImage className={classes.burgerImage}/>
            <div className={classes.itemsContainer}>
                {prepareBurger()}
            </div>
        </div>
    );
};

export default Burger;
