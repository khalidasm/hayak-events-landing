"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactFormSchema, type ContactFormData } from "@/lib/contact-form-schema"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      countryCode: "+966",
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Here you would typically send the data to your API
      console.log("Form data:", data)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Reset form after successful submission
      reset()
      alert("Message sent successfully!")
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Failed to send message. Please try again.")
    }
  }

  return (
    <div className="w-full">
      <div className="bg-white shadow-lg rounded-[24px] p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-[#241044] mb-1">
              Full Name *
            </label>
            <Input
              id="fullName"
              placeholder="FirstName"
              {...register("fullName")}
              className={`px-[10px] py-[20px] rounded-[10px] ${errors.fullName ? "border-red-500" : ""}`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-[#241044] mb-1">
              Phone Number
            </label>
            <div className="flex gap-2">
              <Select
                value={watch("countryCode")}
                onValueChange={(value) => setValue("countryCode", value)}
              >
                <SelectTrigger className="w-20 px-[10px] py-[20px] rounded-[10px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+966">+966</SelectItem>
                  <SelectItem value="+1">+1</SelectItem>
                  <SelectItem value="+44">+44</SelectItem>
                  <SelectItem value="+971">+971</SelectItem>
                </SelectContent>
              </Select>
              <Input
                id="phoneNumber"
                placeholder="Phone number"
                {...register("phoneNumber")}
                className="flex-1 px-[10px] py-[20px] rounded-[10px]"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#241044] mb-1">
              Email Address *
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Email address"
              {...register("email")}
              className={`px-[10px] py-[20px] rounded-[10px] ${errors.email ? "border-red-500" : ""}`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-[#241044] mb-1">
              Subject *
            </label>
            <Input
              id="subject"
              placeholder="Subject of connect"
              {...register("subject")}
              className={`px-[10px] py-[20px] rounded-[10px] ${errors.subject ? "border-red-500" : ""}`}
            />
            {errors.subject && (
              <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#241044] mb-1">
              Message *
            </label>
            <Textarea
              id="message"
              placeholder="Message"
              rows={4}
              {...register("message")}
              className={`px-[10px] py-[20px] rounded-[10px] ${errors.message ? "border-red-500" : ""}`}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#4F2396] hover:bg-[#4F2396]/90 text-white"
            size={'lg'}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm

