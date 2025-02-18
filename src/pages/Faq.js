import React, { useState } from 'react'
import data from './data';
import SingleQuestion from './Question';
import "./faq.css";

function Faq() {
  const [questions, setQuestions] = useState(data)
  return (
    <div className='faq-page'>
      <div class="row" id="main-row">
        <div className="column" id="title-col">
          <div className="title">
            <p>Frequently Asked Questions</p>
          </div>
          <div className="faq-content">
            <img className="bg-vector" src="/assets/Group7.svg"></img>
          </div>
        </div>
        <div className="column" id="info-col">
          {
            questions.map((question) => {
              return <SingleQuestion key={question.id} {...question} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Faq