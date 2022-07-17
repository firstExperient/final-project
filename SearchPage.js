import react from 'react'
import SearchNav from './SearchNav'
import {useEffect,useState} from 'react'
import PostHeader from './PostHeader';

export default function SearchPage(){
    const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch(``)
//       .then(response => response.json())
//       .then(response => {
//         setPosts(response);
//       });
//   }, []);
 const response=[
 {postId:1, postName:"רעיונות ליצירה בגואש",img:"https://kidsfuncraft.files.wordpress.com/2013/02/img_2193.jpg"},
 {postId:2, postName:"רעיונות ליצירה בפלסטלינה",img:"https://www.internet-mom.com/wp-content/uploads/2020/08/5340-gitit-eyal-%D7%92%D7%AA%D7%99%D7%AA-%D7%90%D7%99%D7%99%D7%9C.png"},
 {postId:3, postName:"רעיונות ליצירה בסבון",img:"http://4.bp.blogspot.com/_27T6_1lW--s/TFsIWbLBJHI/AAAAAAAACqQ/ggE259cGFG8/s576/%D7%9E%D7%A7%D7%9C-%D7%91%D7%95%D7%A2%D7%95%D7%AA-%D7%A1%D7%91%D7%95%D7%9F-bubble-stick-maker-how-to-tuturial.jpg"},
 {postId:4, postName:"רעיונות ליצירה באקריליק",img:"https://www.hagitaz.com/wp-content/uploads/2017/12/IMG_4253-1024x768.jpg"},
 {postId:5, postName:"רעיונות ליצירה באבנים",img:"https://4.bp.blogspot.com/-NAq7814_CsY/WMWYa1F9djI/AAAAAAAA8kk/FJOkmtnJPc8EqwlX0zWYoVVF0bKZT3WmACEw/s1600/kovrik-dlja-vannoj-svoimi-rukami_3.jpg"},
 {postId:6, postName:"רעיונות ליצירה באוריגמי",img:"https://cdn.shopify.com/s/files/1/0596/8006/3667/products/867_4_1200x.jpg?v=1643721216"},
 {postId:7, postName:"רעיונות ליצירה בעיסת נייר",img:"https://static.wixstatic.com/media/4e1270_faa7bbf245fe49dea6ccdd1b4006fe6f~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_90,usm_0.66_1.00_0.01/4e1270_faa7bbf245fe49dea6ccdd1b4006fe6f~mv2.jpg"},
 {postId:8, postName:"רעיונות ליצירה במים",img:"https://i.pinimg.com/736x/ad/79/00/ad79005a0a761ab5aba9a14310469c5e.jpg"},
 {postId:9, postName:"רעיונות ליצירה בחול",img:"http://www.yeldimdim.co.il/new/pic/avodabhol.jpg"},
 {postId:10, postName:"רעיונות ליצירה בעץ",img:"https://www.mkn.org.il/productImages2/305/2022/06/20/image1655718875.png"}]
   useEffect(() => {
    setPosts(response);
  }, []);
    return <div id="searchPage" dir='rtl'><SearchNav/><div className='feed' id="search-feed">{posts.map(post => (
        <PostHeader key={post.postId} postName={post.postName} img={post.img}> </PostHeader>
      ))}</div></div>
}