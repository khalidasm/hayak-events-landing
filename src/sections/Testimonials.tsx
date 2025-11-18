import React from "react";
import TestimonialsClient from "./TestimonialsClient";

type TranslationType = {
    title: string | React.ReactNode;
    testimonials: Array<{
        id: string;
        testimonial: string;
        name: string;
        title: string;
    }>;
};

const translations: Record<'en' | 'ar', TranslationType> = {
    en: {
        title: "Testimonials",
        testimonials: [
            {
                id: "1",
                testimonial: "Thank you all so much for everything, everyone was talking about how great & smooth this graduation was. We appreciate all the hard and effort. Thank you.",
                name: "Mohamed Ali",
                title: "Professor at Dar Al-Hekma University",
            },
            {
                id: "2",
                testimonial: "The event management was absolutely flawless. Hayak Events made our corporate conference a huge success. Highly recommended for any professional event.",
                name: "Sarah Ahmed",
                title: "Marketing Director at TechCorp",
            },
            {
                id: "3",
                testimonial: "Outstanding service and attention to detail. Our wedding was perfect thanks to the Hayak team. They handled everything seamlessly from start to finish.",
                name: "Ahmed Hassan",
                title: "Software Engineer",
            },
            {
                id: "4",
                testimonial: "Professional, creative, and reliable. Hayak Events transformed our product launch into an unforgettable experience. The team's expertise is unmatched.",
                name: "Fatima Al-Zahra",
                title: "CEO at StartupHub",
            },
        ],
    },
    ar: {
        title: (
            <>
                آراء <span className="text-[#4F2396]">العملاء</span> 
            </>
        ),
        testimonials: [
            {
                id: "1",
                testimonial: "شكراً جزيلاً لكم جميعاً على كل شيء، الجميع كان يتحدث عن مدى روعة وسلاسة حفل التخرج هذا. نحن نقدر كل الجهد والعمل الشاق. شكراً لكم.",
                name: "محمد علي",
                title: "أستاذ في جامعة دار الحكمة",
            },
            {
                id: "2",
                testimonial: "كانت إدارة الفعالية مثالية تماماً. جعلت حياك إيفنتس مؤتمرنا المؤسسي نجاحاً كبيراً. موصى به بشدة لأي فعالية احترافية.",
                name: "سارة أحمد",
                title: "مديرة التسويق في تيك كورب",
            },
            {
                id: "3",
                testimonial: "خدمة متميزة واهتمام بالتفاصيل. كان حفل زفافنا مثالياً بفضل فريق حياك. تعاملوا مع كل شيء بسلاسة من البداية إلى النهاية.",
                name: "أحمد حسن",
                title: "مهندس برمجيات",
            },
            {
                id: "4",
                testimonial: "احترافية وإبداعية وموثوقة. حولت حياك إيفنتس إطلاق منتجنا إلى تجربة لا تُنسى. خبرة الفريق لا مثيل لها.",
                name: "فاطمة الزهراء",
                title: "الرئيس التنفيذي في ستارت أب هاب",
            },
        ],
    },
};

interface TestimonialsProps {
    locale: 'en' | 'ar';
}

const Testimonials = ({ locale = 'en' }: TestimonialsProps) => {
    const t = translations[locale];
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://hayaksa.com';

    // Review/Rating structured data for SEO
    const reviewsStructuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Hayak Events",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": t.testimonials.length.toString()
        },
        "review": t.testimonials.map((testimonial) => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": testimonial.name,
                "jobTitle": testimonial.title
            },
            "reviewBody": testimonial.testimonial,
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5"
            }
        }))
    };

    return (
        <section className="w-full relative px-4 md:px-6 lg:px-12 xl:px-60 py-24 md:py-32 lg:py-36 xl:py-48 flex flex-col gap-24 lg:gap-32 xl:gap-40">
            {/* Review/Rating structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsStructuredData) }}
            />
            {/* Server-rendered section for SEO */}
            <div data-server-testimonials>
                <h2 className="text-2xl xl:text-4xl font-semibold text-center">
                    {t.title}
                </h2>
                <div className="flex flex-col xl:flex-row gap-10">
                    {t.testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="flex-1">
                            <div className="bg-[#FBF6FF] rounded-[20px] w-full p-10 pt-16 relative flex flex-col items-start gap-5">
                                <p className="text-[#241044] leading-relaxed">{testimonial.testimonial}</p>
                                <div className="flex flex-col items-start gap-1">
                                    <span className="text-lg font-bold text-[#4F2396]">{testimonial.name}</span>
                                    <span className="text-[#B3B6B9]">{testimonial.title}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Client component for animations */}
            <TestimonialsClient 
                locale={locale}
                translations={t}
            />
        </section>
    );
};

export default Testimonials;
