import { useNavigate, useParams } from "react-router-dom";
export default function CourseDetail() {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-full gap-9">
      <button
        className="bg-black text-white px-6 py-3 rounded cursor-pointer"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <h1 className="text-5xl font-semibold">
        {params.courseId}Course Details page
      </h1>
    </div>
  );
}
