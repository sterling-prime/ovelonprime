 import { useTranslation } from "react-i18next";
 import { ScrollReveal, StaggerContainer } from "./ScrollReveal";
 
 export const ProcessSection = () => {
   const { t } = useTranslation();
 
   const steps = [
     { step: "01", titleKey: "process.step1.title", descKey: "process.step1.description" },
     { step: "02", titleKey: "process.step2.title", descKey: "process.step2.description" },
     { step: "03", titleKey: "process.step3.title", descKey: "process.step3.description" },
   ];
 
   return (
     <section className="py-32 px-6 md:px-12 bg-primary">
       <div className="max-w-6xl mx-auto">
         <ScrollReveal variant="fade-up" className="text-center mb-20">
           <span className="text-xs tracking-[0.4em] text-accent/80 uppercase mb-6 block">
             {t("process.badge")}
           </span>
           <h2 className="text-3xl md:text-5xl font-light leading-tight max-w-3xl mx-auto text-primary-foreground">
             {t("process.title")}
           </h2>
         </ScrollReveal>
 
         <StaggerContainer staggerDelay={150} className="grid md:grid-cols-3 gap-12">
           {steps.map((item, index) => (
             <div key={index} className="text-center">
               <div className="text-6xl font-extralight text-accent/30 mb-6">{item.step}</div>
               <h3 className="text-2xl font-light mb-4 tracking-wide text-primary-foreground">
                 {t(item.titleKey)}
               </h3>
               <p className="text-primary-foreground/50 font-light leading-relaxed">
                 {t(item.descKey)}
               </p>
             </div>
           ))}
         </StaggerContainer>
       </div>
     </section>
   );
 };