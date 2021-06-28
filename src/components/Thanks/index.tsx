import React from 'react'

import { useRecoilValue } from 'recoil'
import { feedbackState } from '../../data/feedback.atom'
import { emojis } from '../../utils/emojis'

import './styles.css'

function Thanks() {
    const {feedback} = useRecoilValue(feedbackState)
    
    return (
        <div className="thanks">
            <h2>Thanks for your feedback!</h2>
            {
                feedback !== null && feedback >= 0 ? <img src={emojis[feedback]} alt="feedback emoji" />
                : null
            }
        </div>
    )
}

export default Thanks
