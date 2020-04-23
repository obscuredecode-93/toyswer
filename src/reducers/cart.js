import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/types';
import yellowCarImage from '../Images/car.jpeg';
import starWarsImage from '../Images/star-wars.jpeg';
import gameBoyImage from '../Images/game-boy.jpeg';
import giJoeImage from '../Images/gi-joe.jpg';
import blocksImage from '../Images/blocks.jpeg';
import woodenToysImage from '../Images/wooden-toys.jpeg';
import uuid from 'uuid/v1';

const initState = {
    items: [{
        id: 1,
        title: 'Yellow Toy Car',
        description:
          'Speed off with your gang with this fun vehicle!',
        imageUrl: yellowCarImage,
        price:5
      },
      {
        id: 2,
        title: 'Star Wars Robot',
        description:
          'Boys and girls can imagine racing into the galactic action to save the day!',
        imageUrl: starWarsImage,
        price:10
      },
      {
        id: 3,
        title: 'Game Boy',
        description:
          'The Classic Nintendo Gameboy!',
        imageUrl: gameBoyImage,
        price:25
      },
      {
        id: 4,
        title: 'GI Joe',
        description:
          'Articulated intelligence specialist action figure comes with a weapons and a display stand.',
        imageUrl: giJoeImage,
        price:37
      },
      {
        id: 5,
        title: 'Blocks',
        description:
          'Help kids develop strong motor skills and even resilience as they experiment with building, knocking blocks over, and building again.',
        imageUrl: blocksImage,
        price:15
      },
      {
        id: 6,
        title: 'Wooden Animal Toys',
        description:
          'The beautiful toy set can be used in many different ways to give your little one endless hours of fun and games!',
        imageUrl: woodenToysImage,
        price:40
      }
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer