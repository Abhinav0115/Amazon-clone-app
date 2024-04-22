import { NextRequest, NextResponse } from "next/server";

const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();
    const { items, email, name } = body;

    //Stripe payment gateway
    const organizedItems = items.map((item: any) => ({
        price_data: {
            currency: "inr",
            product_data: {
                name: item.title,
                images: [item.image],
            },
            unit_amount: item.price * 100,
        },

        quantity: item.quantity || 1,
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_address_collection: {
            allowed_countries: ["GB", "US", "CA", "AU"],
        },
        line_items: organizedItems,
        currency: "inr",
        mode: "payment",
        success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/cart`,
        metadata: {
            image: JSON.stringify(items.map((item: any) => item.image)),
            email,
            name,
        },
        customer_email: email,
        client_reference_id: email,
        billing_address_collection: "auto",
        allow_promotion_codes: true,
    });

    return NextResponse.json({
        message: "Checkout session created",
        id: session.id,
        // email,
        // items,
    });
}
