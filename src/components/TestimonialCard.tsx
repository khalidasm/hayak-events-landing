import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";

interface TestimonialCardProps {
  testimonial: string;
  name: string;
  title: string;
  avatarSrc?: string;
  avatarFallback?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  name,
  title,
  avatarSrc = "https://github.com/shadcn.png",
  avatarFallback = "CN",
  className = "",
}) => {
  return (
    <div className={`bg-[#FBF6FF] rounded-[20px] w-full p-10 pt-16 relative flex flex-col items-start gap-5 ${className}`}>
      <p className="text-[#241044] leading-relaxed">
        {testimonial}
      </p>
      <div className="flex flex-col items-start gap-1">
        <span className="text-lg font-bold text-[#4F2396]">
          {name}
        </span>
        <span className="text-[#B3B6B9]">
          {title}
        </span>
      </div>
      <Avatar className="absolute -top-16 left-10 w-28 h-28 border-4 border-[#4F2396]">
        <AvatarImage src={avatarSrc} />
        <AvatarFallback>{avatarFallback}</AvatarFallback>
      </Avatar>
      <Image 
        src="/qoute.svg" 
        alt="quote_icon" 
        width={100} 
        height={100} 
        className="absolute bottom-5 right-5" 
      />
    </div>
  );
};

export default TestimonialCard;
