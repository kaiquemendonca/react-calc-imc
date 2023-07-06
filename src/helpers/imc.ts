export type Level = {
    title: String;
    color: String;
    icon: 'up' | 'down';
    imc: number[];
    yourImc?: number;
}

export const levels: Level[] = [
    {title: 'Magreza', color: '#9ca3af', icon: 'down', imc:[0, 18.5]},
    {title: 'Normal', color: '#22c55e', icon: 'up', imc:[18.6, 24.9]},
    {title: 'Sobrepeso', color: '#eab308', icon: 'down', imc:[25, 30]},
    {title: 'Obesidade', color: '#ef4444', icon: 'down', imc:[30.1 ,99]}
 
];

export const calcularImc = (height: number, weight: number)=>{
    const imc = weight/(height*height);

    for(let i in levels){
        if(imc>= levels[i].imc[0] && imc < levels[i].imc[1]){
            let levelCopy: Level = {...levels[i]};
            levelCopy.yourImc= parseFloat(imc.toFixed(2));
            return levelCopy;
        }
    }

    return null;
}