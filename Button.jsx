
const Button = ({fetchVal}) => {
  const buttonNames = [
    "AC",
    "+/-",
    "%",
    "+",
    "7" ,
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
    "AC"
  ];
  return (
    <>
      <div className="button-container">
        {buttonNames.map((buttonName,index) => (
          <button  onClick={()=>fetchVal(buttonName)}  key={index}>{buttonName}</button>
        ))}
      </div>
    </>
  );
};
export default Button;

{

}
