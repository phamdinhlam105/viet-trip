"use client"

import { useEffect, useState } from "react"
import { Post } from "../models/app-models"
import { getAllPost, getPostById } from "../api/post-api";
import { getRecentNews } from "@/lib/recent-news";

export default function NewsSideBar({currentId}:{currentId:string}) {
    const [othersNews, setOthersNews] = useState<Post[]>([])
    const [recentNews,setRecentNews] = useState<Post[]>([]);

    const fetchOthers = async ()=>{
        const result = await getAllPost();
        if(result)
            setOthersNews(result);
    }
    const fetchRecent = async ()=>{
        const recentIds=getRecentNews();
        const posts = await Promise.all(
            recentIds.map(id=>getPostById(id))
        );
        setRecentNews(posts);
    }
    useEffect(()=>{
        fetchOthers();
        fetchRecent();
    },[])

    useEffect(()=>{
        setOthersNews(othersNews.filter(p=>p.id!=currentId))
    },[currentId])


    return <div className="space-y-10 md:px-2 md:w-1/4">
        <div className="sticky top-30">
            <div className="flex flex-col space-y-2">
                <h2 className="text-xl font-bold">Tin tức mới</h2>
                <ul className="list-disc pl-6 space-y-2">
                    {othersNews.map(item => <li key={item.id}><a href={`/tin-tuc/${item.slug}`} className="hover:text-blue-600 hover:underline line-clamp-2"> {item.title}</a></li>)}
                </ul>

            </div>
            <div className="flex flex-col space-y-2">
                <h2 className="text-xl font-bold">Tin tức gần đây</h2>
                <ul className="list-disc pl-6 space-y-2">
                    {recentNews.map(item => <li key={item.id}><a href={`/tin-tuc/${item.slug}`} className="hover:text-blue-600 hover:underline line-clamp-2"> {item.title}</a></li>)}
                </ul>
            </div>
        </div>

    </div>
}