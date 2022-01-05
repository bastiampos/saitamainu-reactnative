import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'

export const useSign = ({flag}) => {

    const [user, setUser] = useState({})
    const [response, setresponse] = useState({})


    
    return [user, response]
}