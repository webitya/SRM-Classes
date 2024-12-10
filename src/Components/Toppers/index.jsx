import HeroSection from "../../Elements/Toppers/ToppersHero"
import ToppersSection from "../../Elements/Toppers/ToppersRank"
import WhyChooseUsSection from "../../Elements/Toppers/ToppersWhy"
import LayoutEl from "../../Shared/LayoutEl"


const Toppers=()=>{
    const display=(
        <>
             <LayoutEl>
                 <HeroSection/>
                 <ToppersSection/>
                 <WhyChooseUsSection/>
             </LayoutEl>
        </>
    )
    return display
}
export default Toppers