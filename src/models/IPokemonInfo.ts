import {IAbility} from "./IAbility";
import {IStat} from "./IStat";
import {IType} from "./IType";

export interface IPokemonInfo{
    id: number,
    name: string,
    abilities: IAbility[],
    stats: IStat[]
    types: IType[]
}