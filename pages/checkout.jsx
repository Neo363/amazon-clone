import { useSession } from "next-auth/react";
import Image from "next/image";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";

function checkout() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const items = useSelector(selectItems);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const total = useSelector(selectTotal);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const session = useSession(); 

    return (
        <div className="bg-gray-100">
            <Header/>
            
            <main className="lg:flex max-w-screen-xl mx-auto">
                {/* Left Section */}
                <div className="flex-grow m-5 shadow-sm">
                    <Image 
                        src="https://links.papareact.com/ikj" 
                        alt="" 
                        width={1020} 
                        height={250} 
                        objectFit="contain"
                    />

                    <div className="flex flex-col p-5 space-y-10 bg-white">
                        <h1 className="text-3xl border-b pb-4">
                            {items.length === 0 ? 'Your Amazon basket is empty' : "Shopping Basket"}
                        </h1>

                        {items?.map(({ id, title, price, description, image, category, hasPrime}, i) => (
                            <CheckoutProduct 
                                key={i}
                                id={id}
                                title={title} 
                                price={price} 
                                description={description} 
                                image={image} 
                                category={category}  
                                hasPrime={hasPrime}
                            />
                        ))}
                    </div>
                </div>


                {/* Right Section */}
                <div className="flex flex-col bg-white p-10 shadow-md">
                    {items.length > 0 && (
                        <>
                            <h2 className="whitespace-nowrap">
                                Subtotal {items.length} items: 
                                <span className="font-bold">
                                    ${total}
                                </span>
                            </h2>

                            <button disabled={!session.data} className={`button mt-2 ${!session.data && 'form-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                                {!session.data ? 'Sign In to Checkout' : 'Proceed to checkout'}
                            </button>
                        </>
                    )}     
                </div>
            </main>
        </div>
    )
}

export default checkout
