interface footerProps{
  title: string;
  content1:string;
  content2:string;
  content3:string;
  content4:string;
  content5:string;

}

const Footercomp:React.FC<footerProps> = ({title,content1,content2,content3,content4,content5}) => {
  return (
   
      
      <div>
       <h2 className="text-[var(--blue-color)] text-xl font-bold">{title}</h2>
       <ul className="text-gray-500 ">
          <li>{content1}</li>
          <li>{content2}</li>
          <li>{content3}</li>
          <li>{content4}</li>
          <li>{content5}</li>
       </ul>
      </div>


   
  )
}

export default Footercomp;
