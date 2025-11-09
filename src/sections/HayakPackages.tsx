import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PackageCard from "../components/PackageCard";

const HayakPackages = () => {
    // Refs for scroll-triggered animations
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const packagesRef = useRef(null);

    // InView states for scroll-triggered animations
    const containerInView = useInView(containerRef, {
        once: true,
        margin: "-100px",
    });
    const titleInView = useInView(titleRef, { once: true, margin: "-100px" });
    const packagesInView = useInView(packagesRef, {
        once: true,
        margin: "-100px",
    });

    const basicPackageItems = [
        { text: "Up to 100 guests" },
        { text: "Invitation with QR Code" },
        { text: "Confirmation" },
        { text: "Customizable Text in Design" },
        { text: "Thank-You Note After Event" },
        { text: "Guest Support (WhatsApp)" },
        { text: "1 Scanner on Event Day" },
        { text: "30 Replacement Invites" },
    ];

    const essentialPackageItems = [
        { text: "Up to 200 guests" },
        { text: "Invitation with QR Code" },
        { text: "Confirmation" },
        { text: "Customizable Text in Design" },
        { text: "RSVP 1 Reminder" },
        { text: "Thank-You Note After Event" },
        { text: "Guest Support (WhatsApp)" },
        { text: "1 Scanner on Event Day" },
        { text: "100 Replacement Invites" },
        { text: "Plus-one guest per invitation" },
    ];

    const deluxePackageItems = [
        { text: "Up to 250 guests" },
        { text: "Invitation with QR Code" },
        { text: "Confirmation" },
        { text: "Customizable Text in Design" },
        { text: "Custom Message Text for Invitations" },
        { text: "RSVP 1 Reminder" },
        { text: "Thank-You Note After Event" },
        { text: "Guest Support (WhatsApp)" },
        { text: "2 Scanner on Event Day" },
        { text: "150 Replacement Invites" },
        { text: "Plus-Two guest per invitation" },
    ];

    const premiumPackageItems = [
        { text: "Up to 350 guests" },
        { text: "Invitation with QR Code" },
        { text: "Confirmation" },
        { text: "Customizable Text in Design" },
        { text: "Custom Message Text for Invitations" },
        { text: "RSVP 2 Reminders" },
        { text: "Thank-You Note After Event" },
        { text: "Guest Support (WhatsApp)" },
        { text: "Dedicated Account Manager" },
        { text: "2 Scanner on Event Day" },
        { text: "Data Entry Service" },
        { text: "300 Replacement Invites" },
        { text: "Plus-Three guest per invitation" },
    ];

    const elitePackageItems = [
        { text: "Up to 500 guests" },
        { text: "Invitation with QR Code" },
        { text: "Confirmation" },
        { text: "Customizable Text in Design" },
        { text: "Custom Message Text for Invitations" },
        { text: "RSVP 2 Reminders" },
        { text: "Thank-You Note After Event" },
        { text: "Guest Support (WhatsApp)" },
        { text: "Dedicated Account Manager" },
        { text: "2 Scanner on Event Day" },
        { text: "Data Entry Service" },
        { text: "Priority Support" },
        { text: "500 Replacement Invites" },
        { text: "Plus-Four guest per invitation" },
    ];

    return (
        <motion.div
            id="plans"
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={containerInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full relative px-4 sm:px-8 md:px-16 lg:px-60 py-16 sm:py-24 lg:py-32 flex flex-col gap-10"
        >
            <motion.h1
                ref={titleRef}
                initial={{ opacity: 0, y: 50 }}
                animate={
                    titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold"
            >
                Hayak <span className="text-[#4F2396]">Packages</span>
            </motion.h1>
            <motion.div
                ref={packagesRef}
                initial={{ opacity: 0, y: 100 }}
                animate={
                    packagesInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 100 }
                }
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="flex flex-col items-center justify-center gap-10 p-6 rounded-[20px] md:py-0 md:rounded-none md:gap-0 md:flex-row md:items-stretch bg-[#F9F4FF] md:bg-transparent"
            >
                <PackageCard
                    variant="first"
                    title="Basic"
                    price={1200}
                    items={basicPackageItems}
                />
                <PackageCard
                    variant="middle"
                    title="Essential"
                    price={2100}
                    items={essentialPackageItems}
                />
                <PackageCard
                    variant="middle"
                    title="Deluxe"
                    price={2900}
                    items={deluxePackageItems}
                    isRecommended={true}
                />
                <PackageCard
                    variant="middle"
                    title="Premium"
                    price={3800}
                    items={premiumPackageItems}
                />
                <PackageCard
                    variant="last"
                    title="Elite"
                    price={4300}
                    items={elitePackageItems}
                />
            </motion.div>
        </motion.div>
    );
};

export default HayakPackages;
