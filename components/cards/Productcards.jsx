import Image from "next/image";
import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import ProductRating from "../rating/Rating";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/utils/hooks/redux-hooks";
import { addToCart } from "@/store/slices/cartSlice";

// interface ProductProps {
//     product: any; // Replace 'any' with the actual type of queryFilteredData
//     // title
//     // price
//     // description
//     // category
//     // image
//     // rating
//     // numReviews
// }

const Productcards = ({ product }) => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    return (
        <>
            {/* <Image
                className="mix-blend-multiply"
                src={product.image}
                width={200}
                height={200}
                alt={product.title}
            />
            <div className="mt-4">
                <h1 className="font-bold text-base">{product.title} </h1>
                <p className="text-sm ">
                    {product.description.substring(0, 90)}...{" "}
                </p>
                <p className="font-bold text-2xl ">${product.price} </p>
            </div> */}
            <Card className=" w-full h-full rounded-2xl flex justify-between cursor-pointer">
                <CardHeader
                    className="m-0 w-full bg-gray-200 h-64 flex items-center justify-center shadow-none rounded-none rounded-t-2xl"
                    onClick={() => router.push(`/product/${product.id}`)}
                >
                    <Image
                        className="mix-blend-multiply p-3"
                        src={product.image}
                        width={200}
                        height={200}
                        alt={product.title}
                    />
                </CardHeader>
                <CardBody
                    className="space-y-3 p-2 px-4"
                    onClick={() => router.push(`/product/${product.id}`)}
                >
                    <Typography
                        variant=""
                        color="blue-gray"
                        className="font-bold text-base"
                    >
                        {product.title}
                    </Typography>
                    <Typography className="text-sm ">
                        {product?.rating !== null &&
                            product?.rating !== undefined && (
                                <ProductRating ratings={product?.rating} />
                            )}
                    </Typography>
                    <Typography className="text-sm ">
                        {product.description.substring(0, 70)}...
                    </Typography>
                    <Typography className="font-bold text-2xl text-black">
                        ₹{product.price}
                    </Typography>
                </CardBody>
                <CardFooter className="flex justify-center pt-3 ">
                    <Button
                        className=" bg-amazon-primary hover:bg-amazon-secondary shadow-md hover:shadow-sm outline-none"
                        onClick={() => {
                            dispatch(addToCart(product));
                            router.push("/cart");
                        }}
                    >
                        Add To Cart
                    </Button>
                </CardFooter>
            </Card>
        </>
    );
};

export default Productcards;
