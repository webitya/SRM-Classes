
import FacilitiesHero from "../../Elements/Facilities/FacilitiesHero"
import FacilitiesHighlights from "../../Elements/Facilities/FacilitiesHighLights"
import KeyFeatures from "../../Elements/Facilities/FacilitiesKey"
import FacilitiesOverview from "../../Elements/Facilities/FacilitiesOverview"
import LayoutEl from "../../Shared/LayoutEl"



const Facilities=()=>{
    const display=(
        <>
           <LayoutEl>
             <FacilitiesHero/>
             <FacilitiesOverview/>
             {/* <FacilitiesHighlights/> */}
             <KeyFeatures/>
             
           </LayoutEl>
        </>
    )
    return display
}
export default Facilities