import MenuItems from "./components/MenuItems"
import OrderContents from "./components/OrderContents"
import OrderTotal from "./components/OrderTotal"
import TiPercentageForm from "./components/TiPercentageForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder()

  return (
    <>
      <header className="bg-teal-700 py-10">

      </header>

      <main className="max-w-7xl mx-20 py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl  font-black">Menú</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map(item => (
              <MenuItems
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>

        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
              <OrderContents
                order={order}
                removeItem={removeItem}

              />
              <TiPercentageForm
                setTip={setTip}
                tip={tip}
              />

              <OrderTotal
                order={order}
                tip={tip}
                placeOrder={placeOrder}
              />

            </>
          ) : (
            <p className="text-center">Aun no has pedido nada</p>
          )}

        </div>


      </main>
      <footer className="bg-teal-700
      text-white
      text-center
      py-3"><h1>Calculadora de consumo by Juan Brenes</h1></footer>
    </>
  )
}

export default App
