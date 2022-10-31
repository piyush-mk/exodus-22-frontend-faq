import React, { useState} from 'react'
import data from './data';
import SingleQuestion from './Question';
import "./faq.css";

function Faq() {
  const [questions, setQuestions] = useState(data)
  return (
  <div class="all-container">
    <div class="titleasvg">
      <div class="title">
        <p>
          Frequently Asked Questions
        </p>
      </div>
      <div class="faq-content">
        <img class="bg-vector" src="/assets/Group7.svg"></img>

      </div>
    </div>
    <div class='info'>
        {
          questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />
          })
        }
    </div>
  </div>
  )
}

export default Faq