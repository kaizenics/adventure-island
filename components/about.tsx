import React from 'react'
import { Container } from "@/components/ui/container"
import { Carousel } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card"
import { Palmtree, Utensils, Waves, Hotel } from 'lucide-react'
import waterSlides from "@/public/water-slides.png"
import { SaleCoupon } from './sale-coupon';
import { FeatureStepsSection } from './featured';

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
            src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Neon Nights",
            button: "See More",
            src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Cabanas & Loungers",
            button: "See More",
            src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Dining",
            button: "See More",
            src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Fun for Kids",
            button: "See More",
            src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    const features = [
        {
            icon: <Hotel className="h-8 w-8 mb-4" />,
            title: "Luxury Accommodations",
            description: "Experience ultimate comfort in our carefully designed suites with breathtaking ocean views."
        },
        {
            icon: <Waves className="h-8 w-8 mb-4" />,
            title: "Water Activities",
            description: "Dive into adventure with our range of water sports and activities for all skill levels."
        },
        {
            icon: <Utensils className="h-8 w-8 mb-4" />,
            title: "Fine Dining",
            description: "Savor exquisite cuisine prepared by world-class chefs using fresh local ingredients."
        },
        {
            icon: <Palmtree className="h-8 w-8 mb-4" />,
            title: "Private Beach",
            description: "Relax on our exclusive beach, where pristine sands meet crystal-clear waters."
        }
    ]

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