import LiveLectureHero from "../../Elements/LiveLectures/LiveHero"
import VideoSection from "../../Elements/LiveLectures/LiveVideo"
import WhyChooseLiveLectures from "../../Elements/LiveLectures/LiveWhy"
import LayoutEl from "../../Shared/LayoutEl"



const LiveLectures=()=>{
    const display=(
        <> 
        <LayoutEl>
             <LiveLectureHero/>
             <VideoSection/>
             <WhyChooseLiveLectures/>
             
        </LayoutEl>
        
        </>
    )
    return display
}
export default LiveLectures