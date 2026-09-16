import { FAQ_ITEMS } from "../../data/faq";
import { SectionHeading } from "../ui/SectionHeading";
import { Accordion } from "../ui/Accordion";

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Perguntas frequentes" />
        <div className="mt-12">
          <Accordion items={FAQ_ITEMS} />
        </div>
      </div>
    </section>
  );
}
