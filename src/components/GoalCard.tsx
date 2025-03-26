interface Goal {
    icon: string;
    num: string;
    title: string;
    content: string;
  }
  
  const GoalCard: React.FC<Goal> = ({ icon, num, title, content }) => {
    return (
      <div className="p-6 text-center w-[300px]">
        <img src={icon} alt={title} className="w-12 h-12 mx-auto mb-4" />
        <h3 className="text-3xl font-semibold text-[var(--blue-color)]">{num}</h3>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-2 text-center">{content}</p>
      </div>
    );
  };
  
  export default GoalCard;
  