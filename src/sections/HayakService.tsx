import React from "react";
import Image from "next/image";
import HayakServiceClient from "./HayakServiceClient";

const translations = {
    en: {
        title: <><span className="text-[#4F2396]">Hayak</span> Services</>,
        guestManagement: {
            title: (
                <>
                    Guest{" "}
                    <span className="text-[#4F2396]">Management</span>
                </>
            ),
            description: (
                <>
                    Effortlessly manage guest lists and guest
                    information with Hayak. Add, edit, and delete
                    guests, send invitations and tickets via email or
                    WhatsApp, and monitor guest statistics. Guests
                    receive unique QR codes for entry, and automated
                    reminders and feedback messages enhance the
                    experience.
                </>
            ),
        },
        ticketSystem: {
            title: (
                <>
                    Tickets{" "}
                    <span className="text-[#4F2396]">System</span>
                </>
            ),
            description: (
                <>
                    Experience the Hayak Ticket Marketplace, where you
                    can seamlessly sell event tickets online, manage
                    ticket details, set event days, and define various
                    ticket types (VIP, General, etc.) with specified
                    capacities and allowed zones for each ticket type.
                    Easily manage ticket prices, discounts, and
                    availability, with tickets automatically delivered
                    via email or WhatsApp for convenience.
                </>
            ),
        },
        printingStations: {
            title: (
                <>
                    Printing{" "}
                    <span className="text-[#4F2396]">Stations</span>
                </>
            ),
            description: (
                <>
                    Simplify guest check-ins with quick and efficient
                    printing stations. Instantly print guest badges,
                    invitations, or access passes with just one click.
                    Ensure smooth entry at your event by reducing wait
                    times and keeping the reception organized.
                </>
            ),
        },
        prePrintedBadges: {
            title: (
                <>
                    Pre-printed Badges, <br />
                    <span className="text-[#4F2396]">
                        Bracelets & Lanyards
                    </span>
                </>
            ),
            description: (
                <>
                    Prepare your event in advance with custom
                    pre-printed badges, bracelets, and lanyards. Save
                    time at the reception by handing guests their
                    ready-to-use passes, designed with your branding and
                    tailored access levels. Ensure a professional,
                    seamless, and hassle-free entry experience for
                    everyone.
                </>
            ),
        },
        guestJourneyPlanning: {
            title: (
                <>
                    Guest{" "}
                    <span className="text-[#4F2396]">
                        Journey Planning
                    </span>
                </>
            ),
            description: (
                <>
                    Easily plan and manage your event's guest flow by
                    setting up custom access zones, pre-designed badges,
                    and smart check-in options. Give every guest a
                    smooth, professional entry experience from the
                    moment they arrive.
                </>
            ),
        },
    },
    ar: {
        title: <>خدمات <span className="text-[#4F2396]">حيّاك</span></>,
        guestManagement: {
            title: (
                <>
                    إدارة <span className="text-[#4F2396]">الضيوف</span> 
                </>
            ),
            description: (
                <>
                    قم بإدارة قوائم الضيوف ومعلوماتهم بسهولة تامة مع حياك.
                    أضف، عدل، أو احذف الضيوف، وأرسل الدعوات والتذاكر عبر
                    البريد الإلكتروني أو تطبيق واتساب، وتابع إحصاءات الحضور.
                    يحصل الضيوف على رموز QR فريدة للدخول، كما تُسهم
                    التذكيرات والرسائل الآلية لجمع الملاحظات في تحسين التجربة.
                </>
            ),
        },
        ticketSystem: {
            title: (
                <>
                   نظام <span className="text-[#4F2396]">التذاكر</span> 
                </>
            ),
            description: (
                <>
                    استمتع بتجربة سوق تذاكر حياك، حيث يمكنك بيع تذاكر الفعاليات عبر الإنترنت بكل سلاسة، وإدارة تفاصيل التذاكر، وتحديد أيام الفعالية، وإنشاء أنواع مختلفة من التذاكر (مثل VIP أو العامة وغيرها) مع تحديد السعة المسموح بها والمناطق المخصصة لكل نوع. يمكنك كذلك إدارة أسعار التذاكر والخصومات وتوفرها بسهولة، مع إرسال التذاكر تلقائيًا عبر البريد الإلكتروني أو واتساب لتوفير أقصى درجات الراحة.
                </>
            ),
        },
        printingStations: {
            title: (
                <>
                    محطات <span className="text-[#4F2396]">الطباعة</span> 
                </>
            ),
            description: (
                <>
                    بسط عملية تسجيل حضور الضيوف من خلال محطات الطباعة السريعة والفعّالة. اطبع بطاقات الضيوف أو الدعوات أو تصاريح الدخول فورًا بضغطة زر واحدة. احرص على انسيابية دخول الضيوف إلى فعاليتك من خلال تقليل فترات الانتظار والحفاظ على تنظيم منطقة الاستقبال.
                </>
            ),
        },
        prePrintedBadges: {
            title: (
                <>
                   البطاقات <span className="text-[#4F2396]"> والأساور والحبال مسبقة الطباعة</span>                </>
            ),
            description: (
                <>
                    استعد لفعاليتك مسبقًا من خلال بطاقات، وأساور، وحبال تعليق مطبوعة مسبقًا ومخصصة حسب رغبتك. وفّر الوقت عند الاستقبال بتسليم الضيوف تصاريحهم الجاهزة للاستخدام، والمصممة بهوية علامتك التجارية ومستويات الدخول المناسبة لهم. احرص على تقديم تجربة دخول احترافية وسلسة وخالية من أي متاعب للجميع.
                </>
            ),
        },
        guestJourneyPlanning: {
            title: (
                <>
                    تخطيط <span className="text-[#4F2396]">رحلة الضيوف</span> 
                </>
            ),
            description: (
                <>
                    خطط وأدر تدفق ضيوف فعاليتك بسهولة من خلال إعداد مناطق دخول مخصصة، وبطاقات مُصممة مسبقًا، وخيارات تسجيل دخول ذكية . امنح كل ضيف تجربة دخول سلسة واحترافية منذ لحظة وصوله.
                </>
            ),
        },
    },
};

