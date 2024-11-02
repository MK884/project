import React from "react";
import style from "./about.module.scss";
import { CarouselContainer, ImageBox } from "@/components";
import { khalid } from "@/data";

function About() {
  return (
    <section className={style.section}>
      <div className={style.title}>
        <h4>Merchant Khalid</h4>
      </div>
      <div style={{ display: "flex" }}>
        <CarouselContainer>
          <>
            {khalid?.map((src) => (
              <ImageBox src={src.src} key={src.src} />
            ))}
          </>
        </CarouselContainer>
      </div>
    </section>
  );
}

export default About;