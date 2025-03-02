import { MenuItem } from "../models/menu-item.enum";
import { Menu } from "../models/menu.model";

export const menu: Menu[] = [
    {
        name: MenuItem.Activity,
        icon: 'sports_soccer'
    },
    {
        name: MenuItem.Nutrition,
        icon: 'restaurant'
    }
];