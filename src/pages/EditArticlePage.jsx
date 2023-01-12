import { useQuery, useMutation } from '@apollo/client'
import { useParams, useNavigate } from 'react-router-dom'
import { GET_PERSONAL_POST } from '../components/queries/postListQueries'
import Spinner from '../components/Spinner'
import { useState, useEffect } from 'react'
import { UPDATE_ARTICLE } from '../components/mutation/articleMutation'


export default function EditArticlePage () {

  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_PERSONAL_POST, { variables: { id } });
  const [title, setTitle] = useState(undefined);
  const [body, setBody] = useState(undefined);
  const [status, setStatus] = useState(undefined)
  const navigate = useNavigate()

  const [updateArticle] = useMutation(UPDATE_ARTICLE, {
    variables: { id, title, body, status }
  })

  useEffect(() => {
    if (loading === false && data) {
      setTitle(data.project.title)
      setBody(data.project.body)
      setStatus(() => {
        switch (data.project.status) {
          case "In Progress":
            return "draft";
          case "Completed":
            return "completed";
          default:
            throw new Error(`Unknown status: ${data.project.status}`);
        }
      });
    }
  }, [loading, data])

  if (loading)
    return (
      <div>
        <Spinner />
      </div>
    )

  if (error) return <p>Something Went Wrong</p>

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title || !body || !status) {
      return alert("Please fill out all fields");
    }

    updateArticle(title, body, status);

    navigate(-1)
  };

  return (
    <>
      <div className="mt-5">
        <h3>Update Article</h3>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Status</label>
            <select
              id="status"
              className="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="draft">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}
