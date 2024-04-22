import { useAppSelector } from "@/utils/hooks/redux-hooks";
import { getCart } from "@/store/slices/cartSlice";

const TotalCost = () => {
    const cart = useAppSelector(getCart);

    const totalPrice = cart
        ?.reduce((acc: any, item: any) => acc + item.price * item.quantity, 0)
        .toFixed(1);

    return totalPrice;
};

const TotalQuantity = () => {
    const cart = useAppSelector(getCart);

    let totalQuantity = 0;
    cart.forEach((item: any) => {
        totalQuantity += item.quantity;
    });

    return totalQuantity;
};

const PriceWithDeliveryCharge = () => {
    const cart = useAppSelector(getCart);

    const totalPrice = cart
        ?.reduce((acc: any, item: any) => acc + item.price * item.quantity, 120)
        .toFixed(1);

    return totalPrice;
};

export { TotalCost, TotalQuantity, PriceWithDeliveryCharge };
