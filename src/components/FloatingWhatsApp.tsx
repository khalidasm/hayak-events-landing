"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface FloatingWhatsAppButtonProps {
  phoneNumber?: string;
  accountName?: string;
  locale?: "en" | "ar";
}

const FloatingWhatsAppButton = ({
  phoneNumber = "966543956530", // Default placeholder - replace with actual WhatsApp number
  accountName = "Hayak Events",
  locale = "en",
}: FloatingWhatsAppButtonProps) => {
  const isRTL = locale === "ar";
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const chatRef = useRef<HTMLDivElement>(null);

  // Format phone number for WhatsApp (remove any non-digit characters except +)
  const formatPhoneNumber = (phone: string) => {
    // Remove all non-digit characters
    const digits = phone.replace(/\D/g, "");
    return digits;
  };

  const handleWhatsAppClick = () => {
    const formattedPhone = formatPhoneNumber(phoneNumber);
    const defaultMessage = locale === "ar" 
      ? "مرحباً! كيف يمكنني مساعدتك؟" 
      : "Hello! How can I help you?";
    const messageText = message.trim() || defaultMessage;
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
    setMessage("");
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Close chat when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        const button = (event.target as HTMLElement).closest('button');
        if (!button?.classList.contains('floating-whatsapp-button-custom')) {
          setIsOpen(false);
        }
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Also close on Escape key
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setIsOpen(false);
        }
      };
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isOpen]);

  return (
    <>
      {/* Chat Box - Separate from button to avoid affecting its position */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatRef}
            className={`fixed z-[1000] w-80 rounded-2xl bg-white shadow-2xl ${
              isRTL ? "rounded-br-sm" : "rounded-bl-sm"
            }`}
            style={{
              bottom: "100px",
              ...(isRTL 
                ? { left: "20px", right: "auto" }
                : { right: "20px", left: "auto" }
              ),
              transformOrigin: isRTL ? "bottom left" : "bottom right",
            }}
            initial={{ 
              opacity: 0, 
              scale: 0.8, 
              y: 20,
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.8, 
              y: 20,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
          >
          {/* Arrow pointing to button */}
          <div
            className="absolute bottom-0 h-0 w-0"
            style={{
              [isRTL ? "left" : "right"]: "24px",
              borderLeft: isRTL ? "10px solid transparent" : "none",
              borderRight: !isRTL ? "10px solid transparent" : "none",
              borderTop: "10px solid white",
              transform: "translateY(100%)",
              filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))",
            }}
          />
          {/* Chat Header */}
          <div className="flex items-center gap-3 rounded-t-2xl bg-[#4F2396] p-4">
            <div className="flex h-12 w-12 items-center justify-center">
              <Image
                src="/logo_white.svg"
                alt="Hayak Events"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
            </div>
            <div className="flex-1 text-white">
              <h3 className="font-semibold">{accountName}</h3>
              <p className="text-xs opacity-90">
                {locale === "ar" ? "متصل الآن" : "Online"}
              </p>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:opacity-70"
              aria-label={locale === "ar" ? "إغلاق" : "Close"}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 5L5 15M5 5L15 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Chat Message */}
          <div className="p-4">
            <p className="mb-4 text-sm text-gray-700">
              {locale === "ar"
                ? "مرحباً! كيف يمكننا مساعدتك؟"
                : "Hello! How can we help you?"}
            </p>

            {/* Message Input */}
            <div className="mb-3">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={
                  locale === "ar" ? "اكتب رسالتك..." : "Type your message..."
                }
                className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-[#4F2396] focus:outline-none focus:ring-2 focus:ring-[#4F2396]/20 resize-none"
                rows={3}
                dir={isRTL ? "rtl" : "ltr"}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleWhatsAppClick();
                  }
                }}
              />
            </div>

            {/* Send Button */}
            <Button
              onClick={handleWhatsAppClick}
              className="w-full rounded-lg bg-[#4F2396] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#4F2396]/90"
              disabled={!message.trim()}
            >
              {locale === "ar" ? "إرسال" : "Send"}
            </Button>
          </div>
        </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button - Separate container to maintain fixed position */}
      <div
        className="fixed bottom-5 z-[1000]"
        style={{
          ...(isRTL 
            ? { left: "20px", right: "auto" }
            : { right: "20px", left: "auto" }
          ),
        }}
      >
        {/* Pulsing ring effect */}
        <span
          className="absolute inset-0 rounded-full bg-[#4F2396] pointer-events-none pulse-ring-smooth"
          style={{ 
            width: "60px", 
            height: "60px",
            zIndex: 0,
          }}
        />
        <button
          onClick={toggleChat}
          className="floating-whatsapp-button-custom relative p-4 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#4F2396] shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          aria-label={locale === "ar" ? "فتح الدردشة" : "Open chat"}
        >
          <Image
            src="/message_icon.svg"
            width={60}
            height={60}
            className="h-full w-full object-contain relative z-10"
            alt="Message"
            unoptimized={true}
          />
        </button>
      </div>
    </>
  );
};

export default FloatingWhatsAppButton;
