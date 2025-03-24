

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
    
        <div className="h-[320px]  border-b-4 border-[var(--orange--color)] rounded-lg bg-[var(--blue-color)] text-white p-6 w-[300px] items-right flex flex-col ">
            <div>
                <img src={icon} alt="This is an iccon" />
            </div>
        <div>
            <h2 className="font-bold text-2xl mb-0.5 mt-0.5">{title}</h2>
        </div>

        <div>
            <p className="mb-2.5">{paragraph}</p>
        </div>
      <div>
        <ul  className="list-disc list-inside marker:text-[var(--orange--color)]">
            <li>{point1}</li>
            <li>{point2}</li>
            <li>{point3}</li>
        </ul>
 </div>

        </div>
    );

};
export default Service;


