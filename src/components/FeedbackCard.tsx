import type { Feedback } from "../types"


interface Props {
  data: Feedback
}

export default function FeedbackCard({ data }: Props) {

  return (
    <div className="bg-white border border-orange-100 rounded-xl p-5 shadow-sm hover:shadow-md transition">
      <h2 className="text-lg font-semibold text-gray-800">
        {data?.name}
      </h2>
      <p className="mt-2 text-gray-600 leading-relaxed">
         {data?.message}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        <span className="text-xs font-medium bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
            {data?.category}

        </span>

        <span className="text-xs font-medium bg-red-100 text-red-600 px-3 py-1 rounded-full">

           {data?.priority}
        </span>


        <span className="text-xs font-medium bg-green-100 text-green-600 px-3 py-1 rounded-full">
          {data?.sentiment}
        </span>

        <span className="text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
          {data?.team}
        </span>

      </div>

    </div>

  )

}