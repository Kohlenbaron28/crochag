import React from "react";



export default function Switers() {
    const [switers, setSwiters] = React.useState([{
        imageUrl: '',
        name: '',
        price: ''
    }]);

    React.useEffect(() => {
        fetch('/switers')
        .then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setSwiters(jsonRes))
    })

    return(
        <div>
           <p>Switers</p>
           {switers.map(switer => 
           <div key={switer._id}>
            <img src={switer.imageUrl} alt="acc" />
            <h1>{switer.name}</h1>
            <h3>{switer.price}</h3>
            </div>

            )}
          
        </div>
       
        
    )
}