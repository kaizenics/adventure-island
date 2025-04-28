import { FeatureSteps } from "@/components/ui/feature-section"
import waterSlides from "@/public/water-slides.png"

const features = [
  { 
    step: 'Experience 1', 
    title: 'Water Adventures',
    content: 'Dive into excitement with our world-class water slides and wave pools, perfect for thrill-seekers of all ages.', 
    image: waterSlides.src,
  },
  { 
    step: 'Experience 2',
    title: 'Luxury Accommodations',
    content: 'Unwind in our premium suites featuring stunning ocean views and modern amenities for the ultimate comfort.',
    image: waterSlides.src,
  },
  { 
    step: 'Experience 3',
    title: 'Dining Excellence',
    content: 'Savor exceptional cuisine at our restaurants, offering fresh local ingredients and international flavors.',
    image: waterSlides.src,
  },
]

export function FeatureStepsSection() {
  return (
      <FeatureSteps 
        features={features}
        title="Discover Our Resort"
        autoPlayInterval={4000}
        imageHeight="h-[500px]"
      />
  )
}