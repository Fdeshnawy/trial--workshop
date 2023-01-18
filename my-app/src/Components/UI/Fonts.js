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
          />

  )
}

export default Fonts;