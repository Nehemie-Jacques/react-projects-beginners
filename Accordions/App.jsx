import Accordion from "./Accordion";
import { accordionData } from "./utils/content";

function App() {
    return (
        <div>
            <div className="accordion">
                {accordionData.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
                ))}
            </div>
        </div>
    )
}

export default App;