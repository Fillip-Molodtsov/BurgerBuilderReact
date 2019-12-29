import React from "react";
import {default as Burger} from "../../components/Burger/Burger";

export interface  BurgerBuilderState {
    bacon:number,
    cheese:number,
    meat:number,
    salad:number,
    tomato:number
}

class BurgerBuilder extends React.Component<any,BurgerBuilderState>{

    constructor(props:any) {
        super(props);
        this.state = {
            bacon:1,
            cheese:2,
            meat:2,
            salad:0,
            tomato:3
        }
    }

    render(): React.ReactElement{

        return (
            <React.Fragment>
                <Burger ingredients={this.state}/>
                <div>Burger's controls</div>
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;
