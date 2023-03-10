import React from "react";
import ReactDOM from "react-dom/client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/virtual";

function App() {
	const contents = [
		{
			img: "./assets/user-face.png",
			name: "Viezh Robert",
			from: "Warsaw,Poland",
			rate: "4.5",
			feedback:
				"Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
		},
		{
			img: "./assets/user-face.png",
			name: "Yessica Christy",
			from: "Shanxi, China",
			rate: "4.5",
			feedback:
				"I like it because I like to travel far and still can connect with high speed",
		},
		{
			img: "./assets/user-face.png",
			name: "Kim Young Jou",
			from: "Seoul, South Korea",
			rate: "5",
			feedback:
				"This is very unusual for my business that currently requires a virtual private network that has high security",
		},

		{
			img: "./assets/user-face.png",
			name: "Kim Young Jou",
			from: "Seoul, South Korea",
			rate: "5",
			feedback:
				"This is very unusual for my business that currently requires a virtual private network that has high security",
		},

		{
			img: "./assets/user-face.png",
			name: "Viezh Robert",
			from: "Warsaw,Poland",
			rate: "4.5",
			feedback:
				"Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
		},
		{
			img: "./assets/user-face.png",
			name: "Yessica Christy",
			from: "Shanxi, China",
			rate: "4.5",
			feedback:
				"I like it because I like to travel far and still can connect with high speed",
		},
	];

	const contentSlide = contents.map((content, index) => {
		return (
			<SwiperSlide key={index}>
				<Card {...content} />
			</SwiperSlide>
		);
	});
	return (
		<React.StrictMode>
			<Swiper
				modules={[Pagination]}
				loop={true}
				watchSlidesProgress={true}
				spaceBetween={50}
				breakpoints={{
					320: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 2,
					},
					1200: {
						slidesPerView: 3,
					},
				}}
				pagination={{
					el: ".feedback__swiper-pagination",
					type: "bullets",
				}}
			>
				{contentSlide}
				<Control />
			</Swiper>
		</React.StrictMode>
	);
}

function Control() {
	const swiper = useSwiper();
	return (
		<div className="feedback__slider-control feedback__slider-control-container">
			<div className="feedback__swiper-pagination"></div>
			<div className="feedback__swiper-arrows">
				<i
					onClick={() => swiper.slidePrev()}
					id="feedback-slider-btn-back"
					className="feedback__swiper-arrow feedback__swiper-arrow__back fa fa-solid fa-arrow-right"
				></i>
				<i
					onClick={() => swiper.slideNext()}
					id="feedback-slider-btn-next"
					className="feedback__swiper-arrow feedback__swiper-arrow__next fa fa-solid fa-arrow-right"
				></i>
			</div>
		</div>
	);
}

function Card({ img, name, from, rate, feedback }) {
	return (
		<div className="card-feedback">
			<div className="card-feedback__user-avatar">
				<img src={img} alt="person" className="card-feedback__avatar-img" />
			</div>
			<div className="card-feedback__user-info">
				<div className="card-feedback__name bold">{name}</div>
				<div className="card-feedback__from">{from}</div>
			</div>
			<span className="card-feedback__user-rate rate">{rate}</span>
			<p className="card-feedback__content">“{feedback}”.</p>
		</div>
	);
}

ReactDOM.createRoot(document.getElementById("root-feedback-slider")).render(
	<App />
);
