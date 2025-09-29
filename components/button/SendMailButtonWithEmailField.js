
import Link from 'next/link'
import React, { useState } from 'react'
import Ripples from 'react-ripples'

function SendMailButtonWithEmailField({ loading, setLoading }) {
  return (
    <div>
      <div className={`xs-mt-1 sm-mt-1`}>
        {
          loading ? <Ripples>
            <button type="submit" className={`w-96 btn-primary text-white py-4 rounded-2xl font-semibold text-lg`} disabled>
              <div className={`loader`}></div>Sending...</button>
          </Ripples> : <Ripples>
            <button type="submit" className={`w-96 btn-primary text-white py-4 rounded-2xl font-semibold text-lg`}>Let's Do This!</button>
          </Ripples>
        }
      </div>
    </div>
  )
}

export default SendMailButtonWithEmailField;