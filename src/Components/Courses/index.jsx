
import CoursesWeOffer from "../../Elements/Courses/CourseOffers"
import CoursesHeroSection from "../../Elements/Courses/CoursesHero"
import KeyFeatures from "../../Elements/Courses/CoursesKey"
import WhyChooseUs from "../../Elements/Courses/CoursesWhy"
import LayoutEl from "../../Shared/LayoutEl"



const Courses=()=>{
    const display=(
        <>
          <LayoutEl>
              <CoursesHeroSection/>
              <WhyChooseUs/>
              <CoursesWeOffer/>
              <KeyFeatures/>
          </LayoutEl>
        </>
    )
    return display
}
export default Courses