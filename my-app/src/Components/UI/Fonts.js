import FontSizeChanger from "react-font-size-changer";

function Fonts(){
  return(
    <FontSizeChanger
            targets={["#target"]}
            onChange={(element, newValue, oldValue) => {
              console.log(element, newValue, oldValue);
            }}
            options={{
              stepSize: 1,
              range: 3,
            }}   
            customButtons={{
              up: <span  style={{'fontSize': '16px'}}>A+</span>,
              down: <span style={{'fontSize': '16px'}}>A-</span>,
             
            }} 
          />

  )
}

export default Fonts;