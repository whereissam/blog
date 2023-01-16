import { useQuery, useMutation } from '@apollo/client'
import Spinner from '../../components/Spinner'
import { FaEdit, FaPlusCircle } from 'react-icons/fa'
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { ADD_ARTICLE } from '../../components/mutation/articleMutation';
import { GET_POST } from '../../components/queries/postListQueries';

import {
  GET_PROFILE_By_Address
} from "../../components/queries/profileQueries"

export default function Work () {

  const [title, setTitle] = useState(undefined);
  const [body, setBody] = useState(undefined);
  const [status, setStatus] = useState('draft')
  const [clientId, setClientId] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const address = useSelector(state => state.provider.connection)
  const { refetch, loading, error, data } = useQuery(GET_PROFILE_By_Address
    , { variables: { address } })

  // console.log(address, data)
  console.log(data)

  const [addArticle] = useMutation(ADD_ARTICLE, {
    variables: { title, body, clientId, status, clientAddress },
    update (cache, { data: { addArticle } }) {
      const { articles } = cache.readQuery({ query: GET_POST });
      cache.writeQuery({
        query: GET_POST,
        data: { projects: [...articles, addArticle] },
      });
    },
  });

  useEffect(() => {
    if (loading === false && data) {
      setClientAddress(clientSearchByAddress.address)
      setClientId(clientSearchByAddress.id)
    }
  }, [loading, data])

  if (loading)
    return (
      <div>
        <Spinner />
      </div>
    )
  if (error) return <p>Something Went Wrong</p>

  if (address) {
    refetch()
  }

  if (data && data !== undefined && data.clientSearchByAddress !== null) {

    var { clientSearchByAddress } = data
    var { project } = clientSearchByAddress
  }

  console.log(project)

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(title, body, status)
    if (!title || !body || !status) {
      return alert("Please fill out all fields");
    }


    console.log(clientId, clientAddress)

    addArticle(title, body, status, clientId, clientAddress);
  };

  const postList = data && project?.map(({ id, title, body }) => {
    return (
      <ul className='list-group mt-2' key={id}>
        <li key={id} className="collection-item list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1"><Link to={`/posts/${id}`}>{title}</Link></h5>
            <small>3 days ago</small>
          </div>
          <div className="d-flex w-100 justify-content-between mt-2">
            <p>{body}</p>
            <a className='btn btn-light' href={`/profile/${clientSearchByAddress.address}/article/${id}`}>
              <FaEdit></FaEdit>
            </a>
          </div>
        </li>
      </ul>
    );
  });

  const Form =
    (
      <>
        <button className='btn btn-primary mt-3' data-bs-toggle="modal" data-bs-target="#addArticleModal">
          <FaPlusCircle />
        </button>

        <div className="modal fade" id="addArticleModal" tabIndex="-1" aria-labelledby="addArticleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content p-3">
              <div className="modal-header">
                <h5 className="modal-title" id="addArticleModalLabel">Add Post</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                {/* <div className="mb-3 d-none">
                        <textarea
                          className="form-control "
                          id="clientId"
                          defaultValue={clientSearchByAddress.id}
                        ></textarea>
                        <textarea
                          className="form-control "
                          id="clientAddress"
                          defaultValue={clientSearchByAddress.address}
                        ></textarea>
                      </div> */}
                <div className="mb-3">
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
                <div className="modal-footer">
                  {/* <button type="button" className="btn btn-secondary" >Close</button> */}
                  <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </>
    )
  console.log(address, project)

  return (
    <>
      {
        address && project.length > 0 ?
          <><div>{postList}</div> {Form} </>
          :
          <>
            <h2 className='mt-4'>You don't have post yet</h2>
            <div>
              {Form}



            </div>

          </>
      }

    </>
  )
}
