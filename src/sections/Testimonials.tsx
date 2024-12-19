import LayoutTitle from "./LayoutTitle";
import { TestimonialColumn } from "./TestimonialColumn";
// import testimonial from "@/utils/testimoni.json";
import { testimoni } from "@/utils/testimoni";

const firstColumn = testimoni.slice(0, 3);
const secondColumn = testimoni.slice(3, 6);
const thirdColumn = testimoni.slice(6, 9);

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <LayoutTitle
          description="From intuitive design to powerful features, our app has become an essential tool for users around the world."
          title="What our users say"
          tag="Testimonials"
        />

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialColumn testimoni={firstColumn} duration={15} />
          <TestimonialColumn
            testimoni={secondColumn}
            className="hidden md:block"
            duration={12}
          />
          <TestimonialColumn
            testimoni={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
