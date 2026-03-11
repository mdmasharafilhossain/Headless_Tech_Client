import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { BaseApi } from "../api/BaseApi"
import { feedbackSchema, type FeedbackInput } from "../schema/Feedback/feedbackSchema"
import Swal from "sweetalert2"
import type { Props } from "../types"

export default function FeedbackModal({ reload }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FeedbackInput>({
    resolver: zodResolver(feedbackSchema),
  })

  const onSubmit = async (data: FeedbackInput) => {
    try {
       await BaseApi.post("/feedback", data)
       Swal.fire({
        icon: "success",
        title: "Feedback Submitted",
        text: "Thank you for your feedback!",
        confirmButtonColor: "#f97316",
      })
      reset()
      await reload()

    }catch{
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Something went wrong. Please try again.",
        confirmButtonColor: "#f97316",
      })

    }
  }
  return (
     <div className="w-full flex justify-center">
        <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-center text-orange-600 mb-6">
           Submit Feedback
         </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
               Name
            </label>
            <input
              {...register("name")}
              placeholder="Enter your name"
              disabled={isSubmitting}
              className="mt-1 w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:opacity-60"
                />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
                Email
            </label>

            <input
              {...register("Email")}
              placeholder="Enter your email"
              disabled={isSubmitting}
              className="mt-1 w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:opacity-60"
            />

            {errors.Email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.Email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Feedback
            </label>

             <textarea
              {...register("message")}
               rows={5}
                placeholder="Write your feedback..."
              disabled={isSubmitting}
              className="mt-1 w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none disabled:opacity-60"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 rounded-md transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit Feedback"}
          </button>

        </form>
      </div>
    </div>

  )
}