import NotesHero from "../../Elements/Notes/NotesHero"
import SampleNotes from "../../Elements/Notes/NotesPdf"
import LayoutEl from "../../Shared/LayoutEl"



const Notes=()=>{
    const display=(
        <>
          <LayoutEl>
              <NotesHero/>
              <SampleNotes/>
          </LayoutEl>
        </>
    )
    return display
}
export default Notes