import { Section } from "../../../Reusables/Container";
import { all_gallery } from "./lists";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const AllGalleryImages = () => {
  return (
    <Section className="!pb-32 lg:flex lg:flex-col justify-center">
      <p className="py-10 font-semibold text-[28px] text-[#5A5B5B]">Gallery</p>
      <div className="grid lg:grid-cols-3 rows-1  lg:space-y-0 space-y-2 gap-5">
        {all_gallery.map((chi, idx) => (
          <div key={idx} className="relative">
            <LazyLoadImage
              alt={`all-gallery-images-${idx + 1}`}
              src={chi}
              className="rounded-[5px] lg:max-w-full w-full  "
              // className="rounded-[5px] lg:max-w-full w-full h-[300px] lg:max-h-full "
              effect="blur"
              srcSet={`${chi} 300w, ${chi} 800w`}
              wrapperProps={{
                style: { transitionDelay: "1s" },
              }}
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default AllGalleryImages;
