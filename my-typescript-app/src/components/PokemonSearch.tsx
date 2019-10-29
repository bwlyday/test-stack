import React, { Component } from "react";
import { render } from "react-dom";

export class PokemonSearch extends Component<{ name: string, numberOfPokemon: number }> {
    render() {
        const {name, numberOfPokemon} = this.props;
        return (
            <div>
                <p>User {name} has {numberOfPokemon} pokemon</p>
            </div>
        )
    }
}

export default PokemonSearch