import {Component} from "react";

export class Gallery extends Component
{

    // componentDidMount(){
    //     console.log("componentDidMount")
    // }
    // componentDidUpdate(){
    //     console.log("componentDidUpdate")
    // }
    // componentWillUnmount(){
    //     console.log("componentWillUnmount")
    // }
  
    
    state ={

    //     product:[
    //         {id:1 , name:"oppo rendo 2pro" , count:9 , price:9000 , onSale:false},
    //         {id:2 , name:"realme" , count:3 , price:4500 , onSale:true},
    //         {id:3 , name:"Nokia" , count:5 , price:3000 , onSale:false},
    //         {id:4 , name:"oppo A5" , count:1 , price:6000 , onSale:true},
    //         {id:5 , name:"oppo rendo 6" , count:7 , price:8200 , onSale:true},
    //         {id:6 , name:"oppo rendo 6" , count:7 , price:1200 , onSale:false},
    //         {id:7 , name:"oppo rendo 6" , count:7 , price:8200 , onSale:false},
    //         {id:8 , name:"oppo rendo 6" , count:7 , price:8200 , onSale:true},
    //         {id:9 , name:"oppo rendo 6" , count:7 , price:4200 , onSale:false},
    //         {id:10 , name:"oppo rendo 6" , count:7 , price:8200 , onSale:true}
    // ]
    };
    // deleteProduct=(productId)=>{
        
    //    let myProduct=[...this.state.product];
    //    myProduct=myProduct.filter((product)=>product.id !== productId)
    //    this.setState({product:myProduct})
    // }

    // update=(productIndex)=>{
    //     console.log("google")
    //     let myProduct=[...this.state.product];
    //     myProduct[productIndex].count++;
    //     this.setState({product:myProduct})

    // }
    // updelete=(productIndex)=>{
    //     console.log("google")
    //     let myProduct=[...this.state.product];
    //     myProduct[productIndex].count--;
    //     this.setState({product:myProduct})

    // }
    
    render()
    {
        return <>
        <div className="container  bg-dark py-2 m-auto">
        <h2>holle Gellery</h2>
        <h2>holle Gellery</h2>
        <h2>holle Gellery</h2>
        <h2>holle Gellery</h2>
        <h2>holle Gellery</h2>
        <h2>holle Gellery</h2>
        <h2>holle Gellery</h2>
       </div>
     
    

        </>
    }
}