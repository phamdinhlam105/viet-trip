"use client"

import { getAllPost } from "@/components/api/post-api";
import { Post } from "@/components/models/app-models";
import NewsList from "@/components/news-page/news-list";
import TopBanner from "@/components/site-page/top-banner";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function NewsPage() {
    const [data,setData] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        const fetchData = async()=>{
            const result = await getAllPost();
            if(result){
                setData(result);
                setIsLoading(false);
            }
            else
                toast.error("Không thể tải dữ liệu")
        }
    })

    return <div className="md:pt-28 pt-20">
        <TopBanner breadcrumbs={[{ title: 'Tin tức', slug: '/tin-tuc' }]} />
        <NewsList newsList={data} />
    </div>
}