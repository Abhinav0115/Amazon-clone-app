import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY!);

export const stripeCheckout = async (
    items: any,
    email: string,
    name: string
) => {
    const stripe = await stripePromise;

    const checkoutSession = await axios.post("/api/checkout-sessions", {
        items: items,
        email: email,
        name: name,
    });
    // console.log("checkoutSession ->", checkoutSession);

    //redirect to checkout session
    const result = await stripe?.redirectToCheckout({
        sessionId: checkoutSession.data.id,
    });

    if (result?.error) {
        console.error("stripe error -->", result.error.message);
    }
};
