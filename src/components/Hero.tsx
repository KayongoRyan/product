export function Hero() {
  // Set this to a video URL to use video background.
  // Keep as null to use the image fallback below.
  const backgroundVideoUrl: string | null = null;
  // "https://res.cloudinary.com/dpk7o7zlw/video/upload/v1760975652/Basai_eab2yf.webm";
  const backgroundImageUrl =
    "https://sfycdn.speedsize.com/d31641c5-60cb-4a0b-8662-59094f81bb6e/https://row.representclo.com/cdn/shop/files/247SS26NEW_Desktop_Home_Page_Banner.jpg?v=1777281397&width=2880";

  return (
    <section className="relative min-h-screen overflow-hidden bg-ink text-paper">
      {backgroundVideoUrl ? (
        <video
          src={backgroundVideoUrl}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/25 to-ink/65" />

      <div className="relative z-10 flex min-h-screen items-end justify-center px-4 pb-2 md:px-6 md:pb-4">
        <h1
          className="text-center font-display text-[20vw] font-bold leading-[0.86] tracking-[-0.05em] text-paper md:text-[17vw]"
          style={{ textShadow: "0 10px 36px rgba(0,0,0,0.3)" }}
        >
          No Products
        </h1>
      </div>
    </section>
  );
}
