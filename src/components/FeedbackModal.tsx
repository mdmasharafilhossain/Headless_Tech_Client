import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { BaseApi } from "../api/BaseApi"
import { feedbackSchema, type FeedbackInput } from "../schema/Feedback/feedbackSchema"
import Swal from "sweetalert2"


export default function FeedbackModal() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
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
    } catch{
         Swal.fire({
           icon: "error",
           title: "Submission Failed",
           text: "Something went wrong. Please try again.",
           confirmButtonColor: "#f97316",
      })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-center text-orange-600 mb-6">
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
              className="mt-1 w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
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
              className="mt-1 w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
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
              rows={4}
              placeholder="Write your feedback..."
              className="mt-1 w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-md transition"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  )
}