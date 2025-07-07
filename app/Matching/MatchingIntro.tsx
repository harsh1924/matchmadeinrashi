import { Button } from "@/components/ui/button";

export default function MatchingIntro() {
    return (
        <section className="pt-10">
            <h2 className="text-3xl font-bold text-center mb-6 text-[#ce9a48]">Matching Rules & Logic</h2>

            <div className="bg-[#fefae0] rounded-2xl shadow p-6 space-y-4">
                <p className="text-lg leading-relaxed">
                    In this section, we’ll explore how horoscope matching is done using the traditional methods of Vedic astrology.
                </p>
                <p className="text-lg leading-relaxed">
                    You’ll learn how to compare birth charts using <strong>Ashta Koota</strong> points and how to interpret the compatibility between two individuals.
                </p>
                <p className="text-lg leading-relaxed">
                    We’ll check compatibility step-by-step using multiple rules based on both partners’ birth details.
                </p>
                <div className="flex justify-end px-16 pb-6">
                    <Button
                        variant="red"
                        asChild
                    >
                        <a href="/kootas">📚 Click here to check all Kootas
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
