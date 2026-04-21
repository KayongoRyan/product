export function Footer() {
  return (
    <footer id="connect" className="bg-paper px-5 pb-10 md:px-10">
      <div className="mx-auto max-w-7xl border-t-2 border-ink pt-8">
        <h2 className="font-display text-[18vw] font-black leading-[0.85] tracking-tighter md:text-[14vw]">
          NO PRODUCTS
        </h2>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-6 text-xs uppercase tracking-widest">
          <p className="flex items-center gap-2">
            <span className="grid h-5 w-5 place-items-center rounded-full border border-ink">©</span>
            Norf Crebions
          </p>
          <nav className="flex items-center gap-6">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms & Condition</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