interface HayakServiceProps {
    locale: 'en' | 'ar';
}

const HayakService = ({ locale = 'en' }: HayakServiceProps) => {
    const t = translations[locale];
    const isRTL = locale === 'ar';

    return (
        <div id="services" className="w-full flex flex-col items-center py-24 xl:py-48 px-4 xl:px-60 mx-auto gap-6 xl:gap-10
        bg-[url('/hollow-bg.svg')] bg-cover bg-center bg-no-repeat
        ">
            <h2 className="text-2xl xl:text-4xl font-bold text-center">
                {t.title}
            </h2>
            <div className="flex flex-col items-center w-full">
                {/* Guest Management Section - Server-rendered for SEO */}
                <div 
                    data-server-guest-mgmt
                    className="w-full h-full flex flex-col xl:flex-row gap-8 xl:gap-20 items-center mt-12 xl:mt-12"
                >
                    <div
                        className={`flex flex-col gap-3 xl:gap-5 w-full xl:w-1/2 ${
                            isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                        }`}
                    >
                        <h2 className={`text-2xl xl:text-4xl font-bold ${
                            isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                        }`}>
                            {t.guestManagement.title}
                        </h2>
                        <p className={`text-base xl:text-lg ${
                            isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                        }`}>
                            {t.guestManagement.description}
                        </p>
                    </div>
                    <div className="relative w-full xl:w-1/2 flex justify-center">
                        <Image
                            src={isRTL ? '/ar/guest_management.webp' : '/en/guest_management.webp'}
                            alt={isRTL ? "بطاقة عرض إدارة الضيوف" : "Guest management feature card"}
                            width={1200}
                            height={1200}
                            className="w-full max-w-md xl:max-w-none h-auto"
                            loading="lazy"
                            quality={85}
                        />
                    </div>
                </div>

                {/* Tickets System Section - Server-rendered for SEO */}
                <div 
                    data-server-ticket-system
                    className="w-full h-full flex flex-col xl:flex-row items-center gap-8 xl:gap-20 mt-24 xl:mt-48"
                >
                    <div className="relative w-full xl:w-1/2 flex justify-center order-2 xl:order-1">
                        <Image
                            src={isRTL ? '/ar/ts_card.webp' : '/en/ts_card.webp'}
                            alt={isRTL ? "بطاقة عرض نظام التذاكر" : "Ticket system feature card"}
                            width={1200}
                            height={1200}
                            className="w-full max-w-md xl:max-w-none h-auto"
                            loading="lazy"
                            quality={85}
                        />
                    </div>
                    <div
                        className={`flex flex-col gap-3 xl:gap-5 w-full xl:w-1/2 order-1 xl:order-2 ${
                            isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                        }`}
                    >
                        <h2 className={`text-2xl xl:text-4xl font-bold ${
                            isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                        }`}>
                            {t.ticketSystem.title}
                        </h2>
                        <p className={`text-base xl:text-lg ${
                            isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                        }`}>
                            {t.ticketSystem.description}
                        </p>
                    </div>
                </div>

                {/* Printing Stations Section - Server-rendered for SEO */}
                <div 
                    data-server-printing-stations
                    className="w-full h-full flex flex-col xl:flex-row gap-8 xl:gap-20 items-center mt-24 xl:mt-48"
                >
                    <div
                        className={`flex flex-col gap-3 xl:gap-5 w-full xl:w-1/2 ${
                            isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                        }`}
                    >
                        <h2 className={`text-2xl xl:text-4xl font-bold ${
                            isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                        }`}>
                            {t.printingStations.title}
                        </h2>
                        <p className={`text-base xl:text-lg ${
                            isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                        }`}>
                            {t.printingStations.description}
                        </p>
                    </div>
                    <div className="relative w-full xl:w-1/2 flex justify-center">
                        <Image
                            src={isRTL ? '/ar/ps_card.webp' : '/en/ps_card.webp'}
                            alt={isRTL ? "بطاقة عرض محطات الطباعة" : "Printing stations feature card"}
                            width={1200}
                            height={1200}
                            className="w-full max-w-md xl:max-w-none h-auto"
                            loading="lazy"
                            quality={85}
                        />
                    </div>
                </div>

                {/* Pre-printed Badges Section - Server-rendered for SEO */}
                <div 
                    data-server-pre-printed-badges
                    className="w-full h-full flex flex-col xl:flex-row items-center gap-8 xl:gap-20 mt-24 xl:mt-48"
                >
                    <div className="relative w-full xl:w-1/2 flex justify-center order-2 xl:order-1">
                        <Image
                            src={isRTL ? '/ar/ppb_card.webp' : '/en/ppb_card.webp'}
                            alt={isRTL ? "بطاقة عرض الشارات المطبوعة مسبقاً" : "Pre-printed badges feature card"}
                            width={1200}
                            height={1200}
                            className="w-full max-w-md xl:max-w-none h-auto"
                            loading="lazy"
                            quality={85}
                        />
                    </div>
                    <div
                        className={`flex flex-col gap-3 xl:gap-5 w-full xl:w-1/2 order-1 xl:order-2 ${
                            isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                        }`}
                    >
                        <h2 className={`text-2xl xl:text-4xl font-bold ${
                            isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                        }`}>
                            {t.prePrintedBadges.title}
                        </h2>
                        <p className={`text-base xl:text-lg ${
                            isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                        }`}>
                            {t.prePrintedBadges.description}
                        </p>
                    </div>
                </div>

                {/* Guest Journey Planning Section - Server-rendered for SEO */}
                <div 
                    data-server-guest-journey
                    className="w-full h-full flex flex-col xl:flex-row gap-8 xl:gap-20 items-center mt-24 xl:mt-48"
                >
                    <div
                        className={`flex flex-col gap-3 xl:gap-5 w-full xl:w-1/2 ${
                            isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                        }`}
                    >
                        <h2 className={`text-2xl xl:text-4xl font-bold ${
                            isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                        }`}>
                            {t.guestJourneyPlanning.title}
                        </h2>
                        <p className={`text-base xl:text-lg ${
                            isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                        }`}>
                            {t.guestJourneyPlanning.description}
                        </p>
                    </div>
                    <div className="relative w-full xl:w-1/2 flex justify-center">
                        <Image
                            src={isRTL ? '/ar/jn_card.webp' : '/en/jn_card.webp'}
                            alt={isRTL ? "بطاقة عرض تخطيط رحلة الضيف" : "Guest journey planning feature card"}
                            width={1200}
                            height={1200}
                            className="w-full max-w-md xl:max-w-none h-auto"
                            loading="lazy"
                            quality={85}
                        />
                    </div>
                </div>

                {/* Client component for animations */}
                <HayakServiceClient 
                    locale={locale} 
                    guestManagementTranslations={{
                        title: t.guestManagement.title,
                        description: t.guestManagement.description,
                    }}
                    ticketSystemTranslations={{
                        title: t.ticketSystem.title,
                        description: t.ticketSystem.description,
                    }}
                    printingStationsTranslations={{
                        title: t.printingStations.title,
                        description: t.printingStations.description,
                    }}
                    prePrintedBadgesTranslations={{
                        title: t.prePrintedBadges.title,
                        description: t.prePrintedBadges.description,
                    }}
                    guestJourneyPlanningTranslations={{
                        title: t.guestJourneyPlanning.title,
                        description: t.guestJourneyPlanning.description,
                    }}
                />
            </div>
        </div>
    );
};

export default HayakService;
