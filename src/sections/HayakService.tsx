import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const HayakService = () => {
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
        <div className="w-full flex flex-col items-center py-20 px-60 mx-auto gap-10">
            <h1 className="text-4xl font-bold">
                Hayak <span className="text-[#4F2396]">Service</span>
            </h1>
            <div className="flex flex-col items-center">
                <div className="w-full h-full flex gap-20 items-center mt-[50px]">
                    <motion.div
                        ref={guestMgmtLeftRef}
                        initial={{ opacity: 0, x: -100 }}
                        animate={
                            guestMgmtLeftInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -100 }
                        }
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col gap-5 w-full"
                    >
                        <h1 className="text-4xl font-bold">
                            Guest{" "}
                            <span className="text-[#4F2396]">Management</span>
                        </h1>
                        <p className="text-lg">
                            Effortlessly manage guest lists and guest
                            information with Hayak. Add, edit, and delete
                            guests, send invitations and tickets via email or
                            WhatsApp, and monitor guest statistics. Guests
                            receive unique QR codes for entry, and automated
                            reminders and feedback messages enhance the
                            experience.
                        </p>
                    </motion.div>
                    <motion.div
                        ref={guestMgmtRightRef}
                        initial={{ opacity: 0, x: 100 }}
                        animate={
                            guestMgmtRightInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: 100 }
                        }
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        <Image
                            src="/guest_management.svg"
                            alt="guest_management"
                            width={1200}
                            height={1200}
                        />
                        <motion.div
                            animate={{ y: [-5, 5, -5] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute -bottom-50 -left-16"
                        >
                            <Image
                                src="/gs_card_1.svg"
                                alt="gs_card_1"
                                width={400}
                                height={400}
                            />
                        </motion.div>
                        <motion.div
                            animate={{ y: [-5, 5, -5] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute -bottom-30 -right-18"
                        >
                            <Image
                                src="/gs_card_2.svg"
                                alt="gs_card_2"
                                width={400}
                                height={400}
                            />
                        </motion.div>
                    </motion.div>
                </div>
                <div className="w-full h-full flex items-center gap-20 mt-[200px]">
                    <motion.div
                        ref={ticketSystemLeftRef}
                        initial={{ opacity: 0, x: -100 }}
                        animate={
                            ticketSystemLeftInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -100 }
                        }
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        <Image
                            src="/ts_card.svg"
                            alt="ts_card"
                            width={1200}
                            height={1200}
                        />
                        <motion.div
                            animate={{ y: [-5, 5, -5] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute -bottom-30 -left-12"
                        >
                            <Image
                                src="/ts_card_2.svg"
                                alt="ts_card_2"
                                width={300}
                                height={300}
                            />
                        </motion.div>
                        <motion.div
                            animate={{ y: [-5, 5, -5] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute -bottom-40 -right-14"
                        >
                            <Image
                                src="/ts_card_1.svg"
                                alt="ts_card_1"
                                width={300}
                                height={300}
                            />
                        </motion.div>
                    </motion.div>
                    <motion.div
                        ref={ticketSystemRightRef}
                        initial={{ opacity: 0, x: 100 }}
                        animate={
                            ticketSystemRightInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: 100 }
                        }
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col gap-5 w-full"
                    >
                        <h1 className="text-4xl font-bold">
                            Tickets{" "}
                            <span className="text-[#4F2396]">System</span>
                        </h1>
                        <p className="text-lg">
                            Experience the Hayak Ticket Marketplace, where you
                            can seamlessly sell event tickets online, manage
                            ticket details, set event days, and define various
                            ticket types (VIP, General, etc.) with specified
                            capacities and allowed zones for each ticket type.
                            Easily manage ticket prices, discounts, and
                            availability, with tickets automatically delivered
                            via email or WhatsApp for convenience.
                        </p>
                    </motion.div>
                </div>
                <div className="w-full h-full flex gap-20 items-center mt-[200px]">
                    <motion.div
                        ref={printingStationsLeftRef}
                        initial={{ opacity: 0, x: -100 }}
                        animate={
                            printingStationsLeftInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -100 }
                        }
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col gap-5 w-full"
                    >
                        <h1 className="text-4xl font-bold">
                            Printing{" "}
                            <span className="text-[#4F2396]">Stations</span>
                        </h1>
                        <p className="text-lg">
                            Simplify guest check-ins with quick and efficient
                            printing stations. Instantly print guest badges,
                            invitations, or access passes with just one click.
                            Ensure smooth entry at your event by reducing wait
                            times and keeping the reception organized.
                        </p>
                    </motion.div>
                    <motion.div
                        ref={printingStationsRightRef}
                        initial={{ opacity: 0, x: 100 }}
                        animate={
                            printingStationsRightInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: 100 }
                        }
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        <Image
                            src="/ps_card.svg"
                            alt="ps_card"
                            width={1200}
                            height={1200}
                        />
                        <motion.div
                            animate={{ y: [-5, 5, -5] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute -bottom-40 left-32"
                        >
                            <Image
                                src="/ps_card_1.svg"
                                alt="ps_card_1"
                                width={500}
                                height={500}
                            />
                        </motion.div>
                    </motion.div>
                </div>
                <div className="w-full h-full flex items-center gap-20 mt-[200px]">
                    <motion.div
                        ref={prePrintedBadgesLeftRef}
                        initial={{ opacity: 0, x: -100 }}
                        animate={
                            prePrintedBadgesLeftInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -100 }
                        }
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        <Image
                            src="/ppb_card.svg"
                            alt="ppb_card"
                            width={1200}
                            height={1200}
                        />
                    </motion.div>
                    <motion.div
                        ref={prePrintedBadgesRightRef}
                        initial={{ opacity: 0, x: 100 }}
                        animate={
                            prePrintedBadgesRightInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: 100 }
                        }
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col gap-5 w-full"
                    >
                        <h1 className="text-4xl font-bold">
                            Pre-printed Badges, <br />
                            <span className="text-[#4F2396]">
                                Bracelets & Lanyards
                            </span>
                        </h1>
                        <p className="text-lg">
                            Prepare your event in advance with custom
                            pre-printed badges, bracelets, and lanyards. Save
                            time at the reception by handing guests their
                            ready-to-use passes, designed with your branding and
                            tailored access levels. Ensure a professional,
                            seamless, and hassle-free entry experience for
                            everyone.
                        </p>
                    </motion.div>
                </div>
                <div className="w-full h-full flex gap-20 items-center mt-[200px]">
                    <motion.div
                        ref={guestJourneyLeftRef}
                        initial={{ opacity: 0, x: -100 }}
                        animate={
                            guestJourneyLeftInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -100 }
                        }
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col gap-5 w-full"
                    >
                        <h1 className="text-4xl font-bold">
                            Guest{" "}
                            <span className="text-[#4F2396]">
                                Journey Planning
                            </span>
                        </h1>
                        <p className="text-lg">
                            Easily plan and manage your event's guest flow by
                            setting up custom access zones, pre-designed badges,
                            and smart check-in options. Give every guest a
                            smooth, professional entry experience from the
                            moment they arrive.
                        </p>
                    </motion.div>
                    <motion.div
                        ref={guestJourneyRightRef}
                        initial={{ opacity: 0, x: 100 }}
                        animate={
                            guestJourneyRightInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: 100 }
                        }
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        <Image
                            src="/jn_card.svg"
                            alt="jn_card"
                            width={1200}
                            height={1200}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HayakService;
