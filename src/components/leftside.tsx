"use client";
import { Level, calcularImc } from "@/helpers/imc";
import { useState } from "react";
import { levels } from "@/helpers/imc";
import { GridItem } from '@/components/GridItem'

export const Leftside = () => {

    const [calcHeight, setCalcHeight] = useState<number>(0);
    const [calcWeight, setCalcWeight] = useState<number>(0);
    const [toShow, setToShow] = useState<Level | null>(null);
    const handleCalculationButton = () => {
        if (calcHeight && calcWeight) {
            setToShow(calcularImc(calcHeight, calcWeight));
        } else {
            alert("preencha todos os campos");
        }

    }

    const handleBackButton = () =>{
        setToShow(null);
        setCalcHeight(0);
        setCalcWeight(0);
    }

    return (
        <div className="flex flex-row max-[1024px]:flex-col">
            <div className="flex flex-col flex-1 mr-20 max-[1024px]:mx-20">
                <h3 className="font-bold text-6xl mb-10">Calcule o seu IMC.</h3>
                <a className="text-2xl mb-16">IMC é a sigla para Índice de Massa Corpórea, parâmetro
                    adotado pela Organização Mundial de Saúde para
                    calcular o peso ideal de cada pessoa.
                </a>

                <input
                    type="number"
                    className="border-0 border-b-2 mb-10 outline-none disabled:opacity-50"
                    placeholder="Digite a sua altura. Ex: 1.5 (em metros)"
                    value={calcHeight > 0 ? calcHeight : ''}
                    onChange={e => setCalcHeight(parseFloat(e.target.value))}
                    disabled={toShow? true: false}
                />
                <input
                    value={calcWeight > 0 ? calcWeight : ''}
                    type="number"
                    className="border-b-2 mb-16 outline-none disabled:opacity-50"
                    placeholder="Digite o seu peso. Ex: 75.3 (em quilos)"
                    onChange={e => setCalcWeight(parseFloat(e.target.value))}
                    disabled={toShow? true: false}
                />
                <button disabled={toShow? true: false} onClick={handleCalculationButton} className="disabled:opacity-50 disabled:bg-cyan-600 text-white bg-cyan-700 hover:bg-cyan-600 rounded-xl h-14">
                    Calcular
                    
                </button>

            </div>

            <div className="flex flex-1 justify-center md:mt-9 max-[768px]:mt-9">

                {!toShow &&
                    <div className="grid grid-cols-2 gap-7  max-[768px]:grid-cols-1">
                        {levels.map((item, key) => (

                            <GridItem key={key} item={item} />

                        ))}
                    </div>
                }
                {toShow &&
                    <div className="flex flex-1">
                        <div onClick={handleBackButton} className="md:m-0 max-[768px]:m-0 max-[768px]:w-14 max-[768px]:h-14 w-20 h-20 -ml-10 mt-48 bg-blue-400 rounded-full absolute flex justify-center items-center cursor-pointer ">
                            <img className="max-[768px]:w-4 w-6" src="..\images\leftarrow.png"></img>
                        </div>
                        <GridItem item={toShow} />
                    </div>

                }
            </div>
        </div>
    );
}