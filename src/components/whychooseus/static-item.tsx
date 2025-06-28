import { Star } from "lucide-react";

export default function StaticItem({title,content}:{title: string, content: string}) {

    return <div className="flex flex-col space-y-3 items-center">
        <Star size={80}/>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-center">
            {content}
        </p>
    </div>
}