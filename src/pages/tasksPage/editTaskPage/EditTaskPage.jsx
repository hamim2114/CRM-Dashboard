import React from 'react';
import './EditTaskPage.scss';
import { Link, useParams } from 'react-router-dom';
import Person2Icon from '@mui/icons-material/Person2';
import { leadData } from '../../../data/leadsData';

const EditTaskPage = () => {
  const { id } = useParams();

  const data = leadData.find((item) => {
    if (item.id === id) {
      return item
    }
  })
  
  return (
    <div className="edit-task">
      <div className="topbar">
        <div className="left">
          <span className='h1'>Edit Task</span>
        </div>
        <div className="right">
          <Link to='/tasks' className='outline-btn link'>Cancel</Link>
          <button className='outline-btn'>Save and New</button>
          <button className='filled-btn'>Save</button>
        </div>
      </div>
      <div className="img-upload">
        <span>Task Image</span>
        <label htmlFor="img-upload"><Person2Icon /></label>
        <input id='img-upload' hidden type="file" />
      </div>
      <div className="task-info">
        <span className='h5'>Task Information</span>
        <div className="task-info-container">
          <div className="left">
            <div className="left-wrapper">
              <div className="info-input">
                <span>Task Owner</span>
                <input className='info-field' type="text" value='Logged User' />
              </div>
              <div className="info-input">
                <span>Subject</span>
                <input className='info-field' type="text" value={data.task.subject} />
              </div>
              <div className="info-input">
                <span>Due Date</span>
                <input className='info-field' type="date" placeholder={data.task.dueDate} />
              </div>
              <div className="info-input">
                <select>
                  <option value="">Lead </option>
                  <option value="">Contact </option>
                </select>
                <input className='info-field' type="text" placeholder='' value={data.name} />
              </div>
              <div className="info-input">
                <select>
                  <option value="" disabled selected>Account </option>
                </select>
                <input className='info-field' disabled type="text" value={data.accountName} />
              </div>
              <div className="info-input">
                <span>Status</span>
                <select>
                  <option value="">Not Started </option>
                  <option value="">Deferred </option>
                  <option value="">In Progress </option>
                  <option value="">Complated </option>
                  <option value="">Waiting for input </option>
                </select>
              </div>
              <div className="info-input">
                <span>Priority</span>
                <select>
                  <option value="">High</option>
                  <option value="">Highest</option>
                  <option value="">Low</option>
                  <option value="">Lowest</option>
                  <option value="">Normal</option>
                </select>
              </div>
              
              <div className="info-input">
                <span>Description Information</span>
                <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }} className="info-input">
                  <textarea style={{ outline: 'none', border: '1px solid #C4C4C4' }} name="" id="" cols="40" rows="2"></textarea>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default EditTaskPage