import React from "react";



export default function Accessories() {
    const [accessories, setAccessories] = React.useState([{
        imageUrl: '',
        name: '',
        price: ''
    }]);

    React.useEffect(() => {
        fetch('/accessories')
        .then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setAccessories(jsonRes))
    })

    return(
        <div>
           <p>Accessories</p>
           {accessories.map(accessori => 
           <div key={accessori._id}>
            <img src={accessori.imageUrl} alt="acc" />
            <h1>{accessori.name}</h1>
            <h3>{accessori.price}</h3>
            </div>

            )}
          
        </div>
       
        
    )
}