 import { useTranslation } from "react-i18next";
 import { ScrollReveal, StaggerContainer } from "./ScrollReveal";
 
 const painPoints = [
   "problem.pain1",
   "problem.pain2",
   "problem.pain3",
   "problem.pain4",
   "problem.pain5",
 ];
 
 export const ProblemSection = () => {
   const { t } = useTranslation();
 
   return (
     <section className="py-32 px-6 md:px-12 bg-primary">
       <div className="max-w-6xl mx-auto">
         <div className="grid md:grid-cols-2 gap-16 items-center">
           {/* Left column - Text */}
           <ScrollReveal variant="slide-left">
             <div>
               <span className="text-xs tracking-[0.4em] text-accent/80 uppercase mb-6 block">
                 {t("problem.badge")}
               </span>
               <h2 className="text-3xl md:text-4xl font-light leading-tight mb-6 text-primary-foreground">
                 {t("problem.title")}
               </h2>
               <p className="text-primary-foreground/50 font-light leading-relaxed">
                 {t("problem.description")}
               </p>
             </div>
           </ScrollReveal>
 
           {/* Right column - Pain points */}
           <StaggerContainer staggerDelay={100} className="space-y-6">
             {painPoints.map((painKey, index) => (
               <div
                 key={index}
                 className="flex items-center gap-4 p-5 border border-primary-foreground/10 hover:border-accent/30 transition-colors duration-500"
               >
                 <div className="w-2 h-2 bg-accent/60 shrink-0" />
                 <span className="text-primary-foreground/70 font-light">
                   {t(painKey)}
                 </span>
               </div>
             ))}
           </StaggerContainer>
         </div>
       </div>
     </section>
   );
 };