import React from "react";
import ReactDOM from "react-dom/client";

// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";

ReactDOM.createRoot(document.getElementById("root-company-slider")).render(
	<React.StrictMode>
		<Swiper
			modules={[Navigation, Pagination, Autoplay, A11y]}
			spaceBetween={50}
			slidesPerView={5}
			loop
			autoplay={{ delay: 3000 }}
			breakpoints={{
				1199: {
					slidesPerView: 5,
					autoplay: false,
				},
				769: {
					slidesPerView: 4,
				},
				480: {
					slidesPerView: 3,
				},
				320: {
					slidesPerView: 2,
				},
			}}
			onSwiper={(swiper) => console.log(swiper)}
			onSlideChange={() => console.log("slide change")}
		>
			<SwiperSlide>
				<img
					src="./public/assets/company/netflix.png"
					alt="netflix"
					className="company__img"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="./public/assets/company/reddit.png"
					alt="redit"
					className="company__img"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="./public/assets/company/amazon.png"
					alt="amazon"
					className="company__img"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="./public/assets/company/discord.png"
					alt="discord"
					className="company__img"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="./public/assets/company/spotify.png"
					alt="spotify"
					className="company__img"
				/>
			</SwiperSlide>
		</Swiper>
	</React.StrictMode>
);
