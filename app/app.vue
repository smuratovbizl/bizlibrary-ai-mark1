<template>
  <UApp>
    <div class="min-h-screen">
      <ThemeSwitcher class="absolute top-4 right-4 z-10" />

      <!-- Sections below follow the required order from issue #5:
           1. Hero, 2. Problem/solution, 3. Key features, 4. How it works,
           5. Benefits/stats, 6. FAQ, 7. Final CTA, 8. Footer. -->
      <LandingHeroSection />
      <LandingProblemSolutionSection />
      <LandingFeaturesSection />
      <LandingHowItWorksSection />
      <LandingBenefitsSection />
      <LandingFaqSection />
      <LandingFinalCtaSection />
      <LandingFooterSection />
    </div>
  </UApp>
</template>
