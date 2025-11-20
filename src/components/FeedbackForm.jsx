import { useState } from 'react'

function FeedbackForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    rating: '',
    favorite_part: '',
    improvements: '',
    comments: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.rating) {
      alert('Please select a rating')
      return
    }

    onSubmit({
      rating: parseInt(formData.rating),
      favorite_part: formData.favorite_part,
      improvements: formData.improvements,
      comments: formData.comments
    })

    // Reset form
    setFormData({
      rating: '',
      favorite_part: '',
      improvements: '',
      comments: ''
    })
  }

  return (
    <div className="card">
      <div className="card-header">
        <h3>Share Your Feedback</h3>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="rating" className="form-label">
              How would you rate the presentation on a scale of 1-5? *
            </label>
            <select
              className="form-select"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              required
            >
              <option value="">Select rating</option>
              <option value="1">1 - Poor</option>
              <option value="2">2 - Below Average</option>
              <option value="3">3 - Average</option>
              <option value="4">4 - Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="favorite_part" className="form-label">
              What was your favorite part of the presentation?
            </label>
            <textarea
              className="form-control"
              id="favorite_part"
              name="favorite_part"
              rows="3"
              value={formData.favorite_part}
              onChange={handleChange}
              placeholder="Tell us what you enjoyed most..."
            />
          </div>

          <div className="mb-3">
            <label htmlFor="improvements" className="form-label">
              What could be improved?
            </label>
            <textarea
              className="form-control"
              id="improvements"
              name="improvements"
              rows="3"
              value={formData.improvements}
              onChange={handleChange}
              placeholder="Any suggestions for improvement..."
            />
          </div>

          <div className="mb-3">
            <label htmlFor="comments" className="form-label">
              Any additional comments?
            </label>
            <textarea
              className="form-control"
              id="comments"
              name="comments"
              rows="3"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Additional thoughts..."
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  )
}

export default FeedbackForm