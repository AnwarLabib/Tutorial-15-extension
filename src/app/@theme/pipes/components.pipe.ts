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

            return (item.sellerName.includes('zeyad') || item.sellerName.includes('badreldin')|| item.sellerName.includes('fady')|| item.sellerName.includes('doaa')|| item.sellerName.includes('anwar'));
    
         });
    }
    
    else if(searchText === 'c2' || searchText === 'component2' ){
        return items.filter((item:Item)=>{            
               
            return (item.sellerName.includes('mohamed') || item.sellerName.includes('youssef')|| item.sellerName.includes('mariz')|| item.sellerName.includes('mostafa')|| item.sellerName.includes('maggie'));
        
         });
    }
    else if(searchText === 'c3' || searchText === 'component3' ){
        return items.filter((item:Item)=>{            
               
            return (item.sellerName.includes('ahmed gamal') || item.sellerName.includes('marwan sami')|| item.sellerName.includes('amr')|| item.sellerName.includes('omar')|| item.sellerName.includes('bishoy'));
        
         });
    }

    else if(searchText === 'c4' || searchText === 'component4' ){
        console.log('c4');
        return items.filter((item:Item)=>{            
             
            return (item.sellerName.includes('abdo') || item.sellerName.includes('abdelrahman tarek') || item.sellerName.includes('peter')|| item.sellerName.includes('ahmed samir')|| item.sellerName.includes('daniel')|| item.sellerName.includes('marwan Mohamed'));
        
         });
    }

    else if(searchText === 'c5' || searchText === 'component5' ){
        return items.filter((item:Item)=>{            
               
            return (item.sellerName.includes('shadi') || item.sellerName.includes('abdelrahman ayman')|| item.sellerName.includes('aya')|| item.sellerName.includes('abdelaziz'));
        
         });
    }
    else{
        return items;
    }

}
}
