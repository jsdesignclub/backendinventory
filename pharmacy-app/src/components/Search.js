import { json } from "body-parser"
import {getPost} from "./api"
import {useState, useEffect} from "react"

function SearchMedicine(){
    const [posts, setPost]= useState([])
    const [searchResult, setSearchResult]=useState([])

    useState(() => {
        getPost().then(json=>{
            setPost(json)
            return json
        }).then(json=>{
            setSearchResult(json)
        })
    },[])
}