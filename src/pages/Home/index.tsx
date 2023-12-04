import React from "react";
import { Header } from "@components/Header";
import { HomeCarrosel } from "@components/HomeCarrosel";
import { HomeFiltros } from "@components/HomeFiltros";
import { Footer } from "@components/Footer";

export function Home() {
  return (
    <section className="w-full flex flex-col justify-between h-screen">
      <Header />
      <div className="h-screen">
        <div className="px-16 pt-8 w-full h-96">
          <HomeCarrosel />
        </div>
        <HomeFiltros />
      </div>
      <Footer />
    </section>
  );
}
