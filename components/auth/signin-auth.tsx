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
        <div className="w-[25%] mx-auto ">
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
                // providers={["google", "github", "facebook", "twitter"]}
                // theme="authentic-dark"
                // socialLayout="horizontal"
                magicLink={true}
                theme="authentic-dark"
                // view="sign_up"
            />
        </div>
    );
};

export default SigninAuth;
