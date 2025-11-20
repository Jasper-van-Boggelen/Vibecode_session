import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import FeedbackForm from './components/FeedbackForm'
import Results from './components/Results'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [feedbacks, setFeedbacks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchFeedbacks()
  }, [])

  const fetchFeedbacks = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('feedback')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setFeedbacks(data || [])
    } catch (error) {
      console.error('Error fetching feedbacks:', error)
    } finally {
      setLoading(false)
    }
  }

  const addFeedback = async (newFeedback) => {
    try {
      const { data, error } = await supabase
        .from('feedback')
        .insert([newFeedback])
        .select()

      if (error) throw error
      setFeedbacks([data[0], ...feedbacks])
    } catch (error) {
      console.error('Error adding feedback:', error)
      alert('Error submitting feedback. Please try again.')
    }
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Vibecoding Presentation Feedback</h1>

      <div className="row">
        <div className="col-md-6">
          <FeedbackForm onSubmit={addFeedback} />
        </div>
        <div className="col-md-6">
          <Results feedbacks={feedbacks} loading={loading} />
        </div>
      </div>
    </div>
  )
}

export default App