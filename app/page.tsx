import NearSection from "./components/NearSection";
import StartSection from "./components/StartSection";
import ApartmentSection from "./components/ApartmentSection";
import LookSection from "./components/LookSection";
import VideoSection from "./components/VideoSection";
import MapSection from "@/app/components/MapSection";
import QASection from "@/app/components/QASection";

export default function Home() {
    return (
        <main>
            <StartSection/>
            <NearSection/>
            <ApartmentSection/>
            <LookSection/>
            <VideoSection/>
            <MapSection/>
            <QASection/>
        </main>
    );
}
