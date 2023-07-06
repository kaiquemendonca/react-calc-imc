import { Level } from "@/helpers/imc";

type Props = {
    item: Level;
}

export const GridItem = ({ item }: Props) => {
    return (
        <div className="md:mx-0 flex-col w-full mr-9 rounded-xl  flex justify-center items-center" style={{ backgroundColor: item.color.toString() }}>
            <div className="  w-20 h-20 flex justify-center items-center rounded-full mb-2" style={{ backgroundColor: "rgba(0,0,0,.1)" }}>
                {item.icon === 'up' && <img className="w-10 md:w-2/4" src="..\images\up.png" alt="" />}
                {item.icon === 'down' && <img className="w-10 md:w-2/4" src="..\images\down.png" alt="" />}
            </div>
            <a className="text-white font-bold text-2xl">{item.title}</a>
            {item.yourImc &&
                <div className="text-white text-3xl m-2 mt-4">
                    Seu IMC é de {item.yourImc} kg/m²
                </div>
            }
            <a className="mt-4 text-white">IMC está entre {item.imc[0]} e {item.imc[1]}</a>
        </div>
    );
}