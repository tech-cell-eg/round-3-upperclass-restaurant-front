import Sidebar from "../components/Sidebar";
import ContentClassDetail from "../components/ContentClassDetail";
import { useParams } from "react-router-dom";
import useFetchClassDetails from "../hooks/useFetchClassDetails";
import defaultImage from "../assets/images/classes/1.jpeg";

const ClassDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { classDetails, loading } = useFetchClassDetails(Number(id));

  return (
    <div className="grid grid-cols-1 h-screen md:grid-cols-2">
      <Sidebar
        title={loading ? "Class" : classDetails?.title || "Class"}
        subtitle={
          loading ? "Loading..." : classDetails?.sub_title || "Cooking Class"
        }
        background={classDetails?.image || defaultImage}
      />
      <ContentClassDetail />
    </div>
  );
};

export default ClassDetail;
