import React, { useState } from "react";
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
    Alert,
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
    ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import {
    CubeTransparentIcon,
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

export function SidebarWithBurgerMenu({ cartProducts }) {
    const [open, setOpen] = useState(0);
    const [openAlert, setOpenAlert] = useState(true);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [notiValue, setNotiValue] = useState(0);
    const [islogin, setIslogin] = useState(false);
    const isDisabled = true;

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);

    return (
        <>
            <IconButton
                variant="text"
                size="lg"
                onClick={openDrawer}
                className="text-white border-white "
            >
                <Bars3Icon className="h-8 w-8 stroke-2" />
            </IconButton>
            <Drawer
                placement="right"
                open={isDrawerOpen}
                onClose={closeDrawer}
                className="overflow-y-auto "
            >
                <Card
                    color="transparent"
                    shadow={false}
                    className="h-[calc(100vh-2rem)] w-full px-2 pb-4 "
                >
                    <div className="flex items-center justify-end">
                        <IconButton
                            variant="text"
                            size="md"
                            onClick={closeDrawer}
                            className="text-black border-white "
                        >
                            <XMarkIcon className="h-6 w-6 stroke-2" />
                        </IconButton>
                    </div>
                    <div className="mb-2 flex items-center px-4">
                        <Image
                            src="/amazon-logo.png"
                            alt="brand"
                            className="h-16 w-full px-10"
                            width={240}
                            height={240}
                        />
                    </div>
                    <div className="p-2">
                        <Input
                            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                            label="Search"
                        />
                    </div>
                    <List>
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
                        >
                            <ListItem className="p-0 " selected={open === 1}>
                                <AccordionHeader
                                    onClick={() => handleOpen(1)}
                                    className="border-b-0 p-3"
                                >
                                    <ListItemPrefix>
                                        <BoltIcon
                                            className="h-6 w-6"
                                            strokeWidth={2}
                                        />
                                    </ListItemPrefix>
                                    <Typography
                                        color="blue-gray"
                                        className="mr-auto font-normal "
                                    >
                                        Trending
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                            <AccordionBody className="py-1">
                                <List className="p-0">
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Best Sellers
                                    </ListItem>
                                    <ListItem>
                                        <ListItemPrefix>
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
                        >
                            <ListItem
                                className="p-0"
                                selected={open === 2}
                                disabled={isDisabled ? true : false}
                            >
                                <AccordionHeader
                                    onClick={() => handleOpen(2)}
                                    className="border-b-0 p-3"
                                >
                                    <ListItemPrefix>
                                        <LifebuoyIcon
                                            className="h-6 w-6"
                                            strokeWidth={2}
                                        />
                                    </ListItemPrefix>
                                    <Typography
                                        color="blue-gray"
                                        className="mr-auto font-normal"
                                    >
                                        Digital Content
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                            <AccordionBody className="py-1">
                                <List className="p-0">
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Echo & Alexa
                                    </ListItem>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Fire TV
                                    </ListItem>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Kindle
                                    </ListItem>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Prime Video
                                    </ListItem>
                                    <ListItem>
                                        <ListItemPrefix>
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
                            <ListItem className="p-0" selected={open === 3}>
                                <AccordionHeader
                                    onClick={() => handleOpen(3)}
                                    className="border-b-0 p-3"
                                >
                                    <ListItemPrefix>
                                        <AdjustmentsHorizontalIcon className="h-6 w-6" />
                                    </ListItemPrefix>
                                    <Typography
                                        color="blue-gray"
                                        className="mr-auto font-normal"
                                    >
                                        Shop by Category
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                            <AccordionBody className="py-1">
                                <List className="p-0">
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Electronics
                                    </ListItem>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Mobile
                                    </ListItem>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Laptop
                                    </ListItem>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Computer
                                    </ListItem>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Men&apos;s Clothing
                                    </ListItem>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Women&apos;s Clothing
                                    </ListItem>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Home
                                    </ListItem>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Kitchen
                                    </ListItem>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Grocery
                                    </ListItem>
                                    <ListItem>
                                        <ListItemPrefix>
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
                            <ListItem className="p-0" selected={open === 10}>
                                <AccordionHeader
                                    onClick={() => handleOpen(10)}
                                    className="border-b-0 p-3"
                                >
                                    <ListItemPrefix>
                                        <UserCircleIcon
                                            className="h-6 w-6"
                                            strokeWidth={2}
                                        />
                                    </ListItemPrefix>
                                    <Typography
                                        color="blue-gray"
                                        className="mr-auto font-normal"
                                    >
                                        Account
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                            <AccordionBody className="py-1">
                                <List className="p-0">
                                    <ListItem>
                                        <ListItemPrefix>
                                            <UserIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Profile
                                    </ListItem>
                                    <ListItem
                                        disabled={isDisabled ? true : false}
                                    >
                                        <ListItemPrefix>
                                            <BookmarkIcon
                                                strokeWidth={2}
                                                className="h-4 w-5"
                                            />
                                        </ListItemPrefix>
                                        Wish List
                                    </ListItem>
                                    <Link href="/cart" onClick={closeDrawer}>
                                        <ListItem>
                                            <ListItemPrefix>
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
                            <ListItem>
                                <ListItemPrefix>
                                    <ShoppingCartIcon
                                        className="h-6 w-6"
                                        strokeWidth={2}
                                    />
                                </ListItemPrefix>
                                Cart
                                <ListItemSuffix>
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
                        <ListItem disabled={isDisabled ? true : false}>
                            <ListItemPrefix>
                                <InboxIcon className="h-6 w-6" />
                            </ListItemPrefix>
                            Notification
                            <ListItemSuffix>
                                <Chip
                                    value={notiValue}
                                    size="sm"
                                    variant="ghost"
                                    color="blue-gray"
                                    className="rounded-full"
                                />
                            </ListItemSuffix>
                        </ListItem>
                        {/* <ListItem>
                            <ListItemPrefix>
                                <Cog6ToothIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Settings
                        </ListItem> */}
                        {islogin ? (
                            <ListItem>
                                <ListItemPrefix>
                                    <ArrowRightStartOnRectangleIcon
                                        className="h-6 w-6"
                                        strokeWidth={2}
                                    />
                                </ListItemPrefix>
                                Log Out
                            </ListItem>
                        ) : (
                            <ListItem>
                                <ListItemPrefix>
                                    <ArrowLeftEndOnRectangleIcon
                                        className="h-6 w-6"
                                        strokeWidth={2}
                                    />
                                </ListItemPrefix>
                                Log In
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
