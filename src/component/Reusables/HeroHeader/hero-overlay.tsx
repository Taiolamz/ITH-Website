export const HeroOverlayBg = ({
  overlayBg,
  opacity,
}: {
  overlayBg?: string;
  opacity?: string;
}) => {
  return (
    <div
      style={{
        background:
          overlayBg || "linear-gradient(180deg, #004BFF 100%, #002887 100%)",
        opacity: opacity || 0.2,
      }}
      className="absolute inset-0"
    ></div>
  );
};
