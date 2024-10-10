import type { Dispatch, SetStateAction } from "react"

const tipOptions = [
 
    {
        id: 'tip-2',
        value: .02,
        label: '2%'
    },
    {
        id: 'tip-5',
        value: .05,
        label: '5%'
    },
    {
        id: 'tip-10',
        value: .1,
        label: '10%'
    },
]

type TiPercentageProps = {
    setTip: Dispatch<SetStateAction<number>>,
    tip: number
}


export default function TiPercentageForm({setTip, tip} : TiPercentageProps) {
    return (
        <div>
            <h3 className= "font-black text-2xl mb-6">Si lo deseas, puedes dejar tu propina:</h3>

            <form>
                {tipOptions.map(tipOption => (
                    <div key={tipOption.id} className="flex gap-2">
                        <label htmlFor={tipOption.id}>{tipOption.label}</label>
                        <input 
                            id={tipOption.id}
                            type="radio"
                            name="tip"
                            value={tipOption.value}
                            onChange={ e => setTip(+e.target.value)}
                            checked={tipOption.value === tip}
                        />
                    </div>
                ))}


            </form>
        </div>
    )
}
