import OurFacilitiesSection from "../../Elements/HomeEl/HomeFacilities"
import FeaturesSection from "../../Elements/HomeEl/HomeFeat"
import HeroSection from "../../Elements/HomeEl/HomeHero"
import SuccessStoriesSection from "../../Elements/HomeEl/HomeTesti"
import CarouselEl from "../../Elements/HomeEl/HomeTopCar"
import UpcomingCoursesSection from "../../Elements/HomeEl/HomeUpcoming"
import WhyChooseUsSection from "../../Elements/HomeEl/HomeWhy"
import LayoutEl from "../../Shared/LayoutEl"



const Homepage=()=>{
    const display=(
        <>
           <LayoutEl>
             <CarouselEl/>
             {/* <HeroSection/> */}
             <FeaturesSection/>
             <UpcomingCoursesSection/>
             <WhyChooseUsSection/>
             <SuccessStoriesSection/>
             <OurFacilitiesSection/>
           </LayoutEl>
        </>
    )
    return display
}
export default Homepage