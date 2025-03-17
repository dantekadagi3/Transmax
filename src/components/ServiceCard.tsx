

interface ServiceProp{
icon:string;
title:string;
paragraph:string;
point1:string;
point2:string;
point3:string;
}

const Service:React.FC<ServiceProp>=({icon,title,paragraph,point1,point2,point3})=>{
    return (
    
        <div>
            <div>
                <img src={icon} alt="This is an iccon" />
            </div>
        <div>
            <h2>{title}</h2>
        </div>

        <div>
            <p>{paragraph}</p>
        </div>
      <div>
        <ul>
            <li>{point1}</li>
            <li>{point2}</li>
            <li>{point3}</li>
        </ul>
 </div>

        </div>
    );

};
export default Service;


