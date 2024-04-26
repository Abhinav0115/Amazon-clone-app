"use client";
import React from "react";
import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "@/utils/supabase/client";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import AmazonLogo from "@/public/amazon-logo.png";
import Image from "next/image";
import Link from "next/link";

const SigninAuth = () => {
    return (
        <div className="w-5/6 md:w-1/4 mx-auto ">
            {/* <Auth supabaseClient={supabase()} appearance={{ theme: ThemeSupa }} /> */}
            <div className="w-[60%] mx-auto ">
                <Link href={"/"} className="cursor-pointer">
                    <Image
                        src={AmazonLogo}
                        alt="amazon logo"
                        width={200}
                        height={150}
                    />
                </Link>
            </div>
            <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                providers={["github"]}
                // providers={["google", "github", "facebook", "twitter", "discord"]}
                // theme="authentic-dark"
                // socialLayout="horizontal"
                magicLink={true}
                // redirectTo="#"
                // queryParams={{
                //     access_type: "offline",
                //     prompt: "consent",
                //     // hd: "gmail.com",
                // }}
                // view="sign_up"
                // view={props.view === "sign_up" ? "sign_up" : "sign_in"}
            />
        </div>
    );
};

export default SigninAuth;
