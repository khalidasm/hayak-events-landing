"use client";

import React, { useRef, useEffect, useLayoutEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

interface HayakServiceClientProps {
    locale: 'en' | 'ar';
    guestManagementTranslations: {
        title: React.ReactNode;
        description: React.ReactNode;
    };
    ticketSystemTranslations: {
        title: React.ReactNode;
        description: React.ReactNode;
    };
    printingStationsTranslations: {
        title: React.ReactNode;
        description: React.ReactNode;
    };
    prePrintedBadgesTranslations: {
        title: React.ReactNode;
        description: React.ReactNode;
    };
    guestJourneyPlanningTranslations: {
        title: React.ReactNode;
        description: React.ReactNode;
    };
}

const HayakServiceClient = ({ locale, guestManagementTranslations, ticketSystemTranslations, printingStationsTranslations, prePrintedBadgesTranslations, guestJourneyPlanningTranslations }: HayakServiceClientProps) => {
    const isRTL = locale === 'ar';
    
    // Server sections are already hidden with CSS class, but ensure they stay hidden
    // This is a safety measure in case CSS doesn't load immediately
    useLayoutEffect(() => {
        const serverGuestMgmt = document.querySelector('[data-server-guest-mgmt]');
        const serverTicketSystem = document.querySelector('[data-server-ticket-system]');
        const serverPrintingStations = document.querySelector('[data-server-printing-stations]');
        const serverPrePrintedBadges = document.querySelector('[data-server-pre-printed-badges]');
        const serverGuestJourney = document.querySelector('[data-server-guest-journey]');
        if (serverGuestMgmt) (serverGuestMgmt as HTMLElement).style.display = 'none';
        if (serverTicketSystem) (serverTicketSystem as HTMLElement).style.display = 'none';
        if (serverPrintingStations) (serverPrintingStations as HTMLElement).style.display = 'none';
        if (serverPrePrintedBadges) (serverPrePrintedBadges as HTMLElement).style.display = 'none';
        if (serverGuestJourney) (serverGuestJourney as HTMLElement).style.display = 'none';
    }, []);
    
    // Guest Management section refs
    const guestMgmtLeftRef = useRef(null);
    const guestMgmtRightRef = useRef(null);
    
    // Ticket System section refs
    const ticketSystemLeftRef = useRef(null);
    const ticketSystemRightRef = useRef(null);
    
    // Printing Stations section refs
    const printingStationsLeftRef = useRef(null);
    const printingStationsRightRef = useRef(null);
    
    // Pre-printed Badges section refs
    const prePrintedBadgesLeftRef = useRef(null);
    const prePrintedBadgesRightRef = useRef(null);
    
    // Guest Journey Planning section refs
    const guestJourneyLeftRef = useRef(null);
    const guestJourneyRightRef = useRef(null);

    // Guest Management section inView states
    const guestMgmtLeftInView = useInView(guestMgmtLeftRef, { once: true, margin: "-100px" });
    const guestMgmtRightInView = useInView(guestMgmtRightRef, { once: true, margin: "-100px" });
    
    // Ticket System section inView states
    const ticketSystemLeftInView = useInView(ticketSystemLeftRef, { once: true, margin: "-100px" });
    const ticketSystemRightInView = useInView(ticketSystemRightRef, { once: true, margin: "-100px" });
    
    // Printing Stations section inView states
    const printingStationsLeftInView = useInView(printingStationsLeftRef, { once: true, margin: "-100px" });
    const printingStationsRightInView = useInView(printingStationsRightRef, { once: true, margin: "-100px" });
    
    // Pre-printed Badges section inView states
    const prePrintedBadgesLeftInView = useInView(prePrintedBadgesLeftRef, { once: true, margin: "-100px" });
    const prePrintedBadgesRightInView = useInView(prePrintedBadgesRightRef, { once: true, margin: "-100px" });
    
    // Guest Journey Planning section inView states
    const guestJourneyLeftInView = useInView(guestJourneyLeftRef, { once: true, margin: "-100px" });
    const guestJourneyRightInView = useInView(guestJourneyRightRef, { once: true, margin: "-100px" });

    return (
        <div className="flex flex-col items-center w-full">
            {/* Guest Management Section - Client Animated */}
            <div className="w-full h-full flex flex-col xl:flex-row gap-8 xl:gap-20 items-center mt-8 xl:mt-[50px]">
                    <motion.div
                        ref={guestMgmtLeftRef}
                        initial={{ opacity: 0, x: isRTL ? 100 : -100 }}
                        animate={
                            guestMgmtLeftInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: isRTL ? 100 : -100 }
                        }
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col gap-3 xl:gap-5 w-full xl:w-1/2"
                    >
                        <h2 className={`text-2xl xl:text-4xl font-bold ${
                            isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                        }`}>
                            {guestManagementTranslations.title}
                        </h2>
                        <p className={`text-base xl:text-lg ${
                            isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                        }`}>
                            {guestManagementTranslations.description}
                        </p>
                    </motion.div>
                <motion.div
                    ref={guestMgmtRightRef}
                    initial={{ opacity: 0, x: isRTL ? -100 : 100 }}
                    animate={
                        guestMgmtRightInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: isRTL ? -100 : 100 }
                    }
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full xl:w-1/2 flex justify-center"
                >
                    <Image
                        src={isRTL ? '/ar/guest_management.svg' : '/en/guest_management.svg'}
                        alt={isRTL ? "بطاقة عرض إدارة الضيوف" : "Guest management feature card"}
                        width={1200}
                        height={1200}
                        className="w-full max-w-md xl:max-w-none h-auto"
                    />
                    <motion.div
                        animate={{ y: [-5, 5, -5] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className={`absolute -bottom-20 xl:-bottom-50 hidden xl:block ${
                            isRTL ? "-right-8 xl:-right-16" : "-left-8 xl:-left-16"
                        }`}
                    >
                        <Image
                            src={isRTL ? '/ar/gs_card_1.svg' : '/en/gs_card_1.svg'}
                            alt={isRTL ? "بطاقة عرض إضافية لإدارة الضيوف" : "Additional guest management card"}
                            width={400}
                            height={400}
                            className="w-[200px] xl:w-[400px] h-auto"
                        />
                    </motion.div>
                    <motion.div
                        animate={{ y: [-5, 5, -5] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className={`absolute -bottom-15 xl:-bottom-30 hidden xl:block ${
                            isRTL ? "-left-9 xl:-left-18" : "-right-9 xl:-right-18"
                        }`}
                    >
                        <Image
                            src={isRTL ? '/ar/gs_card_2.svg' : '/en/gs_card_2.svg'}
                            alt={isRTL ? "بطاقة عرض ثانوية لإدارة الضيوف" : "Secondary guest management card"}
                            width={400}
                            height={400}
                            className="w-[200px] xl:w-[400px] h-auto"
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Tickets System Section - Client Animated */}
            <div className="w-full h-full flex flex-col xl:flex-row items-center gap-8 xl:gap-20 mt-16 xl:mt-[200px]">
                <motion.div
                    ref={ticketSystemLeftRef}
                    initial={{ opacity: 0, x: isRTL ? 100 : -100 }}
                    animate={
                        ticketSystemLeftInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: isRTL ? 100 : -100 }
                    }
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full xl:w-1/2 flex justify-center order-2 xl:order-1"
                >
                    <Image
                        src={isRTL ? '/ar/ts_card.svg' : '/en/ts_card.svg'}
                        alt={isRTL ? "بطاقة عرض نظام التذاكر" : "Ticket system feature card"}
                        width={1200}
                        height={1200}
                        className="w-full max-w-md xl:max-w-none h-auto"
                    />
                    <motion.div
                        animate={{ y: [-5, 5, -5] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className='absolute -bottom-15 xl:-bottom-30 hidden xl:block -left-6 xl:-left-12'
                    >
                        <Image
                            src={isRTL ? '/ar/ts_card_2.svg' : '/en/ts_card_2.svg'}
                            alt={isRTL ? "بطاقة عرض إضافية لنظام التذاكر" : "Additional ticket system card"}
                            width={300}
                            height={300}
                            className="w-[150px] xl:w-[300px] h-auto"
                        />
                    </motion.div>
                    <motion.div
                        animate={{ y: [-5, 5, -5] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className='absolute -bottom-20 xl:-bottom-40 hidden xl:block -right-7 xl:-right-14'
                    >
                        <Image
                            src='/ts_card_1.svg'
                            alt={isRTL ? "بطاقة عرض ثانوية لنظام التذاكر" : "Secondary ticket system card"}
                            width={300}
                            height={300}
                            className="w-[150px] xl:w-[300px] h-auto"
                        />
                    </motion.div>
                </motion.div>
                <motion.div
                    ref={ticketSystemRightRef}
                    initial={{ opacity: 0, x: isRTL ? -100 : 100 }}
                    animate={
                        ticketSystemRightInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: isRTL ? -100 : 100 }
                    }
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-3 xl:gap-5 w-full xl:w-1/2 order-1 xl:order-2"
                >
                    <h2 className={`text-2xl xl:text-4xl font-bold ${
                        isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                    }`}>
                        {ticketSystemTranslations.title}
                    </h2>
                    <p className={`text-base xl:text-lg ${
                        isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                    }`}>
                        {ticketSystemTranslations.description}
                    </p>
                </motion.div>
            </div>
            <div className="w-full h-full flex flex-col xl:flex-row gap-8 xl:gap-20 items-center mt-16 xl:mt-[200px]">
                <motion.div
                    ref={printingStationsLeftRef}
                    initial={{ opacity: 0, x: isRTL ? 100 : -100 }}
                    animate={
                        printingStationsLeftInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: isRTL ? 100 : -100 }
                    }
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-3 xl:gap-5 w-full xl:w-1/2"
                >
                    <h2 className={`text-2xl xl:text-4xl font-bold ${
                        isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                    }`}>
                        {printingStationsTranslations.title}
                    </h2>
                    <p className={`text-base xl:text-lg ${
                        isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                    }`}>
                        {printingStationsTranslations.description}
                    </p>
                </motion.div>
                <motion.div
                    ref={printingStationsRightRef}
                    initial={{ opacity: 0, x: isRTL ? -100 : 100 }}
                    animate={
                        printingStationsRightInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: isRTL ? -100 : 100 }
                    }
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full xl:w-1/2 flex justify-center"
                >
                    <Image
                        src={isRTL ? '/ar/ps_card.svg' : '/en/ps_card.svg'}
                        alt={isRTL ? "بطاقة عرض محطات الطباعة" : "Printing stations feature card"}
                        width={1200}
                        height={1200}
                        className="w-full max-w-md xl:max-w-none h-auto"
                    />
                    <motion.div
                        animate={{ y: [-5, 5, -5] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className={`absolute -bottom-20 xl:-bottom-40 hidden xl:block ${
                            isRTL ? "right-16 xl:right-32" : "left-16 xl:left-32"
                        }`}
                    >
                        <Image
                            src={isRTL ? '/ar/ps_card_1.svg' : '/en/ps_card_1.svg'}
                            alt={isRTL ? "بطاقة عرض إضافية لمحطات الطباعة" : "Additional printing stations card"}
                            width={500}
                            height={500}
                            className="w-[250px] xl:w-[500px] h-auto"
                        />
                    </motion.div>
                </motion.div>
            </div>
            <div className="w-full h-full flex flex-col xl:flex-row items-center gap-8 xl:gap-20 mt-16 xl:mt-[200px]">
                <motion.div
                    ref={prePrintedBadgesLeftRef}
                    initial={{ opacity: 0, x: isRTL ? 100 : -100 }}
                    animate={
                        prePrintedBadgesLeftInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: isRTL ? 100 : -100 }
                    }
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full xl:w-1/2 flex justify-center order-2 xl:order-1"
                >
                    <Image
                        src={isRTL ? '/ar/ppb_card.svg' : '/en/ppb_card.svg'}
                        alt={isRTL ? "بطاقة عرض الشارات المطبوعة مسبقاً" : "Pre-printed badges feature card"}
                        width={1200}
                        height={1200}
                        className="w-full max-w-md xl:max-w-none h-auto"
                    />
                </motion.div>
                <motion.div
                    ref={prePrintedBadgesRightRef}
                    initial={{ opacity: 0, x: isRTL ? -100 : 100 }}
                    animate={
                        prePrintedBadgesRightInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: isRTL ? -100 : 100 }
                    }
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-3 xl:gap-5 w-full xl:w-1/2 order-1 xl:order-2"
                >
                    <h2 className={`text-2xl xl:text-4xl font-bold ${
                        isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                    }`}>
                        {prePrintedBadgesTranslations.title}
                    </h2>
                    <p className={`text-base xl:text-lg ${
                        isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                    }`}>
                        {prePrintedBadgesTranslations.description}
                    </p>
                </motion.div>
            </div>
            <div className="w-full h-full flex flex-col xl:flex-row gap-8 xl:gap-20 items-center mt-16 xl:mt-[200px]">
                <motion.div
                    ref={guestJourneyLeftRef}
                    initial={{ opacity: 0, x: isRTL ? 100 : -100 }}
                    animate={
                        guestJourneyLeftInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: isRTL ? 100 : -100 }
                    }
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-3 xl:gap-5 w-full xl:w-1/2"
                >
                    <h2 className={`text-2xl xl:text-4xl font-bold ${
                        isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                    }`}>
                        {guestJourneyPlanningTranslations.title}
                    </h2>
                    <p className={`text-base xl:text-lg ${
                        isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                    }`}>
                        {guestJourneyPlanningTranslations.description}
                    </p>
                </motion.div>
                <motion.div
                    ref={guestJourneyRightRef}
                    initial={{ opacity: 0, x: isRTL ? -100 : 100 }}
                    animate={
                        guestJourneyRightInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: isRTL ? -100 : 100 }
                    }
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full xl:w-1/2 flex justify-center"
                >
                    <Image
                        src='/jn_card.svg'
                        alt={isRTL ? "بطاقة عرض تخطيط رحلة الضيف" : "Guest journey planning feature card"}
                        width={1200}
                        height={1200}
                        className="w-full max-w-md xl:max-w-none h-auto"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default HayakServiceClient;

