import { Circle } from "./Circle"
import { Square } from "./Square"


export const Geo = () => {
    return (
        <div className="">
            <h3 className="font-bold text-2xl">Formas geométricas</h3>
            <div className="flex p-4">
                
                <Circle />
                <Square />
            </div>

        </div>
    )
}