import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useMember from "../../../Hooks/useMember";
import { AuthContex } from "../../../Provider/AuthProvider";
import swal from "sweetalert";


const CheckOutFrom = () => {
    const[error,setError] = useState('')
    const[clientSecret,setClinetSecret] =useState('')
    const [transectionId, setTransactionId] = useState('')
    const stripe =useStripe()
    const elements = useElements()
    const axiosSecure =useAxiosSecure()
    const[memberShip] = useMember()
    const{user} = useContext(AuthContex)

    const totalPrice = memberShip?.reduce((total, item) => total + parseFloat(item.price), 0)

    useEffect(()=>{
        if(totalPrice>0){
            axiosSecure.post('/create-payment-intent',{price:totalPrice})
            .then(res=>{
                console.log(res.data.clientSecret);
                setClinetSecret(res.data.clientSecret)
            }) 
        }
       
    },[axiosSecure,totalPrice,])

    const handleSubmit=async(event)=>{
        event.preventDefault();

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement)

        if(card === null){
            return
        }
        const{error,paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log('payment error',error);
            setError(error.message)
        }
        else{
            console.log('payment method',paymentMethod);
            setError('')
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anymous',
                    name: user?.displayName || 'anymous'
                }

            }
        })
        if (confirmError) {
            console.log('confirm error', confirmError);
        }
        else{
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded'){
                console.log('transection id', paymentIntent.id);
                setTransactionId(paymentIntent.id)
                // now save the payment into database
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transectionId: paymentIntent.id,
                    date: new Date(),
                    cartIds: memberShip.map(item => item._id),
                    status: 'pending'
                }
                const res = await axiosSecure.post('/payments', payment)
                console.log('payment saved', res.data);
                if (res.data?.insertedId){
                    swal("Good job!", "You payment is successfully store to database", "success");
                }
            }
        }

    }

    return (
        <form className=" mt-20" onSubmit={handleSubmit}>
            <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className=" btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className=" text-red-500">{error}</p>
      {transectionId &&<p className=" text-2xl text-green-500"> Your transection is successFull and transection Id is {transectionId}</p>}
        </form>
    );
};

export default CheckOutFrom;