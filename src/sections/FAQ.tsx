import React from 'react'
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = () => {
  const faqData = [
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
  ]

  return (
    <motion.div 
      className="w-full relative px-4 xl:px-60 py-16 xl:py-32 flex flex-col gap-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
        <motion.h1 
          className="text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
            FAQ<span className="text-[#4F2396]">s</span>
        </motion.h1>
        
        <motion.div 
          className="bg-[#F8F6FA] rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={`bg-[#EFEBF5] border-0 ${index === 0 ? 'rounded-t-lg' : index === faqData.length - 1 ? 'rounded-b-lg' : ''}`}
              >
                <AccordionTrigger className="px-6 py-4 text-[#4A3A6B] font-semibold text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 p-4 text-[#241044] bg-[#F8F6FA] rounded-b-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
    </motion.div>
  )
}

export default FAQ