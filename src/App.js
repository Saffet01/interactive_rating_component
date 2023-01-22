import './App.css';
import star from "./images/icon-star.svg"
import thankimg from "./images/illustration-thank-you.svg"


function App() {

  // const Button ({number}) => {
  //   return <button>{number}</button>
  // }

  return (
    <div className="App">
      <div className="wrapper">

        <img className='bg-gray-700 rounded-full p-2' src={star} alt="" />

        <h2 className='text-gray-100 text-3xl my-6'>How did we do?</h2>

        <p className='text-gray-400 mb-10'>Please let us know how we did with your support request. All feedback is appreciated
          to help us improve our offering!</p>

        <ul className='grid grid-cols-5 gap-3 mb-10'>
          <li><button className='btn-number bg-gray-700 h-10 w-10 rounded-full pt-1 text-gray-200 focus:bg-gray-400 transition-all duration-150'>1</button></li>
          <li><button className='btn-number bg-gray-700 h-10 w-10 rounded-full pt-1 text-gray-200 focus:bg-gray-400 transition-all duration-150'>2</button></li>
          <li><button className='btn-number bg-gray-700 h-10 w-10 rounded-full pt-1 text-gray-200 focus:bg-gray-400 transition-all duration-150'>3</button></li>
          <li><button className='btn-number bg-gray-700 h-10 w-10 rounded-full pt-1 text-gray-200 focus:bg-gray-400 transition-all duration-150'>4</button></li>
          <li><button className='btn-number bg-gray-700 h-10 w-10 rounded-full pt-1 text-gray-200 focus:bg-gray-400 transition-all duration-150'>5</button></li>
        </ul>

        <div className='text-center'>
          <button className='btn-rating rounded-full w-full text-white uppercase tracking-wide pt-3 pb-2'>Submit</button>
        </div>

        <ThankYou />

      </div>
    </div>
  );
}

const ThankYou = () => {
  return (
    <div className="wrapper">
      <img src={thankimg} alt="" />

      <p>You selected number out of 5</p>
      
      <h2 className='text-gray-100 text-3xl my-6 text-center'>Thank You</h2>
      
      <p className='text-gray-400 mb-10 text-center'>We appreciate you taking the time to give a rating. If you ever need more support,
        don’t hesitate to get in touch!</p>
    
    </div>
  )
}

export default App;
