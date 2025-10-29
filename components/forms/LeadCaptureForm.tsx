"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadFormSchema, type LeadFormData, propertyTypeLabels, repairTypeOptions } from "@/lib/schemas/lead-form-schema";
import { useState } from "react";

export default function LeadCaptureForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      isUrgent: false,
      repairTypes: [],
    },
  });

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitMessage({
          type: "success",
          text: "Thank you! We'll contact you within 2 hours to discuss your inspection repairs.",
        });
        reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text: "Something went wrong. Please call us at (219) 344-8058 or try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card sticky top-4">
      <h2 className="text-2xl font-bold mb-2">Get Emergency Quote</h2>
      <p className="text-sm text-accent-gray-light mb-6">
        Response within 2 hours • Quote within 24 hours
      </p>

      {submitMessage && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            submitMessage.type === "success"
              ? "bg-accent-green/10 text-accent-green border border-accent-green"
              : "bg-accent-red/10 text-accent-red border border-accent-red"
          }`}
        >
          {submitMessage.text}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Property Address */}
        <div>
          <label htmlFor="propertyAddress" className="block text-sm font-semibold mb-2">
            Property Address <span className="text-accent-red">*</span>
          </label>
          <input
            {...register("propertyAddress")}
            type="text"
            id="propertyAddress"
            placeholder="123 Main St, City, State ZIP"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus-ring"
          />
          {errors.propertyAddress && (
            <p className="text-accent-red text-sm mt-1">{errors.propertyAddress.message}</p>
          )}
        </div>

        {/* Property Type */}
        <div>
          <label htmlFor="propertyType" className="block text-sm font-semibold mb-2">
            Property Type <span className="text-accent-red">*</span>
          </label>
          <select
            {...register("propertyType")}
            id="propertyType"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus-ring"
          >
            <option value="">Select property type</option>
            {Object.entries(propertyTypeLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          {errors.propertyType && (
            <p className="text-accent-red text-sm mt-1">{errors.propertyType.message}</p>
          )}
        </div>

        {/* Property Size */}
        <div>
          <label htmlFor="propertySize" className="block text-sm font-semibold mb-2">
            Number of Units <span className="text-accent-red">*</span>
          </label>
          <input
            {...register("propertySize")}
            type="number"
            id="propertySize"
            placeholder="e.g., 240"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus-ring"
          />
          {errors.propertySize && (
            <p className="text-accent-red text-sm mt-1">{errors.propertySize.message}</p>
          )}
        </div>

        {/* Inspection Deadline */}
        <div>
          <label htmlFor="inspectionDeadline" className="block text-sm font-semibold mb-2">
            Inspection Deadline <span className="text-accent-red">*</span>
          </label>
          <input
            {...register("inspectionDeadline")}
            type="date"
            id="inspectionDeadline"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus-ring"
          />
          {errors.inspectionDeadline && (
            <p className="text-accent-red text-sm mt-1">{errors.inspectionDeadline.message}</p>
          )}
        </div>

        {/* Repair Types */}
        <div>
          <label className="block text-sm font-semibold mb-3">
            Repair Types Needed <span className="text-accent-red">*</span>
          </label>
          <div className="space-y-2">
            {repairTypeOptions.map((option) => (
              <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                <input
                  {...register("repairTypes")}
                  type="checkbox"
                  value={option.value}
                  className="w-5 h-5 text-primary-yellow border-gray-300 rounded focus:ring-primary-yellow focus:ring-2"
                />
                <span className="text-sm">
                  <span className="mr-2">{option.icon}</span>
                  {option.label}
                </span>
              </label>
            ))}
          </div>
          {errors.repairTypes && (
            <p className="text-accent-red text-sm mt-2">{errors.repairTypes.message}</p>
          )}
        </div>

        {/* Current Situation */}
        <div>
          <label htmlFor="currentSituation" className="block text-sm font-semibold mb-2">
            Describe Your Inspection Violations <span className="text-accent-red">*</span>
          </label>
          <textarea
            {...register("currentSituation")}
            id="currentSituation"
            rows={4}
            placeholder="Tell us about the violations identified in your inspection report..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus-ring resize-none"
          />
          {errors.currentSituation && (
            <p className="text-accent-red text-sm mt-1">{errors.currentSituation.message}</p>
          )}
        </div>

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            Your Name <span className="text-accent-red">*</span>
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            placeholder="John Smith"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus-ring"
          />
          {errors.name && (
            <p className="text-accent-red text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Email <span className="text-accent-red">*</span>
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            placeholder="john@example.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus-ring"
          />
          {errors.email && (
            <p className="text-accent-red text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold mb-2">
            Phone <span className="text-accent-red">*</span>
          </label>
          <input
            {...register("phone")}
            type="tel"
            id="phone"
            placeholder="(219) 344-8058"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus-ring"
          />
          {errors.phone && (
            <p className="text-accent-red text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Urgent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              {...register("isUrgent")}
              type="checkbox"
              className="w-5 h-5 text-accent-red border-gray-300 rounded focus:ring-accent-red focus:ring-2 mt-0.5"
            />
            <span className="text-sm">
              <span className="font-semibold text-accent-red">This is urgent</span> - deadline approaching soon
            </span>
          </label>
        </div>

        {/* Privacy Note */}
        <p className="text-xs text-accent-gray-light">
          Your information is secure and private. By submitting, you consent to being contacted by
          JW ProBuild about your property inspection repairs.
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Get Emergency Quote Now"}
        </button>
      </form>
    </div>
  );
}
