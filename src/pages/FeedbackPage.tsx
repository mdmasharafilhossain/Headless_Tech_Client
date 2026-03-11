/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import FeedbackModal from "../components/FeedbackModal"
import FeedbackCard from "../components/FeedbackCard"
import type { Feedback, Filters } from "../types"
import { BaseApi } from "../api/BaseApi"



export default function FeedbackPage() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
   const [loading, setLoading] = useState(false)

     const [filters, setFilters] = useState<Filters>({
      name: "",
      category: "",
      priority: ""

  })
  const loadData = async (): Promise<void> => {
      setLoading(true)

       try {
 
          const res = await BaseApi.get("/feedback", {
          params: {
              ...filters,
             page,
            limit: 6

        }
      })
      const responseData = res.data
        setFeedbacks(Array.isArray(responseData.data) ? responseData.data : [])
        setTotalPages(responseData.pagination?.totalPages || 1)

    }finally{
      setLoading(false)

    }

  }

  useEffect(() =>{
    const fetchData = async () => {
      await loadData()
    }
    fetchData()
  }, [page])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target
    setFilters({
      ...filters,
      [name]: value
    })

  }
  const handleSearch = (): void => {
    setPage(1)
    void loadData()

  }

  return (
    <div className="min-h-screen bg-orange-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">

             <div className="text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold text-orange-600 leading-tight">
                User Feedback <br />
                Intelligence System
              </h1>
          </div>
          <FeedbackModal reload={loadData} />
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
 
              <input
                name="name"
               placeholder="Search name"
               value={filters.name}
               onChange={handleChange}
               className="border border-orange-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <select
              name="category"
              value={filters.category}
              onChange={handleChange}
              className="border border-orange-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="">All Category</option>
              <option value="bug">Bug</option>
              <option value="feature">Feature</option>
              <option value="ui">UI</option>
              <option value="performance">Performance</option>

            </select>

            <select
               name="priority"
              value={filters.priority}
                onChange={handleChange}
              className="border border-orange-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
                 <option value="">All Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>

            </select>

            <button
              onClick={handleSearch}
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md px-4 py-2 transition"
            >
              Search
            </button>
          </div>
        </div>
        {loading ? (
          <div className="flex justify-center py-20">
              <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          </div>

        ):feedbacks.length === 0 ? (

          <div className="text-center py-16 bg-white rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold text-gray-600">
              No feedback found
            </h2>
            <p className="text-gray-400 mt-2">
              Try adjusting your filters or submit new feedback.
            </p>

          </div>
        ) :(
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">

              {feedbacks.map((feedback) => (
                <FeedbackCard key={feedback._id} data={feedback} />
              ))}
            </div>

            <div className="flex justify-center gap-3 mt-10">

              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="px-4 py-2 bg-orange-500 text-white rounded disabled:opacity-40"
              >
                Prev
              </button>

              <span className="px-4 py-2 font-medium text-gray-700">
                Page {page} / {totalPages}
              </span>

              <button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
                className="px-4 py-2 bg-orange-500 text-white rounded disabled:opacity-40"
              >
                Next
              </button>

            </div>
          </>
        )}

      </div>

    </div>

  )

}