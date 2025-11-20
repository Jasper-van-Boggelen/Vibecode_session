function Results({ feedbacks, loading }) {
  if (loading) {
    return (
      <div className="card">
        <div className="card-body text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading feedback...</p>
        </div>
      </div>
    )
  }

  const averageRating = feedbacks.length > 0
    ? (feedbacks.reduce((sum, fb) => sum + fb.rating, 0) / feedbacks.length).toFixed(1)
    : 0

  return (
    <div className="card">
      <div className="card-header">
        <h3>All Feedback ({feedbacks.length} submissions)</h3>
      </div>
      <div className="card-body">
        {feedbacks.length > 0 && (
          <div className="alert alert-info mb-3">
            <strong>Average Rating: {averageRating}/5</strong>
          </div>
        )}

        {feedbacks.length === 0 ? (
          <p className="text-muted">No feedback submitted yet.</p>
        ) : (
          <div className="feedback-list" style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {feedbacks.map((feedback) => (
              <div key={feedback.id} className="card mb-3">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h6 className="card-title mb-0">
                      Rating: {feedback.rating}/5 ⭐
                    </h6>
                    <small className="text-muted">
                      {new Date(feedback.created_at).toLocaleString()}
                    </small>
                  </div>

                  {feedback.favorite_part && (
                    <p><strong>Favorite part:</strong> {feedback.favorite_part}</p>
                  )}

                  {feedback.improvements && (
                    <p><strong>Improvements:</strong> {feedback.improvements}</p>
                  )}

                  {feedback.comments && (
                    <p><strong>Comments:</strong> {feedback.comments}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Results