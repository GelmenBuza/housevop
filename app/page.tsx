import NearSection from "./components/NearSection";
import StartSection from "./components/StartSection";
import ApartmentSection from "./components/ApartmentSection";
import LookSection from "./components/LookSection";

export default function Home() {
    return (
        <main>
            <StartSection/>
            <NearSection/>
            <ApartmentSection/>
            <LookSection/>
        </main>
    );
}
