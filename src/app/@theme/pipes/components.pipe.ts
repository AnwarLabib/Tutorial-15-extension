import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../../dashboard/items/item.model';

@Pipe({
  name: 'componentsfilter',
  pure: true
})
export class ComponentsPipe implements PipeTransform {

  transform(items:Item[], searchText: string): Item[] {
    
    var result = [];

    if(searchText === 'c1' || searchText === 'component1' ){
        return items.filter((item:Item)=>{

            return (item.sellerName.includes('Zeyad') || item.sellerName.includes('Badreldin')|| item.sellerName.includes('Fady')|| item.sellerName.includes('Doaa')|| item.sellerName.includes('Anwar'));
    
         });
    }
    
    else if(searchText === 'c2' || searchText === 'component2' ){
        return items.filter((item:Item)=>{            
               
            return (item.sellerName.includes('Mohamed') || item.sellerName.includes('Youssef')|| item.sellerName.includes('Mariz')|| item.sellerName.includes('Mostafa')|| item.sellerName.includes('Maggie'));
        
         });
    }
    else if(searchText === 'c3' || searchText === 'component3' ){
        return items.filter((item:Item)=>{            
               
            return (item.sellerName.includes('Ahmed Gamal') || item.sellerName.includes('Marwan Sami')|| item.sellerName.includes('Amr')|| item.sellerName.includes('Omar')|| item.sellerName.includes('Bishoy'));
        
         });
    }

    else if(searchText === 'c4' || searchText === 'component4' ){
        console.log('c4');
        return items.filter((item:Item)=>{            
             
            return (item.sellerName.includes('abdo') || item.sellerName.includes('Abdelrahman Tarek') || item.sellerName.includes('Peter')|| item.sellerName.includes('Ahmed Samir')|| item.sellerName.includes('Daniel')|| item.sellerName.includes('Marwan Mohamed'));
        
         });
    }

    else if(searchText === 'c5' || searchText === 'component5' ){
        return items.filter((item:Item)=>{            
               
            return (item.sellerName.includes('Shadi') || item.sellerName.includes('Abdelrahman Ayman')|| item.sellerName.includes('Aya')|| item.sellerName.includes('Abdelaziz'));
        
         });
    }
    else{
        return items;
    }

}
}
