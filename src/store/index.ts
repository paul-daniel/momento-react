import { proxy } from "valtio";
import { CardInterface } from "../components/Board/Board";

interface AppState {
    score : number;
    correctCards : CardInterface[];
    selectedCards : CardInterface[];
    newGame : boolean;
}

const state = proxy<AppState>({
    score : 0,
    correctCards : [],
    selectedCards : [],
    newGame : true
})

export default state;