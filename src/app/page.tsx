"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Sparkles, Zap, Award, Star, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="large"
      sizing="small"
      background="plain"
      cardStyle="gradient-bordered"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="minimal"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Arbuz"
          navItems={[
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "Referrals", id: "referrals" },
            { name: "Testimonials", id: "testimonials" }
          ]}
          button={{
            text: "Get Started",
            href: "https://arbuz.app/signup"
          }}
          buttonClassName="px-5 py-2"
          buttonTextClassName="font-semibold"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Generate PWA Apps & Banners in Seconds"
          description="Arbuz uses AI to help you create offer-based PWA applications and high-converting ad banners instantly. Build traffic arbitrage campaigns faster than ever with credit-based generation."
          tag="AI-Powered Creation"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Start Free Trial",
              href: "https://arbuz.app/signup"
            },
            {
              text: "Watch Demo",
              href: "https://arbuz.app/demo"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763724696065-pxryaew3.jpg"
          imageAlt="Arbuz AI dashboard interface"
          frameStyle="browser"
          className="min-h-screen flex items-center"
          containerClassName="max-w-6xl mx-auto px-4 py-20"
          titleClassName="text-5xl lg:text-6xl font-bold mb-6"
          descriptionClassName="text-lg lg:text-xl opacity-90 max-w-2xl mx-auto"
          buttonContainerClassName="flex gap-4 justify-center mt-8"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="Powerful Features for Traffic Arbitrage"
          description="Everything you need to create, optimize, and launch profitable campaigns"
          tag="Capabilities"
          tagIcon={Zap}
          features={[
            {
              id: "01",
              title: "AI PWA Generator",
              description: "Create fully functional Progressive Web Apps in seconds with AI-powered templates and customization",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763724696820-vw6z2noq.jpg",
              imageAlt: "PWA generation feature"
            },
            {
              id: "02",
              title: "Smart Banner Builder",
              description: "Generate high-converting ad banners optimized for your target audience with AI design suggestions",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763724697536-p7ckg3gj.jpg",
              imageAlt: "Banner design feature"
            },
            {
              id: "03",
              title: "Real-time Analytics",
              description: "Track campaign performance, conversion rates, and ROI with comprehensive analytics dashboard",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763724698594-2ubzujml.jpg",
              imageAlt: "Analytics dashboard"
            },
            {
              id: "04",
              title: "Credit-Based System",
              description: "Pay only for what you create with our flexible credit system. No subscriptions required",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763724699327-mjsfce0z.jpg",
              imageAlt: "Credit system"
            },
            {
              id: "05",
              title: "Referral Rewards",
              description: "Earn generous commissions when you refer other traffic arbitrage professionals to Arbuz",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763724700063-8xzf5y8p.jpg",
              imageAlt: "Referral program"
            },
            {
              id: "06",
              title: "API Integration",
              description: "Integrate Arbuz with your existing tools via REST API for seamless workflow automation",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763724700063-8xzf5y8p.jpg",
              imageAlt: "API integration"
            }
          ]}
          textboxLayout="default"
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          carouselMode="buttons"
          className="py-20"
          containerClassName="max-w-6xl mx-auto px-4"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Simple, Transparent Pricing"
          description="Choose the plan that fits your traffic arbitrage volume and growth goals"
          tag="Flexible Plans"
          tagIcon={Zap}
          plans={[
            {
              id: "starter",
              badge: "Perfect to Start",
              badgeIcon: Sparkles,
              price: "$29",
              subtitle: "For traffic arbitrage beginners",
              features: [
                "100 AI-generated apps per month",
                "Unlimited banner designs",
                "Basic analytics dashboard",
                "Email support",
                "Community access"
              ]
            },
            {
              id: "pro",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$99",
              subtitle: "For growing campaigns",
              features: [
                "500 AI-generated apps per month",
                "Unlimited banner designs",
                "Advanced analytics & insights",
                "Priority email support",
                "API access",
                "Referral program participation"
              ]
            },
            {
              id: "enterprise",
              badge: "Scale Your Campaigns",
              badgeIcon: Sparkles,
              price: "Custom",
              subtitle: "For high-volume operations",
              features: [
                "Unlimited app generation",
                "Unlimited banner designs",
                "Custom analytics & reporting",
                "Dedicated account manager",
                "Custom API limits",
                "White-label options",
                "Priority 24/7 support"
              ]
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          carouselMode="buttons"
          className="py-20 bg-gradient-to-b from-transparent to-accent/5"
          containerClassName="max-w-6xl mx-auto px-4"
        />
      </div>

      <div id="referrals" data-section="referrals">
        <MetricCardTwo
          title="Referral Rewards Program"
          description="Earn generous commissions by referring traffic arbitrage professionals"
          tag="Earn More"
          tagIcon={Award}
          metrics={[
            {
              id: "1",
              value: "30%",
              description: "Lifetime Commission on Referrals"
            },
            {
              id: "2",
              value: "$500+",
              description: "Average Monthly Earnings per Referrer"
            },
            {
              id: "3",
              value: "10K+",
              description: "Active Referrers Earning Monthly"
            },
            {
              id: "4",
              value: "Unlimited",
              description: "Earning Potential with No Caps"
            }
          ]}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="scale-rotate"
          carouselMode="buttons"
          className="py-20"
          containerClassName="max-w-6xl mx-auto px-4"
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Trusted by Leading Traffic Arbitrage Professionals"
          description="Arbuz powers campaigns for thousands of successful marketers worldwide"
          tag="Industry Leaders"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763724703852-8t8h9pen.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763724704531-qg3bs1lb.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763724705041-5ki9s9x9.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763724705515-p1aeta5m.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763724706208-cjsjcmie.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763724706666-us92p4ab.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763724707203-l7ry7gxr.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763724707849-5h41y9x5.jpg"
          ]}
          textboxLayout="default"
          speed={50}
          showCard={true}
          className="py-20"
          containerClassName="max-w-6xl mx-auto px-4"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="What Our Users Say"
          description="Real results from traffic arbitrage professionals using Arbuz"
          tag="Success Stories"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Traffic Arbitrage Expert",
              company: "Digital Growth Agency",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763724700787-v60r8cj8.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Chen",
              role: "Campaign Manager",
              company: "Performance Marketing Co",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763724701523-ehzus5o1.jpg",
              imageAlt: "James Chen"
            },
            {
              id: "3",
              name: "Maya Patel",
              role: "Marketing Director",
              company: "Conversion Experts Ltd",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763724702158-k3u1f2qe.jpg",
              imageAlt: "Maya Patel"
            },
            {
              id: "4",
              name: "David Rodriguez",
              role: "Founder",
              company: "ArbitragePro Solutions",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763724703157-m3w59v2s.jpg",
              imageAlt: "David Rodriguez"
            }
          ]}
          textboxLayout="default"
          className="py-20"
          containerClassName="max-w-6xl mx-auto px-4"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          title="Stay Updated with Arbuz"
          description="Get exclusive tips, new features, and campaign strategies delivered to your inbox. Join thousands of successful traffic arbitrage professionals."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763724708831-jx195zhc.jpg"
          imageAlt="Newsletter signup"
          mediaPosition="right"
          tagIcon={Mail}
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe at any time."
          className="py-20"
          containerClassName="max-w-6xl mx-auto px-4"
          titleClassName="text-4xl font-bold mb-4"
          descriptionClassName="text-lg opacity-80 mb-8"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Arbuz"
          columns={[
            {
              items: [
                { label: "Features", href: "features" },
                { label: "Pricing", href: "pricing" },
                { label: "Referrals", href: "referrals" }
              ]
            },
            {
              items: [
                { label: "Documentation", href: "https://docs.arbuz.app" },
                { label: "API Reference", href: "https://api.arbuz.app" },
                { label: "Blog", href: "https://arbuz.app/blog" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "#" },
                { label: "Contact", href: "#" },
                { label: "Support", href: "https://support.arbuz.app" }
              ]
            },
            {
              items: [
                { label: "Terms of Service", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Cookie Policy", href: "#" }
              ]
            },
            {
              items: [
                { label: "Twitter", href: "https://twitter.com/arbuz" },
                { label: "LinkedIn", href: "https://linkedin.com/company/arbuz" },
                { label: "Discord", href: "https://discord.gg/arbuz" }
              ]
            }
          ]}
          className="py-16 border-t border-accent/20"
          containerClassName="max-w-6xl mx-auto px-4"
          logoClassName="text-3xl font-bold mb-12 text-center"
        />
      </div>
    </ThemeProvider>
  );
}