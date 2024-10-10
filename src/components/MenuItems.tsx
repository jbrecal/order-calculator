import { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    addItem: (item : MenuItem) => void
}

export default function MenuItems({item, addItem} : MenuItemProps) {
  return (
    <button className="border-2 rounded-full border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
    onClick={() => addItem(item)}
    >
        <p>{item.name}</p>
        <p className="font-black">{item.price}€</p>

    </button>
  )
}
