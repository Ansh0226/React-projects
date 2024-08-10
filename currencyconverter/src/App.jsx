import { useState } from "react"
import useCurrency from './hooks/useCurrency'
import InputBox from './components/InputBox'

function App() {
  const [amount, setAmount] = useState(0);
  const [to, setTo] = useState("inr");
  const [from, setFrom] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrency(from);
  const options = Object.keys(currencyInfo)
  const BackgroundImage = `https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148910071.jpg?t=st=1723288690~exp=1723292290~hmac=dabc8542c30a43d91283b8c1fb9e39037a5db2010a855c088d2bd94539d091c9&w=900`;

  const swap = ()=>{
    let temp = from;
    setFrom(to)

    setTo(temp);
    temp = convertedAmount;
    setConvertedAmount(amount)
    
    setAmount(temp);
  }
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
}
  


  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                selectCurrency={from}
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  setFrom(currency);
                }}
                // currencyDisable
                onAmountChange={(amount)=>setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                selectCurrency={to}
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  setTo(currency);
                  
                }}
                amountDisable

              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                onClick={convert}
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
