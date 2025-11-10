import React from 'react';
import FAQClient from "./FAQClient";

const translations = {
    en: {
        title: (
            <>
                FAQ<span className="text-[#4F2396]">s</span>
            </>
        ),
        faqs: [
            {
                question: "What types of events can I manage using the Hayak Exhibition and Convention Platform?",
                answer: "You can manage a wide range of professional events, including conferences, summits, seminars, exhibitions, networking events, parties, product launches, and technology and innovation conferences."
            },
            {
                question: "How does Hayak help with tickets and invitations to conferences and exhibitions?",
                answer: "Hayak provides comprehensive ticket management solutions including digital ticket generation, QR code verification, attendee check-in systems, and automated invitation distribution to streamline your event registration process."
            },
            {
                question: "What features are available for verification at events?",
                answer: "Our platform offers advanced verification features including QR code scanning, ID verification, real-time attendee tracking, and secure access control to ensure only authorized participants can attend your events."
            },
            {
                question: "Can I customize the platform for my specific event needs?",
                answer: "Yes, Hayak offers extensive customization options including branded interfaces, custom registration forms, personalized communication templates, and flexible event workflows to match your unique requirements."
            },
            {
                question: "What kind of analytics and reporting does Hayak provide?",
                answer: "Hayak provides comprehensive analytics including attendee demographics, engagement metrics, real-time event statistics, post-event reports, and insights to help you measure success and improve future events."
            },
            {
                question: "How does Hayak handle large-scale events with thousands of attendees?",
                answer: "Our platform is built to handle enterprise-scale events with robust infrastructure, scalable architecture, and advanced load balancing to ensure smooth performance even with thousands of concurrent users."
            }
        ],
    },
    ar: {
        title: (
            <>
                <span className="text-[#4F2396]">الأسئلة</span> الشائعة
            </>
        ),
        faqs: [
            {
                question: "ما أنواع الفعاليات التي يمكنني إدارتها باستخدام منصة حياك للمعارض والمؤتمرات؟",
                answer: "يمكنك إدارة مجموعة واسعة من الفعاليات المهنية، بما في ذلك المؤتمرات والقمم والندوات والمعارض وفعاليات التواصل والحفلات وإطلاق المنتجات ومؤتمرات التكنولوجيا والابتكار."
            },
            {
                question: "كيف تساعد حياك في التذاكر والدعوات للمؤتمرات والمعارض؟",
                answer: "توفر حياك حلولاً شاملة لإدارة التذاكر بما في ذلك إنشاء التذاكر الرقمية والتحقق من رموز QR وأنظمة تسجيل الوصول للمشاركين والتوزيع الآلي للدعوات لتبسيط عملية تسجيل الفعاليات الخاصة بك."
            },
            {
                question: "ما الميزات المتاحة للتحقق في الفعاليات؟",
                answer: "تقدم منصتنا ميزات تحقق متقدمة بما في ذلك مسح رموز QR والتحقق من الهوية وتتبع المشاركين في الوقت الفعلي والتحكم الآمن في الوصول لضمان أن المشاركين المصرح لهم فقط يمكنهم حضور فعالياتك."
            },
            {
                question: "هل يمكنني تخصيص المنصة لاحتياجات فعاليتي المحددة؟",
                answer: "نعم، تقدم حياك خيارات تخصيص واسعة بما في ذلك واجهات العلامات التجارية ونماذج التسجيل المخصصة وقوالب الاتصال الشخصية وسير عمل الفعاليات المرنة لتتناسب مع متطلباتك الفريدة."
            },
            {
                question: "ما نوع التحليلات والتقارير التي توفرها حياك؟",
                answer: "توفر حياك تحليلات شاملة بما في ذلك التركيبة السكانية للمشاركين ومقاييس المشاركة وإحصائيات الفعاليات في الوقت الفعلي والتقارير بعد الفعالية والرؤى لمساعدتك على قياس النجاح وتحسين الفعاليات المستقبلية."
            },
            {
                question: "كيف تتعامل حياك مع الفعاليات واسعة النطاق مع آلاف المشاركين؟",
                answer: "تم بناء منصتنا للتعامل مع الفعاليات على نطاق المؤسسات مع بنية تحتية قوية وهندسة معمارية قابلة للتوسع وتوازن الأحمال المتقدم لضمان الأداء السلس حتى مع آلاف المستخدمين المتزامنين."
            }
        ],
    },
};

interface FAQProps {
    locale: 'en' | 'ar';
}

const FAQ = ({ locale = 'en' }: FAQProps) => {
    const isRTL = locale === 'ar';
    const t = translations[locale];

    return (
        <div id="faqs" className="w-full relative px-4 xl:px-60 py-16 xl:py-32 flex flex-col gap-5">
            {/* Server-rendered section for SEO */}
            <div data-server-faq>
                <h2 className="text-4xl font-bold mb-4 text-center">
                    {t.title}
                </h2>
                
                <div className="bg-[#F8F6FA] rounded-2xl">
                    <div className="w-full" dir={isRTL ? "rtl" : "ltr"}>
                        {t.faqs.map((faq, index) => (
                            <div 
                                key={index}
                                className={`bg-[#EFEBF5] border-0 ${
                                    index === 0 ? 'rounded-t-lg' : index === t.faqs.length - 1 ? 'rounded-b-lg' : ''
                                }`}
                            >
                                <div className="px-6 py-4 text-[#4A3A6B] font-semibold">
                                    {faq.question}
                                </div>
                                <div className="px-6 p-4 text-[#241044] bg-[#F8F6FA] rounded-b-lg">
                                    {faq.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Client component for animations */}
            <FAQClient 
                locale={locale}
                translations={t}
            />

            {/* SEO: Hidden text for search engines */}
            <div className="sr-only">
                <h2>{t.title}</h2>
                {t.faqs.map((faq, index) => (
                    <div key={index}>
                        <h3>{faq.question}</h3>
                        <p>{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
