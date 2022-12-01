import React from "react";



export default function Cardigans() {
    const [cardigans, setCardigans] = React.useState([{
        imageUrl: '',
        name: '',
        price: ''
    }]);

    React.useEffect(() => {
        fetch('/cardigans')
        .then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setCardigans(jsonRes))
    })

    return(
        <div>
           <p>Cardigans</p>
           {cardigans.map(cardigan => 
           <div key={cardigan._id}>
            <img src={cardigan.imageUrl} alt="acc" />
            <h1>{cardigan.name}</h1>
            <h3>{cardigan.price}</h3>
            </div>

            )}
          
        </div>
       
        
    )
}