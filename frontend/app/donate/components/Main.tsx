import PaymentCard from "./PaymentCard"

export default function Main() {
  return (
    <div className="min-h-[100vh] relative py-7">
        <div className="relative z-10 flex justify-end">
            <PaymentCard/>
        </div>
        <div className="absolute h-full w-full left-0 top-0 z-0">
            <img className="w-full h-full object-cover" src="images/donate-now/bg.png"></img>
        </div>
    </div>
  )
}
