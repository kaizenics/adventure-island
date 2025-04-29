import React from 'react'
import { Container } from "@/components/ui/container"
import { Carousel } from "@/components/ui/carousel";
import { SaleCoupon } from './sale-coupon';
import { FeatureStepsSection } from './featured';

// photos
import waterSlides from "@/public/water-slides.png"
import imgFeatured1 from "@/public/img1.jpg"
import imgFeatured2 from "@/public/img2.jpg"
import imgFeatured3 from "@/public/img3.jpg"
import imgFeatured4 from "@/public/img4.jpg"
import imgFeatured5 from "@/public/img6.webp"

export function About() {
    const slideData = [
        {
            title: "Water Slides",
            button: "See More",
            src: waterSlides.src,
        },
        {
            title: "Pools",
            button: "See More",
            src: imgFeatured1.src,
        },
        {
            title: "Neon Nights",
            button: "See More",
            src: imgFeatured2.src,
        },
        {
            title: "Cabanas & Loungers",
            button: "See More",
            src: imgFeatured3.src,
        },
        {
            title: "Dining",
            button: "See More",
            src: imgFeatured4.src,
        },
        {
            title: "Fun for Kids",
            button: "See More",
            src: imgFeatured5.src,
        },
    ];

    return (
        <>
            <section className="py-20 bg-white font-manrope">
                <Container variant={"fullMobileBreakpointPadded"}>
                   <FeatureStepsSection />
                    <div className="text-center mt-24">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl  font-bold mb-4">Explore the Park</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Adventure Island offers an unparalleled blend of luxury, adventure, and natural beauty, creating unforgettable experiences for our guests.
                        </p>
                    </div>

                    <div className="relative overflow-hidden w-full h-full py-20">
                        <Carousel slides={slideData} />
                    </div>
                </Container>
            </section>
            <SaleCoupon />
        </>
    )
}