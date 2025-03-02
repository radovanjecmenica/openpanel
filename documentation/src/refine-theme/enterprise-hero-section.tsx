import React from "react";
import clsx from "clsx";
import { EnterpriseGetInTouchButton } from "./enterprise-get-in-touch-button";
import { CommonThemedImage } from "./common-themed-image";

export const EnterpriseHeroSection = ({
    className,
}: {
    className?: string;
}) => {
    return (
        <div
            className={clsx(
                "flex flex-col",
                "landing-md:grid landing-md:grid-cols-12",
                "not-prose",
                className,
            )}
        >
            <div className={clsx("flex flex-col", "col-start-1 col-end-8")}>
                <h1
                    className={clsx(
                        "max-w-xl landing-md:max-w-[408px] landing-lg:max-w-non landing-lg:whitespace-nowrap",
                        "text-[32px] leading-[40px] landing-sm:text-[56px] landing-sm:leading-[72px]",
                        "tracking-tight",
                        "text-start",
                        "pl-4 landing-sm:pl-6 landing-md:pl-10",
                        "dark:text-gray-0 text-gray-900",
                        "landing-lg:pt-8",
                    )}
                >
                    OpenPanel{" "}
                    <span
                        className={clsx(
                            "font-semibold",
                            "dark:text-refine-cyan-alt dark:drop-shadow-[0_0_30px_rgba(71,235,235,0.25)]",
                            "text-refine-blue drop-shadow-[0_0_30px_rgba(51,51,255,0.3)]",
                        )}
                    >
                        public BETA
                    </span>
                    .
                </h1>
                <p
                    className={clsx(
                        "max-w-[446px]",
                        "mt-6",
                        "pl-4 landing-sm:pl-6 landing-md:pl-10",
                        "dark:text-gray-400 text-gray-600",
                    )}
                >
                    We're thrilled to announce that OpenPanel is currently available in open Beta! The open beta test will be open to the public between{" "}
                    <span className={clsx("dark:text-gray-0 text-gray-900")}>
                        January 25th{" "}
                    </span>
                    and{" "}
                    <span className={clsx("dark:text-gray-0 text-gray-900")}>
                        February 25th, 2024
                    </span>{" "}
                    Participation is free and available to anyone. To take part, simply{" "}
                    <span className={clsx("dark:text-gray-0 text-gray-900")}>
                        add your email address to the form bellow
                    </span>.
                </p>
                <EnterpriseGetInTouchButton
                    className={clsx(
                        "pl-4 landing-sm:pl-6 landing-md:pl-10",
                        "mt-6 landing-lg:mt-16",
                    )}
                />
            </div>
            <div
                className={clsx(
                    "flex",
                    "justify-end",
                    "col-start-8",
                    "col-end-13",
                    "mt-12 landing-sm:mt-16 landing-md:mt-0",
                )}
            >
                <CommonThemedImage
                    className={clsx(
                        "landing-md:h-[360px] landing-md:w-[360px]",
                        "landing-md:h-[360px] landing-md:w-[360px]",
                    )}
                    srcDark="https://refine.ams3.cdn.digitaloceanspaces.com/enterprise/enterprise-hero-image-dark.png"
                    srcLight="https://refine.ams3.cdn.digitaloceanspaces.com/enterprise/enterprise-hero-image-light.png"
                    alt="refine enterprise image"
                />
            </div>
        </div>
    );
};
