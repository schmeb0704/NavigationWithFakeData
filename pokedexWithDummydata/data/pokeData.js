import { Pokemon } from "../models/pokemonConstructor";
import { Type } from "../models/types";

export const POKEDATA = [
  new Pokemon("bulbasaur", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", 1, "grass"),
  new Pokemon("ivysaur", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", 2 , "grass" ),
  new Pokemon("venusaur", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png", 3, "grass"),
  new Pokemon("charmander", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", 4, "fire"),
  new Pokemon("charmeleon", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png", 5, "fire"),
  new Pokemon("charizard", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png", 6, "fire"),
  new Pokemon("squirtle", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", 7, "water"),
  new Pokemon("wartortle", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png", 8, "water"),
  new Pokemon("blastoise", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png", 9, "water"),
  new Pokemon("caterpie", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png", 10, "bug"),
  new Pokemon("metapod", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png", 11, "bug"),
  new Pokemon("butterfree", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png", 12, "bug"),
  new Pokemon("weedle", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png", 13, "bug"),
  new Pokemon("kakuna", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png", 14, "bug"),
  new Pokemon("beedrill", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png", 15, "bug"),
  new Pokemon("pidgey", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png", 16, "flying"),
  new Pokemon("pidgeotto", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png", 17, "flying"), 
  new Pokemon("pidgeot", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png", 18, "flying"),
  new Pokemon("ratata", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png", 19, "normal"),
  new Pokemon("raticate", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png", 20, "normal"),

]

export const TYPES = [
  new Type("normal", "gray"),
  new Type("fire", "red"),
  new Type("water", "blue"),
  new Type("grass", "green"),
  new Type("bug", "brown"),
  new Type("flying", "silver"),

]