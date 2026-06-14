import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function FeatureCard({
  title,
  description,
  icon,
  link,
}) {
  return (
    <Link to={link}>
      <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
        <div className="flex justify-between items-start mb-4">
          <div className="bg-blue-100 p-3 rounded-xl">
            {icon}
          </div>

          <ArrowRight size={18} />
        </div>

        <h3 className="font-bold text-lg text-slate-800 mb-2">
          {title}
        </h3>

        <p className="text-slate-500 text-sm">
          {description}
        </p>
      </div>
    </Link>
  );
}

export default FeatureCard;