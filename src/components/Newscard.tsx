

interface NewsCardProps {
  image: string;
  date: string;
  title: string;
  shortNews: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ image, date, title, shortNews }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden p-4 w-80">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg" />
      <p className="text-sm mt-2" style={{ color: "var(--blue-color)" }}>
        {date}
      </p>
      <h3 className="text-black font-bold text-lg mt-1">{title}</h3>
      <p className="text-gray-500 text-sm mt-2">{shortNews}</p>
    </div>
  );
};

export default NewsCard;
