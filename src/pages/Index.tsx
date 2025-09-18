import { Facebook, Instagram, Phone, Globe, Send } from "lucide-react";
import { SocialButton } from "@/components/SocialButton";
import { TikTokIcon } from "@/components/TikTokIcon";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import departmentLogo from "@/assets/department-logo.jpg";
import departmentBanner from "@/assets/department-banner.jpg";

const Index = () => {
  const socialButtons = [
    {
      href: "https://www.facebook.com/profile.php?id=61579882245678",
      icon: Facebook,
      name: "Facebook",
      label: "Follow us on Facebook",
      colorClass: "social-facebook"
    },
    {
      href: "https://www.instagram.com/general_education_2019/",
      icon: Instagram,
      name: "Instagram", 
      label: "Follow us on Instagram",
      colorClass: "social-instagram"
    },
    {
      href: "https://www.tiktok.com/@general_education7?_t=ZS-8znHf862bQN",
      icon: TikTokIcon,
      name: "TikTok",
      label: "Follow us on TikTok",
      colorClass: "social-tiktok"
    },
    {
      href: "https://wa.me/9647501549661",
      icon: Send,
      name: "WhatsApp",
      label: "Message us on WhatsApp",
      colorClass: "social-whatsapp"
    },
    {
      href: "tel:+9647501549661",
      icon: Phone,
      name: "Call Us",
      label: "07501549661",
      colorClass: "social-phone"
    },
    {
      href: "viber://chat?number=9647501549661",
      icon: Send,
      name: "Viber",
      label: "Message us on Viber",
      colorClass: "social-viber"
    }
        
      href: "https://cihanuniversity.edu.iq/college-of-education/department-of-education/",
      icon: Globe,
      name: "Department Website",
      label: "Visit our official department website",
      colorClass: "social-website"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="gradient-hero min-h-[50vh] flex items-center justify-center relative">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center animate-fade-up">
              <div className="mb-6 flex justify-center">
                <img 
                  src={departmentLogo} 
                  alt="General Education Department Logo"
                  className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain shadow-glow rounded-full"
                />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tight">
                General Education Department
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-4 font-light">
                English Language Teaching (ELT)
              </p>
              <p className="text-base text-white/80 mb-6 max-w-2xl mx-auto">
                Cihan University - Erbil
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Social Section - Now the main focus */}
      <section className="py-16 bg-gradient-to-br from-secondary/30 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 tracking-tight">
              Connect With Us
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Stay connected with the General Education Department through our social media channels
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 mb-12 justify-items-center">
              {socialButtons.map((social, index) => (
                <div key={index} className="animate-fade-up w-full flex justify-center" style={{animationDelay: `${index * 0.1}s`}}>
                  <SocialButton
                    href={social.href}
                    icon={social.icon}
                    name={social.name}
                    label={social.label}
                    colorClass={social.colorClass}
                  />
                </div>
              ))}
            </div>
            
            <Card className="shadow-elegant border-0 gradient-primary max-w-sm mx-auto">
              <CardContent className="p-6 text-center">
                <Phone className="w-10 h-10 text-white mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">Direct Contact</h3>
                <p className="text-white/90 text-sm mb-3">Department Phone</p>
                <a 
                  href="tel:+9647501549661" 
                  className="text-xl font-bold text-white hover:text-accent transition-smooth"
                >
                  07501549661
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Empowering Education for a Better Future
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The General Education Department at Cihan University-Erbil is dedicated to providing 
                exceptional English Language Teaching (ELT) education. Established in 2019, we focus on 
                developing competent educators who will shape the future of English language learning 
                in the Kurdistan Region and beyond.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Card className="shadow-card border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <img 
                      src={departmentBanner} 
                      alt="Department Students and Faculty"
                      className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-primary">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To provide quality education in English language teaching methodologies, 
                    preparing future educators with modern pedagogical approaches and cultural awareness.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-primary">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be a leading department in English language education, contributing to 
                    educational excellence and cross-cultural understanding in the region.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-3">General Education Department</h3>
              <div className="space-y-1">
                <p className="text-primary-foreground/80">Cihan University - Erbil</p>
                <p className="text-primary-foreground/80">College of Education</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="space-y-1">
                <p className="text-primary-foreground/80 text-sm">
                  © 2025 General Education Department
                </p>
                <p className="text-primary-foreground/80 text-sm">
                  Cihan University-Erbil
                </p>
                <p className="text-primary-foreground/80 text-sm">
                  All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
