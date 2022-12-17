import React from "react";
import Card from "./card";
import Contacts from "../contacts";


function createCard(contact) {
  return (<Card  
                id={contact.id}
                key={contact.id}
                name={contact.name}
                img={contact.imgURL}
                phone={contact.phone}
                email={contact.email} />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>    

      {Contacts.map(createCard)}
      
    </div>
  );
}

export default App;
