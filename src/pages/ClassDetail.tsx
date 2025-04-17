import Sidebar from "../components/Sidebar"
import image from "../assets/images/classes/1.jpeg"
import ContentClassDetail from "../components/ContentClassDetail"
const ClassDetail = () => {
  return (
        <div className="grid grid-cols-1 h-screen md:grid-cols-2 ">
            <Sidebar title="blog" subtitle="Give a gift" background={image} />
            <ContentClassDetail/>
        </div>
  )
}

export default ClassDetail