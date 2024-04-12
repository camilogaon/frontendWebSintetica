import React, { useState } from "react";



function HomePage() {
    return (
        <div>

        <section class="bg-[#003602] text-white lg:h-[600px]">
            <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div class="mx-auto max-w-3xl text-center">
                <h1
                class="bg-gradient-to-r from-[#71ff74] via-[#02e506] to-[#009903] bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                >
                Reserva aqui 

                <span class="sm:block"> tu cancha favorita. </span>
                </h1>

                <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                numquam ea!
                </p>

                <div class="mt-8 flex flex-wrap justify-center gap-4">
                <a
                    class="block w-full rounded border text-bold border-[#02e506] bg-[#02e506] px-12 py-3 text-sm font-medium text-black hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                    href="/field"
                >
                    Buscar cancha sintetica
                </a>
                </div>
            </div>
            </div>
        </section>


        <section>

        </section>
        <section>

        </section>
        </div>
    );
}

export default HomePage;
