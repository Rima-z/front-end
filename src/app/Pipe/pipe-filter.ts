import { Pipe, PipeTransform } from "@angular/core";
import { sugrec } from "../models/sugrec.model";

@Pipe({name:'SuggRecFilter'})
export class SuggRecPipe2 implements PipeTransform {


    transform(value: sugrec[],filter:string):sugrec[] {
        if (!filter || filter.length===0){
            return value;
        }

        if(value.length===0){
            return value
        }

        return value.filter((value:sugrec)=>{
            const nature= value.nature!.toLowerCase().indexOf(filter.toLowerCase())!==-1;
                return nature 
        });
    }


}