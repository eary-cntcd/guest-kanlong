"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  { src: "/assets/mission.jpg", alt: "Gallery image 1" },
  { src: "/assets/vision.jpg", alt: "Gallery image 2" },
  { src: "/assets/image2.jpg", alt: "Gallery image 3" },
  { src: "/assets/image1.jpg", alt: "Gallery image 4" },
  { src: "/assets/vision.jpg", alt: "Gallery image 5" },
  { src: "/assets/image2.jpg", alt: "Gallery image 6" },
  { src: "/assets/image1.jpg", alt: "Gallery image 7" },
  { src: "/assets/mission.jpg", alt: "Gallery image 8" },
];

export function CarouselAbout() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl">

        {/* Centered header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            About Kanlong
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            ​Kanlong Foundation is a non-stock, non-profit organization that responds 
            to the needs of Filipino differently-abled children.
          </p>
        </div>

        {/* Carousel */}
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-4">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="overflow-hidden rounded-2xl aspect-[4/3]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Centered buttons below carousel */}
          <div className="flex justify-center gap-3 mt-8">
            <CarouselPrevious className="static translate-y-0 rounded-full h-10 w-10 text-primary" />
            <CarouselNext className="static translate-y-0 rounded-full h-10 w-10 text-primary" />
          </div>
        </Carousel>

      </div>
    </section>
  );
}