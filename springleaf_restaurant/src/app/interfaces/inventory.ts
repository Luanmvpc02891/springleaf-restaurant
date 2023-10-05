import { Ingredient } from "./ingredient";
import { Supplier } from "./supplier";

export interface Inventory {
    inventoryId: number;
    ingredient: Ingredient;
    supplier: Supplier;
}