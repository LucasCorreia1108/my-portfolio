
import NavBar from "../../components/navbar/NavBar"
import { About } from "./sections/about/Abount"
import { Hero } from "./sections/hero/Hero"
import { Skills } from "./sections/skills/skills"

export const Home = () => {

    return (
        <>
            <NavBar />
            <Hero />
            <About />
            <Skills />
        </>
    )
}