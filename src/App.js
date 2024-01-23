import "./App.css";
import Navbar from "./Navbar";
import { SectionsContainer, Section, Header, Footer } from "react-fullpage";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";

let options = {
    activeClass: "active", // the class that is appended to the sections links
    anchors: ["Landing", "AboutMe", "Skills", "Projects", "Experience"], // the anchors for each sections
    arrowNavigation: true, // use arrow keys
    delay: 1000, // the scroll animation speed
    navigation: true, // use dots navigatio
    scrollBar: false, // use the browser default scrollbar
    sectionClassName: "Section", // the section class name
    sectionPaddingTop: "70px", // the section top padding
    sectionPaddingBottom: "0", // the section bottom padding
    verticalAlign: false, // align the content of each section vertical
};

function App() {
    return (
        <div className="App">
            <Header>
                <Navbar />
            </Header>
            <SectionsContainer {...options}>
                <Section>
                    <Section1 />
                </Section>
                <Section>
                    <Section2 />
                </Section>
                <Section>
                    <Section3 />
                </Section>
                <Section>
                    <Section4 />
                </Section>
                <Section>
                    <Section5 />
                </Section>
            </SectionsContainer>
        </div>
    );
}

export default App;
