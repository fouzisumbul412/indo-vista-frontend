import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/shared/SectionHeading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is the typical shelf life of your frozen products?',
    answer: 'Our frozen meat and seafood products typically have a shelf life of 12-24 months when stored at -18°C or below. Specific shelf life varies by product and packaging type. We provide detailed storage guidelines with every shipment.',
  },
  {
    question: 'What is the minimum order quantity (MOQ)?',
    answer: 'MOQ varies by product category. For frozen meat, typical MOQ is one 20ft reefer container (approximately 27 MT). For spices and other products, we can accommodate smaller quantities. Please contact us for specific requirements.',
  },
  {
    question: 'What payment terms do you offer?',
    answer: 'We offer flexible payment terms including Letter of Credit (L/C), Telegraphic Transfer (T/T), and Documents against Payment (D/P). Terms are discussed based on order volume and client relationship.',
  },
  {
    question: 'What documentation do you provide with shipments?',
    answer: 'We provide complete export documentation including Health Certificate, Certificate of Origin, Phytosanitary Certificate (for spices), Bill of Lading, Packing List, Commercial Invoice, and any specific certificates required by the destination country.',
  },
  {
    question: 'Can you customize packaging and labeling?',
    answer: 'Yes, we offer private labeling and customized packaging options. We can adapt packaging sizes, materials, and labels to meet your market requirements and branding needs.',
  },
  {
    question: 'What is the typical lead time from order to shipment?',
    answer: 'Standard lead time is 2-4 weeks from order confirmation, depending on product availability and quantity. For large or specialized orders, lead time may extend. We provide realistic timelines during the quotation stage.',
  },
];

export const FAQSection = () => {
  return (
    <section className="section-padding section-gradient">
      <div className="container-wide mx-auto">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our products and services."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-medium transition-shadow"
              >
                <AccordionTrigger className="text-left font-heading font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
