import React, { useEffect, useState } from "react";
import {
    IconButton,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
    // Alert,
    Input,
    Drawer,
    Card,
} from "@material-tailwind/react";
import {
    InboxIcon,
    AdjustmentsHorizontalIcon,
    BoltIcon,
    UserCircleIcon,
    LifebuoyIcon,
} from "@heroicons/react/24/solid";
import {
    ShoppingCartIcon,
    Cog6ToothIcon,
    // CubeTransparentIcon,
    UserIcon,
    ShoppingBagIcon,
    ChevronRightIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    Bars3Icon,
    XMarkIcon,
    BookmarkIcon,
    ArrowRightStartOnRectangleIcon,
    ArrowLeftEndOnRectangleIcon,
} from "@heroicons/react/24/outline";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSupabase } from "@/utils/hooks/useSupabase";
import { supabase } from "@/utils/supabase/client";

export function SidebarWithBurgerMenu({
    cartProducts,
}: {
    cartProducts: Array<any>;
}) {
    const [open, setOpen] = useState(0);
    const [openAlert, setOpenAlert] = useState(true);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [notiValue, setNotiValue] = useState(0);

    //search query state
    const [searchQuery, setSearchQuery] = useState("");

    //disable list item
    const isDisabled = true;

    //router
    const router = useRouter();

    //supabase products hook
    // const { getAllProducts, products } = useSupabase();

    //supabase user hook
    const { UserData, getUserData } = useSupabase();

    //open and close accordion
    const handleOpen = (value: number) => {
        setOpen(open === value ? 0 : value);
    };

    //naming
    const nameing =
        "loreum ipsum dolor sit amet, consectetur adipiscing elit. , consectetur adipiscing elit. ";

    //drawer open and close
    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);

    //search
    const handleSearch = () => {
        router.push(`/search/${searchQuery}`);
        setSearchQuery("");
    };

    //search on enter key press
    const handleKeyPress = (e: any) => {
        if (e.key === "Enter") {
            handleSearch();
            closeDrawer();
        }
    };

    useEffect(() => {
        // getAllProducts();
        getUserData();
    }, []);

    return (
        <>
            <IconButton
                variant="text"
                size="lg"
                onClick={openDrawer}
                className="text-white border-white "
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
            >
                <Bars3Icon className="h-8 w-8 stroke-2" />
            </IconButton>
            <Drawer
                placement="right"
                open={isDrawerOpen}
                onClose={closeDrawer}
                className="overflow-y-auto "
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
            >
                <Card
                    color="transparent"
                    shadow={false}
                    className="h-[calc(100vh-2rem)] w-full px-2 pb-4 "
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                >
                    <div className="flex items-center justify-end">
                        <IconButton
                            variant="text"
                            size="md"
                            onClick={closeDrawer}
                            className="text-black border-white "
                            placeholder=""
                            onPointerEnterCapture={() => {}}
                            onPointerLeaveCapture={() => {}}
                        >
                            <XMarkIcon className="h-6 w-6 stroke-2" />
                        </IconButton>
                    </div>
                    <div className="flex items-center px-4">
                        <Image
                            src="/amazon-logo.png"
                            alt="brand"
                            className="h-16 w-full px-10"
                            width={240}
                            height={240}
                        />
                    </div>
                    <div className=" text-center mb-2">
                        <span>
                            {UserData ? (
                                <div className="">
                                    {UserData?.user_metadata?.name ? (
                                        <div
                                            title={
                                                UserData?.user_metadata?.name
                                            }
                                        >
                                            Hello,{" "}
                                            {UserData?.user_metadata?.name?.split(
                                                " "
                                            )[0] +
                                                " " +
                                                UserData?.user_metadata?.name?.split(
                                                    " "
                                                )[1]}
                                        </div>
                                    ) : (
                                        <div
                                            className=""
                                            style={{ fontSize: "10px" }}
                                            title={UserData.email}
                                        >
                                            Hello, {UserData.email}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                " "
                            )}
                        </span>
                    </div>
                    <div className="p-2">
                        <Input
                            icon={
                                <MagnifyingGlassIcon
                                    className="absolute w-10 h-[2.29rem] p-2 rounded-r-md  hover:bg-gray-300 "
                                    onClick={handleSearch}
                                />
                            }
                            // className=" !border-2"
                            label="Search"
                            type="text"
                            placeholder="Search for products, category and more"
                            name="search"
                            value={searchQuery}
                            id="search"
                            onKeyUp={(e) => handleKeyPress(e)}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onPointerEnterCapture={() => {}}
                            onPointerLeaveCapture={() => {}}
                            crossOrigin=""
                        />
                    </div>
                    <List
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                    >
                        <Accordion
                            open={open === 1}
                            icon={
                                <ChevronDownIcon
                                    strokeWidth={2.5}
                                    className={`mx-auto h-4 w-4 transition-transform ${
                                        open === 2 ? "rotate-180" : ""
                                    }`}
                                />
                            }
                            placeholder=""
                            onPointerEnterCapture={() => {}}
                            onPointerLeaveCapture={() => {}}
                        >
                            <ListItem
                                className="p-0 "
                                selected={open === 1}
                                placeholder=""
                                onPointerEnterCapture={() => {}}
                                onPointerLeaveCapture={() => {}}
                            >
                                <AccordionHeader
                                    onClick={() => handleOpen(1)}
                                    className="border-b-0 p-3"
                                    placeholder=""
                                    onPointerEnterCapture={() => {}}
                                    onPointerLeaveCapture={() => {}}
                                >
                                    <ListItemPrefix
                                        placeholder=""
                                        onPointerEnterCapture={() => {}}
                                        onPointerLeaveCapture={() => {}}
                                    >
                                        <BoltIcon
                                            className="h-6 w-6"
                                            strokeWidth={2}
                                        />
                                    </ListItemPrefix>
                                    <Typography
                                        color="blue-gray"
                                        className="mr-auto font-normal "
                                        placeholder=""
                                        onPointerEnterCapture={() => {}}
                                        onPointerLeaveCapture={() => {}}
                                    >
                                        Trending
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                            <AccordionBody className="py-1">
                                <List
                                    className="p-0"
                                    placeholder=""
                                    onPointerEnterCapture={() => {}}
                                    onPointerLeaveCapture={() => {}}
                                >
                                    <ListItem
                                        onClick={() => {
                                            closeDrawer();
                                            router.push("/");
                                        }}
                                        placeholder=""
                                        onPointerEnterCapture={() => {}}
                                        onPointerLeaveCapture={() => {}}
                                    >
                                        <ListItemPrefix
                                            placeholder=""
                                            onPointerEnterCapture={() => {}}
                                            onPointerLeaveCapture={() => {}}
                                        >
                                            <ChevronRightIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Home
                                    </ListItem>
                                    <ListItem
                                        disabled={isDisabled ? true : false}
                                        onClick={() => {
                                            closeDrawer();
                                            router.push("/");
                                        }}
                                        placeholder=""
                                        onPointerEnterCapture={() => {}}
                                        onPointerLeaveCapture={() => {}}
                                    >
                                        <ListItemPrefix
                                            placeholder=""
                                            onPointerEnterCapture={() => {}}
                                            onPointerLeaveCapture={() => {}}
                                        >
                                            <ChevronRightIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Best Sellers
                                    </ListItem>
                                    <ListItem
                                        disabled={isDisabled ? true : false}
                                        onClick={() => {
                                            closeDrawer();
                                            router.push("/");
                                        }}
                                        placeholder=""
                                        onPointerEnterCapture={() => {}}
                                        onPointerLeaveCapture={() => {}}
                                    >
                                        <ListItemPrefix
                                            placeholder=""
                                            onPointerEnterCapture={() => {}}
                                            onPointerLeaveCapture={() => {}}
                                        >
                                            <ChevronRightIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        New Releases
                                    </ListItem>
                                </List>
                            </AccordionBody>
                        </Accordion>
                        <Accordion
                            open={open === 2}
                            icon={
                                <ChevronDownIcon
                                    strokeWidth={2.5}
                                    className={`mx-auto h-4 w-4 transition-transform ${
                                        open === 2 ? "rotate-180" : ""
                                    }`}
                                />
                            }
                            placeholder=""
                            onPointerEnterCapture={() => {}}
                            onPointerLeaveCapture={() => {}}
                        >
                            <ListItem
                                className="p-0"
                                selected={open === 2}
                                disabled={isDisabled ? true : false}
                                placeholder=""
                                onPointerEnterCapture={() => {}}
                                onPointerLeaveCapture={() => {}}
                            >
                                <AccordionHeader
                                    onClick={() => handleOpen(2)}
                                    className="border-b-0 p-3"
                                    placeholder=""
                                    onPointerEnterCapture={() => {}}
                                    onPointerLeaveCapture={() => {}}
                                >
                                    <ListItemPrefix
                                        placeholder=""
                                        onPointerEnterCapture={() => {}}
                                        onPointerLeaveCapture={() => {}}
                                    >
                                        <LifebuoyIcon
                                            className="h-6 w-6"
                                            strokeWidth={2}
                                        />
                                    </ListItemPrefix>
                                    <Typography
                                        color="blue-gray"
                                        className="mr-auto font-normal"
                                        placeholder=""
                                        onPointerEnterCapture={() => {}}
                                        onPointerLeaveCapture={() => {}}
                                    >
                                        Digital Content
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                            <AccordionBody className="py-1">
                                <List
                                    className="p-0"
                                    placeholder=""
                                    onPointerEnterCapture={() => {}}
                                    onPointerLeaveCapture={() => {}}
                                >
                                    <ListItem
                                        placeholder=""
                                        onPointerEnterCapture={() => {}}
                                        onPointerLeaveCapture={() => {}}
                                    >
                                        <ListItemPrefix
                                            placeholder=""
                                            onPointerEnterCapture={() => {}}
                                            onPointerLeaveCapture={() => {}}
                                        >
                                            <ChevronRightIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Echo & Alexa
                                    </ListItem>
                                    <ListItem
                                        placeholder=""
                                        onPointerEnterCapture={() => {}}
                                        onPointerLeaveCapture={() => {}}
                                    >
                                        <ListItemPrefix
                                            placeholder=""
                                            onPointerEnterCapture={() => {}}
                                            onPointerLeaveCapture={() => {}}
                                        >
                                            <ChevronRightIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Fire TV
                                    </ListItem>
                                    <ListItem
                                        placeholder=""
                                        onPointerEnterCapture={() => {}}
                                        onPointerLeaveCapture={() => {}}
                                    >
                                        <ListItemPrefix
                                            placeholder=""
                                            onPointerEnterCapture={() => {}}
                                            onPointerLeaveCapture={() => {}}
                                        >
                                            <ChevronRightIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Kindle
                                    </ListItem>
                                    <ListItem
                                        placeholder=""
                                        onPointerEnterCapture={() => {}}
                                        onPointerLeaveCapture={() => {}}
                                    >
                                        <ListItemPrefix
                                            placeholder=""
                                            onPointerEnterCapture={() => {}}
                                            onPointerLeaveCapture={() => {}}
                                        >
                                            <ChevronRightIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Prime Video
                                    </ListItem>
                                    <ListItem
                                        placeholder=""
                                        onPointerEnterCapture={() => {}}
                                        onPointerLeaveCapture={() => {}}
                                    >
                                        <ListItemPrefix
                                            placeholder=""
                                            onPointerEnterCapture={() => {}}
                                            onPointerLeaveCapture={() => {}}
                                        >
                                            <ChevronRightIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Prime Music
                                    </ListItem>
                                </List>
                            </AccordionBody>
                        </Accordion>
                        <Accordion
                            placeholder=""
                            onPointerEnterCapture={() => {}}
                            onPointerLeaveCapture={() => {}}
                            open={open === 3}
                            icon={
                                <ChevronDownIcon
                                    strokeWidth={2.5}
                                    className={`mx-auto h-4 w-4 transition-transform ${
                                        open === 1 ? "rotate-180" : ""
                                    }`}
                                />
                            }
                        >
                            <ListItem
                                className="p-0"
                                selected={open === 3}
                                placeholder=""
                                onPointerEnterCapture={() => {}}
                                onPointerLeaveCapture={() => {}}
                            >
                                <AccordionHeader
                                    placeholder=""
                                    onPointerEnterCapture={() => {}}
                                    onPointerLeaveCapture={() => {}}
                                    onClick={() => handleOpen(3)}
                                    className="border-b-0 p-3"
                                >
                                    <ListItemPrefix
                                        placeholder=""
                                        onPointerEnterCapture={() => {}}
                                        onPointerLeaveCapture={() => {}}
                                    >
                                        <AdjustmentsHorizontalIcon className="h-6 w-6" />
                                    </ListItemPrefix>
                                    <Typography
                                        placeholder=""
                                        onPointerEnterCapture={() => {}}
                                        onPointerLeaveCapture={() => {}}
                                        color="blue-gray"
                                        className="mr-auto font-normal"
                                    >
                                        Shop by Category
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                            <AccordionBody className="py-1">
                                <List
                                    className="p-0"
                                    placeholder=""
                                    onPointerEnterCapture={() => {}}
                                    onPointerLeaveCapture={() => {}}
                                >
                                    <ListItem
                                        placeholder=""
                                        onPointerEnterCapture={() => {}}
                                        onPointerLeaveCapture={() => {}}
                                        onClick={() => {
                                            router.push(
                                                `/search/men's clothing`
                                            );
                                            closeDrawer();
                                        }}
                                    >
                                        <ListItemPrefix
                                            placeholder=""
                                            onPointerEnterCapture={() => {}}
                                            onPointerLeaveCapture={() => {}}
                                        >
                                            <ChevronRightIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Men&apos;s Clothing
                                    </ListItem>
                                    <ListItem
                                        placeholder=""
                                        onPointerEnterCapture={() => {}}
                                        onPointerLeaveCapture={() => {}}
                                        onClick={() => {
                                            router.push(
                                                `/search/women's clothing`
                                            );
                                            closeDrawer();
                                        }}
                                    >
                                        <ListItemPrefix
                                            placeholder=""
                                            onPointerEnterCapture={() => {}}
                                            onPointerLeaveCapture={() => {}}
                                        >
                                            <ChevronRightIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Women&apos;s Clothing
                                    </ListItem>
                                    <ListItem
                                        placeholder=""
                                        onPointerEnterCapture={() => {}}
                                        onPointerLeaveCapture={() => {}}
                                        onClick={() => {
                                            router.push(`/search/electronics`);
                                            closeDrawer();
                                        }}
                                    >
                                        <ListItemPrefix
                                            placeholder=""
                                            onPointerEnterCapture={() => {}}
                                            onPointerLeaveCapture={() => {}}
                                        >
                                            <ChevronRightIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Electronics
                                    </ListItem>
                                    <ListItem
                                        placeholder=""
                                        onPointerEnterCapture={() => {}}
                                        onPointerLeaveCapture={() => {}}
                                        onClick={() => {
                                            router.push(`/search/jewelry`);
                                            closeDrawer();
                                        }}
                                    >
                                        <ListItemPrefix
                                            placeholder=""
                                            onPointerEnterCapture={() => {}}
                                            onPointerLeaveCapture={() => {}}
                                        >
                                            <ChevronRightIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        jewelry
                                    </ListItem>
                                    <ListItem
                                        placeholder=""
                                        onPointerEnterCapture={() => {}}
                                        onPointerLeaveCapture={() => {}}
                                        onClick={() => {
                                            router.push(`/search/shoes`);
                                            closeDrawer();
                                        }}
                                    >
                                        <ListItemPrefix
                                            placeholder=""
                                            onPointerEnterCapture={() => {}}
                                            onPointerLeaveCapture={() => {}}
                                        >
                                            <ChevronRightIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Shoes
                                    </ListItem>
                                    <ListItem
                                        placeholder=""
                                        onPointerEnterCapture={() => {}}
                                        onPointerLeaveCapture={() => {}}
                                        onClick={() => {
                                            router.push(`/search/furniture`);
                                            closeDrawer();
                                        }}
                                    >
                                        <ListItemPrefix
                                            placeholder=""
                                            onPointerEnterCapture={() => {}}
                                            onPointerLeaveCapture={() => {}}
                                        >
                                            <ChevronRightIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Furniture
                                    </ListItem>
                                    <ListItem
                                        placeholder=""
                                        onPointerEnterCapture={() => {}}
                                        onPointerLeaveCapture={() => {}}
                                        disabled={isDisabled ? true : false}
                                    >
                                        <ListItemPrefix
                                            placeholder=""
                                            onPointerEnterCapture={() => {}}
                                            onPointerLeaveCapture={() => {}}
                                        >
                                            <ChevronRightIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Computer
                                    </ListItem>

                                    <ListItem
                                        placeholder=""
                                        onPointerEnterCapture={() => {}}
                                        onPointerLeaveCapture={() => {}}
                                        disabled={isDisabled ? true : false}
                                    >
                                        <ListItemPrefix
                                            placeholder=""
                                            onPointerEnterCapture={() => {}}
                                            onPointerLeaveCapture={() => {}}
                                        >
                                            <ChevronRightIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Kitchen
                                    </ListItem>
                                    <ListItem
                                        placeholder=""
                                        onPointerEnterCapture={() => {}}
                                        onPointerLeaveCapture={() => {}}
                                        disabled={isDisabled ? true : false}
                                    >
                                        <ListItemPrefix
                                            placeholder=""
                                            onPointerEnterCapture={() => {}}
                                            onPointerLeaveCapture={() => {}}
                                        >
                                            <ChevronRightIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Grocery
                                    </ListItem>
                                    <ListItem
                                        placeholder=""
                                        onPointerEnterCapture={() => {}}
                                        onPointerLeaveCapture={() => {}}
                                        disabled={isDisabled ? true : false}
                                    >
                                        <ListItemPrefix
                                            placeholder=""
                                            onPointerEnterCapture={() => {}}
                                            onPointerLeaveCapture={() => {}}
                                        >
                                            <ChevronRightIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Books
                                    </ListItem>
                                </List>
                            </AccordionBody>
                        </Accordion>
                        <Accordion
                            placeholder=""
                            onPointerEnterCapture={() => {}}
                            onPointerLeaveCapture={() => {}}
                            open={open === 10}
                            icon={
                                <ChevronDownIcon
                                    strokeWidth={2.5}
                                    className={`mx-auto h-4 w-4 transition-transform ${
                                        open === 2 ? "rotate-180" : ""
                                    }`}
                                />
                            }
                        >
                            <ListItem
                                className="p-0"
                                selected={open === 10}
                                placeholder=""
                                onPointerEnterCapture={() => {}}
                                onPointerLeaveCapture={() => {}}
                            >
                                <AccordionHeader
                                    onClick={() => handleOpen(10)}
                                    className="border-b-0 p-3"
                                    placeholder=""
                                    onPointerEnterCapture={() => {}}
                                    onPointerLeaveCapture={() => {}}
                                >
                                    <ListItemPrefix
                                        placeholder=""
                                        onPointerEnterCapture={() => {}}
                                        onPointerLeaveCapture={() => {}}
                                    >
                                        <UserCircleIcon
                                            className="h-6 w-6"
                                            strokeWidth={2}
                                        />
                                    </ListItemPrefix>
                                    <Typography
                                        placeholder=""
                                        onPointerEnterCapture={() => {}}
                                        onPointerLeaveCapture={() => {}}
                                        color="blue-gray"
                                        className="mr-auto font-normal"
                                    >
                                        Account
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                            <AccordionBody className="py-1">
                                <List
                                    className="p-0"
                                    placeholder=""
                                    onPointerEnterCapture={() => {}}
                                    onPointerLeaveCapture={() => {}}
                                >
                                    <ListItem
                                        disabled={isDisabled ? true : false}
                                        placeholder=""
                                        onPointerEnterCapture={() => {}}
                                        onPointerLeaveCapture={() => {}}
                                    >
                                        <ListItemPrefix
                                            placeholder=""
                                            onPointerEnterCapture={() => {}}
                                            onPointerLeaveCapture={() => {}}
                                        >
                                            <UserIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Profile
                                    </ListItem>
                                    <ListItem
                                        disabled={isDisabled ? true : false}
                                        placeholder=""
                                        onPointerEnterCapture={() => {}}
                                        onPointerLeaveCapture={() => {}}
                                    >
                                        <ListItemPrefix
                                            placeholder=""
                                            onPointerEnterCapture={() => {}}
                                            onPointerLeaveCapture={() => {}}
                                        >
                                            <BookmarkIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Wish List
                                    </ListItem>
                                    <Link href="/cart" onClick={closeDrawer}>
                                        <ListItem
                                            disabled={isDisabled ? true : false}
                                            placeholder=""
                                            onPointerEnterCapture={() => {}}
                                            onPointerLeaveCapture={() => {}}
                                        >
                                            <ListItemPrefix
                                                placeholder=""
                                                onPointerEnterCapture={() => {}}
                                                onPointerLeaveCapture={() => {}}
                                            >
                                                <ShoppingBagIcon
                                                    strokeWidth={2}
                                                    className="h-4 w-5"
                                                />
                                            </ListItemPrefix>
                                            Order
                                        </ListItem>
                                    </Link>
                                </List>
                            </AccordionBody>
                        </Accordion>
                        <Link
                            href="/cart"
                            onClick={closeDrawer}
                            className="text-black"
                        >
                            <ListItem
                                placeholder=""
                                onPointerEnterCapture={() => {}}
                                onPointerLeaveCapture={() => {}}
                            >
                                <ListItemPrefix
                                    placeholder=""
                                    onPointerEnterCapture={() => {}}
                                    onPointerLeaveCapture={() => {}}
                                >
                                    <ShoppingCartIcon
                                        className="h-6 w-6"
                                        strokeWidth={2}
                                    />
                                </ListItemPrefix>
                                Cart
                                <ListItemSuffix
                                    placeholder=""
                                    onPointerEnterCapture={() => {}}
                                    onPointerLeaveCapture={() => {}}
                                >
                                    <Chip
                                        value={cartProducts}
                                        size="sm"
                                        variant="ghost"
                                        color="blue-gray"
                                        className="rounded-full"
                                    />
                                </ListItemSuffix>
                            </ListItem>
                        </Link>
                        <hr className="my-2 border-blue-gray-50" />
                        <ListItem
                            className="hidden"
                            placeholder=""
                            onPointerEnterCapture={() => {}}
                            onPointerLeaveCapture={() => {}}
                        >
                            <ListItemPrefix
                                placeholder=""
                                onPointerEnterCapture={() => {}}
                                onPointerLeaveCapture={() => {}}
                            >
                                <InboxIcon className="h-6 w-6" />
                            </ListItemPrefix>
                            Notification
                            <ListItemSuffix
                                placeholder=""
                                onPointerEnterCapture={() => {}}
                                onPointerLeaveCapture={() => {}}
                            >
                                <Chip
                                    value={notiValue}
                                    size="sm"
                                    variant="ghost"
                                    color="blue-gray"
                                    className="rounded-full"
                                />
                            </ListItemSuffix>
                        </ListItem>
                        <ListItem
                            className="hidden"
                            placeholder=""
                            onPointerEnterCapture={() => {}}
                            onPointerLeaveCapture={() => {}}
                        >
                            <ListItemPrefix
                                placeholder=""
                                onPointerEnterCapture={() => {}}
                                onPointerLeaveCapture={() => {}}
                            >
                                <Cog6ToothIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Settings
                        </ListItem>
                        {UserData !== null ? (
                            <ListItem
                                onClick={async () => {
                                    const { error } =
                                        await supabase.auth.signOut();
                                    router.push("/user/signin");
                                    closeDrawer;
                                }}
                                className="text-black"
                                placeholder=""
                                onPointerEnterCapture={() => {}}
                                onPointerLeaveCapture={() => {}}
                            >
                                <ListItemPrefix
                                    placeholder=""
                                    onPointerEnterCapture={() => {}}
                                    onPointerLeaveCapture={() => {}}
                                >
                                    <ArrowRightStartOnRectangleIcon
                                        className="h-6 w-6"
                                        strokeWidth={2}
                                    />
                                </ListItemPrefix>
                                Sign Out
                            </ListItem>
                        ) : (
                            <ListItem
                                className="text-black"
                                onClick={() => {
                                    router.push("/user/signin");
                                    closeDrawer;
                                }}
                                placeholder=""
                                onPointerEnterCapture={() => {}}
                                onPointerLeaveCapture={() => {}}
                            >
                                <ListItemPrefix
                                    placeholder=""
                                    onPointerEnterCapture={() => {}}
                                    onPointerLeaveCapture={() => {}}
                                >
                                    <ArrowLeftEndOnRectangleIcon
                                        className="h-6 w-6"
                                        strokeWidth={2}
                                    />
                                </ListItemPrefix>
                                Sign In
                            </ListItem>
                        )}
                    </List>
                    {/* <Alert
                        open={openAlert}
                        className="mt-auto"
                        onClose={() => setOpenAlert(false)}
                    >
                        <CubeTransparentIcon className="mb-4 h-12 w-12" />
                        <Typography variant="h6" className="mb-1">
                            Upgrade to PRO
                        </Typography>
                        <Typography
                            variant="small"
                            className="font-normal opacity-80"
                        >
                            Upgrade to Material Tailwind PRO and get even more
                            components, plugins, advanced features and premium.
                        </Typography>
                        <div className="mt-4 flex gap-3">
                            <Typography
                                as="a"
                                href="#"
                                variant="small"
                                className="font-medium opacity-80"
                                onClick={() => setOpenAlert(false)}
                            >
                                Dismiss
                            </Typography>
                            <Typography
                                as="a"
                                href="#"
                                variant="small"
                                className="font-medium"
                            >
                                Upgrade Now
                            </Typography>
                        </div>
                    </Alert> */}
                </Card>
            </Drawer>
        </>
    );
}
