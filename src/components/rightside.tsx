import { levels } from "@/helpers/imc";
import { GridItem } from '@/components/GridItem'
import {Leftside} from '@/components/leftside'

export const Rightside = () => {
    return (

        <div className="flex flex-1 justify-center">

            
            <div className="grid grid-cols-2 gap-3">
                {levels.map((item, key) => (
                    
                    <GridItem key={key} item={item} />
                    
                ))}
            </div>
            
        </div>
    );
}


/*   
            
                
                
                
                    
                
                
                

      
            
*/