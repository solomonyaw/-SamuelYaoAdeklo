"use client";

import { useMemorialPage } from "@/utils/useMemorialPage";
import { GlobalStyles } from "@/components/MemorialPage/GlobalStyles";
import { Navigation } from "@/components/MemorialPage/Navigation";
import { HeroSection } from "@/components/MemorialPage/HeroSection";
import { BiographySection } from "@/components/MemorialPage/BiographySection";
import { Ornament } from "@/components/MemorialPage/Ornament";
import { LifeStoriesSection } from "@/components/MemorialPage/LifeStoriesSection";
import { LifeJourneySection } from "@/components/MemorialPage/LifeJourneySection";
import { TributesSection } from "@/components/MemorialPage/TributesSection";
import { LegacySection } from "@/components/MemorialPage/LegacySection";
import { PhotoGallery } from "@/components/MemorialPage/PhotoGallery";
import { Lightbox } from "@/components/MemorialPage/Lightbox";
import { HymnsSection } from "@/components/MemorialPage/HymnsSection";
import { DownloadSection } from "@/components/MemorialPage/DownloadSection";
import { TimelineSection } from "@/components/MemorialPage/TimelineSection";
import { InteractiveSection } from "@/components/MemorialPage/InteractiveSection";
import { ClosingSection } from "@/components/MemorialPage/ClosingSection";

export default function MemorialPage() {
  const {
    lightboxOpen,
    lightboxImage,
    candles,
    openLightbox,
    closeLightbox,
    lightCandle,
    scrollToSection,
  } = useMemorialPage();

  return (
    <>
      <GlobalStyles />

      <Navigation />

      <div id="top">
        <HeroSection onScrollToSection={scrollToSection} />
      </div>

      <BiographySection />

      <Ornament src="https://ucarecdn.com/f3c0dacd-851d-4c13-b9d5-bc64fa40e125/-/format/auto/" />

      <div id="life-stories">
        <LifeStoriesSection onOpenLightbox={openLightbox} />
      </div>

      <Ornament src="https://ucarecdn.com/9d0e2a7a-84bc-4b46-8a91-ad23595b5db5/-/format/auto/" />

      <LifeJourneySection onOpenLightbox={openLightbox} />

      <Ornament src="https://ucarecdn.com/9d0e2a7a-84bc-4b46-8a91-ad23595b5db5/-/format/auto/" />

      <TributesSection />

      <LegacySection />

      <PhotoGallery onOpenLightbox={openLightbox} />

      <Lightbox
        isOpen={lightboxOpen}
        imageSrc={lightboxImage}
        onClose={closeLightbox}
      />

      <HymnsSection />

      <DownloadSection />

      <TimelineSection />

      <InteractiveSection candles={candles} onLightCandle={lightCandle} />

      <ClosingSection />
    </>
  );
}
