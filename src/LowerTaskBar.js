import React from 'react'
import {FaRegComment} from 'react-icons/fa'
import {FaRetweet} from 'react-icons/fa'
import {IoIosHeartEmpty} from 'react-icons/io'
import {FiUpload} from 'react-icons/fi'
export default function LowerTaskBar() {
    return (
        <div className="lowerTaskBar">
            <ul>
                <FaRegComment className="lowerTaskBarComment"/>
                <FaRetweet/>
                <IoIosHeartEmpty/>
                <FiUpload/>
            </ul>
        </div>
    )
}