import React from "react";
import ContactUsClient from "./ContactUsClient";

const translations = {
    en: {
        title: (
            <>
                Need More <span className="text-[#4F2396]">Help?</span>
            </>
        ),
        description: (
            <>
                Our team is here to make your event experience smooth
                and hassle-free. Whether you have a question about
                tickets, need support with booking, or want tips to get
                the most out of your event, we're always ready to help.
            </>
        ),
    },
    ar: {
        title: (
            <>
                هل تحتاج إلى مزيد <span className="text-[#4F2396]">من المساعدة؟</span>
            </>
        ),
        description: (
            <>
                فريقنا هنا ليجعل تجربتك في تنظيم الفعاليات سلسة وخالية من المتاعب. سواء كان لديك سؤال بخصوص التذاكر، أو تحتاج إلى دعم في الحجز، أو ترغب في الحصول على نصائح لتحقيق أقصى استفادة من فعاليتك، فنحن دائمًا على استعداد للمساعدة.
            </>
        ),
    },
};

interface ContactUsProps {
    locale: 'en' | 'ar';
}

const ContactUs = ({ locale = 'en' }: ContactUsProps) => {
    const isRTL = locale === 'ar';
    const t = translations[locale];

    return (
        <div id="contact" className="w-full relative px-4 xl:px-60 py-24 xl:py-48 flex flex-col gap-12">
            {/* Server-rendered section for SEO */}
            <div 
                data-server-contact-us
                className="flex flex-col xl:flex-row items-center xl:items-center justify-between gap-10 xl:gap-20"
            >
                <div className={`flex-1 w-full ${
                    isRTL ? "xl:order-2" : ""
                }`}>
                    <h2 className={`text-2xl xl:text-4xl font-bold mb-3 xl:mb-4 ${
                        isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                    }`}>
                        {t.title}
                    </h2>
                    <p className={`text-base xl:text-xl text-[#241044] ${
                        isRTL ? "text-center xl:text-right" : "text-center xl:text-left"
                    }`}>
                        {t.description}
                    </p>
                </div>
                <div className={`flex-1 w-full ${
                    isRTL ? "xl:order-1" : ""
                }`}>
                    {/* Form will be rendered by client component */}
                </div>
            </div>

            {/* Client component for animations and form */}
            <ContactUsClient 
                locale={locale}
                translations={t}
            />
        </div>
    );
};

export default ContactUs;
