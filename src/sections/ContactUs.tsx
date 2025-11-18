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
        <div id="contact" className="w-full relative px-[var(--spacing-section-px-mobile)] md:px-[var(--spacing-section-px-tablet)] lg:px-[var(--spacing-section-px-small-laptop)] xl:px-[var(--spacing-section-px-xl)] 2xl:px-[var(--spacing-section-px-2xl)] py-[var(--spacing-section-py-mobile)] md:py-[var(--spacing-section-py-tablet)] lg:py-[var(--spacing-section-py-small-laptop)] xl:py-[var(--spacing-section-py-xl)] 2xl:py-[var(--spacing-section-py-2xl)] flex flex-col gap-[var(--spacing-gap-4xl)]">
            {/* Server-rendered section for SEO */}
            <div 
                data-server-contact-us
                className="flex flex-col xl:flex-row items-center xl:items-center justify-between gap-[var(--spacing-gap-3xl)] xl:gap-[var(--spacing-gap-5xl)]"
            >
                <div className={`flex-1 w-full ${
                    isRTL ? "xl:order-2" : ""
                }`}>
                    <h2 className={`text-2xl xl:text-4xl font-semibold mb-[var(--spacing-gap-sm)] xl:mb-[var(--spacing-gap-md)] ${
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
