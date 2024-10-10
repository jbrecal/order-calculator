import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotal({ order, tip, placeOrder }: OrderTotalsProps) {


    const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order])
    const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tip, order])

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Total:</h2>
                <p>Subtotal a pagar: {''}
                    <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
                </p>

                <p>Propina: {''}
                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>

                <p>Total: {''}
                    <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>

            </div>

            <button className="w-full bg-emerald-700 p-3 uppercase
             text-white rounded-full hover:bg-teal-600
             font-bold mt-10 disabled:opacity-10"
             disabled={totalAmount === 0}
             onClick={placeOrder}
             >
                Guardar pedido
            </button>
        </>
    )
}
