import { useEffect, useState } from "react";
import ArticleList from "./ArticleList";

const Home = () =>{

    const[articleList, setArticleList] = useState(null);

    useEffect(()=>{
        fetch("https://storage.googleapis.com/aller-structure-task/test_data.json")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            console.log(data);
            setArticleList(data);
        })
    }, []);

    return(
        <div >
            {articleList && <ArticleList rows={articleList[0]}/>}
        </div>
    );
}

export default Home;
