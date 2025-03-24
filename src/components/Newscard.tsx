
interface NewsCard{
    image:string;
    title:string;
    description:string;
    date:string;
}
const Newscard :React.FC<NewsCard> = ({image,title,description,date}) => {
  return (
    <div>

      <div>
        <img src={image} alt="image here" />
      </div>
      {/**The date element */}
      <div>
        
      </div>
      {/**Text content */}
      <div>
         <div>
            <h2>{title}</h2>
         </div>

         <div>
            <p>{description}</p>
         </div>

      </div>

      <div>
        <h1>{date}</h1>
      </div>
      
    </div>
  )
}

export default Newscard
