export interface Feedback {
    _id?: string
    name: string

    message: string
    category?: string
    priority?: string
    sentiment?: string

    team?: string

    createdAt?: string

}



export interface feedbackProps {
  data: Feedback
}
export type Filters = {
  name: string
  category: string
  priority: string
}
export type Props = {
  reload: () => Promise<void>
}