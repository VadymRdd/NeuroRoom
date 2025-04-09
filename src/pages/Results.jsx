import Header from "../components/Header";
import Footer from "../components/Footer";
import ResultCard from "../components/ResultCard";

export default function Results() {
    return (
        <div>
            <Header />
            <main className="p-6">
                <ResultCard />
            </main>
            <Footer />
        </div>
    );
}