import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import Image from "next/image";
import ProductRating from "../rating/Rating";
import { useRouter } from "next/navigation";

const HomeCard = ({ product }) => {
    const router = useRouter();
    return (
        <>
            <Card
                className=" w-full h-full rounded-2xl flex justify-between cursor-pointer hover:bg-light-blue-50 hover:shadow-2xl transition duration-300 ease-in-out hover:bg-opacity-25"
                onClick={() => router.push(`/product/${product.id}`)}
            >
                <CardHeader className="m-0 w-full bg-gray-200 h-64 flex items-center justify-center shadow-none rounded-none rounded-t-2xl">
                    <Image
                        className="mix-blend-multiply p-3"
                        src={product.image}
                        width={200}
                        height={200}
                        alt={product.title}
                    />
                </CardHeader>
                <CardBody className="space-y-3 p-2 px-4">
                    <Typography
                        color="blue-gray"
                        className="font-bold text-base"
                    >
                        {product.title.substring(0, 50)}
                    </Typography>
                    <Typography className="text-sm ">
                        {product?.rating !== null &&
                            product?.rating !== undefined && (
                                <ProductRating ratings={product?.rating} />
                            )}
                    </Typography>
                    <Typography
                        className="text-sm "
                        // title={product.description}
                    >
                        {product.description.substring(0, 70)}...
                    </Typography>
                    <Typography className="font-bold text-2xl text-black text-center">
                        ₹{product.price}
                    </Typography>
                </CardBody>
                {/* <CardFooter className="flex justify-center pt-3 ">
                    <Button className=" bg-amazon-primary hover:bg-amazon-secondary shadow-md hover:shadow-sm outline-none">
                        Add To Cart
                    </Button>
                </CardFooter> */}
            </Card>
        </>
    );
};

export default HomeCard;
